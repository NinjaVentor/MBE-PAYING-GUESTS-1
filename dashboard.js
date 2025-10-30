document.addEventListener("DOMContentLoaded", async () => {
    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        window.location.href = "index.html";
    }

    // Fetch and display hostels
    try {
        const response = await fetch('/api/hostels');
        const hostels = await response.json();
        displayHostels(hostels);
    } catch (error) {
        console.error('Error fetching hostels:', error);
        alert('Failed to load hostels. Please try again.');
    }
});

// Function to display hostels
function displayHostels(hostels) {
    const container = document.getElementById('hostels-container');
    
    if (!hostels || hostels.length === 0) {
        container.innerHTML = '<p>No hostels available at the moment.</p>';
        return;
    }
    
    container.innerHTML = hostels.map(hostel => `
        <div class="card">
            <h3>${hostel.name}</h3>
            <p>${getDescription(hostel.name)}</p>
            <div class="availability ${hostel.available ? 'available' : 'not-available'}">
                ${hostel.available ? '✅ Rooms Available' : '❌ No Rooms Available'}
            </div>
            <button class="book-btn" 
                    onclick="bookHostel('${hostel.name}', ${hostel.available})"
                    ${!hostel.available ? 'disabled' : ''}>
                Book Appointment
            </button>
        </div>
    `).join('');
}

// Function to get hostel descriptions
function getDescription(hostelName) {
    const descriptions = {
        'DreamStay PG': 'Premium single & double sharing rooms with Wi-Fi.',
        'RoyalNest PG': 'Cozy PG with meals included and secure access.'
    };
    
    return descriptions[hostelName] || 'Comfortable accommodation for your stay.';
}

// Function to book a hostel
async function bookHostel(name, available) {
    if (!available) {
        alert(`${name} has no rooms available.`);
        return;
    }
    
    try {
        const response = await fetch('/api/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ hostelName: name })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            alert(data.message);
            console.log(`Booking confirmed for ${name}`);
        } else {
            alert('Failed to book appointment. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
}

// Function to logout
function logout() {
    localStorage.removeItem("user");
    window.location.href = "index.html";
}