# MBE Paying Guest

A prototype web app for managing Paying Guest hostels.

## Features
- Sign Up / Login System
- Dashboard showing hostels and room availability
- Appointment booking alert
- Auto port handling
- Purple glass UI

## Project Structure
```
MBE-PayingGuest/
├── backend/
│   ├── server.js
│   ├── users.json
│   └── hostels.json
├── frontend/
│   ├── index.html
│   ├── dashboard.html
│   ├── style.css
│   └── js/
│       ├── main.js
│       └── dashboard.js
├── package.json
└── README.md
```

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: JSON files (users.json, hostels.json)

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Server**:
   ```bash
   npm start
   ```
   or for development with auto-restart:
   ```bash
   npm run dev
   ```

3. **Access the Application**:
   Open your browser and go to `http://localhost:3000`

## Features Explained

### Authentication
- Users can sign up with a username, email, and password
- Existing users can log in with their email and password
- Session management using localStorage

### Dashboard
- View available PG hostels with room status
- Book appointments for available hostels
- Logout functionality

### Hostel Information
- DreamStay PG: Premium single & double sharing rooms with Wi-Fi (Available)
- RoyalNest PG: Cozy PG with meals included and secure access (Not Available)

## Deployment Options

### Render.com
Best permanent free Node hosting

### Replit.com
Easiest instant hosting

### Cyclic.sh
Good GitHub integration

## Theme
The app uses a purple-neon glassmorphism theme with:
- Gradient purple background
- Glass-like translucent cards with blur effect
- Smooth animations and transitions
- Responsive design for all devices

## API Endpoints

- `POST /api/signup` - Register a new user
- `POST /api/login` - Authenticate a user
- `GET /api/hostels` - Get list of hostels with availability
- `POST /api/book` - Book an appointment for a hostel

## Data Storage

User data and hostel information are stored in JSON files:
- `users.json`: Stores user account information
- `hostels.json`: Stores hostel names and availability status

## Browser Support
The application works on all modern browsers that support:
- ES6 JavaScript
- CSS3 features (Flexbox, Grid, Backdrop filters)
- Fetch API
- LocalStorage

## Development Notes

To modify hostel information, edit the `backend/hostels.json` file.

To modify the UI theme, edit the CSS variables in `frontend/style.css`.

For production deployment, consider:
- Hashing passwords before storing
- Adding input validation and sanitization
- Using a proper database instead of JSON files
- Implementing proper error handling