# 🎓 NextUp-Campus - Event Manager Platform

**NextUp-Campus** is a campus event management platform designed to streamline event discovery and participation. It allows users to explore, register, and manage campus events easily, while providing admins with control over event moderation.

---

## 🚀 **Features**

✅ User Authentication & Role Management  
✅ Event Creation, Registration, and Tracking  
✅ Notifications and Reminders  
✅ Admin Panel for Event Moderation  
✅ Responsive Design using Tailwind CSS  

---

## 🛠️ **Tech Stack**

### 🌐 **Frontend**
- React.js
- Tailwind CSS
- Axios for API requests

### 🔥 **Backend**
- Node.js + Express.js
- MongoDB (for database management)
- JWT Authentication

---

## 📚 **Installation Instructions**

### 1. **Clone the Repository**

```bash
git clone https://github.com/Aniketgawande1/NextUp-Campus.git
cd NextUp-Campus




# Postman Testing Guide for Node.js Auth & Events API

## Setup

1. First, make sure your server is running with the correct environment variables:
   ```
   npm start
   ```

2. Open Postman and create a new Collection named "Events API"

## Testing User Registration

1. Create a new request:
   - Method: POST
   - URL: `http://localhost:5000/api/users/register`
   - Headers: Content-Type: application/json
   - Body (raw JSON):
   ```json
   {
     "username": "testuser",
     "email": "test@example.com",
     "password": "password123"
   }
   ```

2. Send the request
3. Expected response (200 OK):
   ```json
   {
     "message": "User registered successfully",
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
     "user": {
       "id": "...",
       "username": "testuser",
       "email": "test@example.com"
     }
   }
   ```
4. Save this request in your collection

## Testing User Login

1. Create a new request:
   - Method: POST
   - URL: `http://localhost:5000/api/users/login`
   - Headers: Content-Type: application/json
   - Body (raw JSON):
   ```json
   {
     "email": "test@example.com",
     "password": "password123"
   }
   ```

2. Send the request
3. Expected response (200 OK):
   ```json
   {
     "message": "Login successful",
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
     "user": {
       "id": "...",
       "username": "testuser",
       "email": "test@example.com"
     }
   }
   ```
4. **Important**: Copy the token from the response - you'll need it for authorized requests

## Testing Get All Events

1. Create a new request:
   - Method: GET
   - URL: `http://localhost:5000/api/events`
   - Headers: 
     - Content-Type: application/json
     - Authorization: Bearer [paste token from login/register]

2. Send the request
3. Expected response (200 OK): Array of events (initially should be the seeded dummy events)
4. Save this request

## Testing Create New Event

1. Create a new request:
   - Method: POST
   - URL: `http://localhost:5000/api/events`
   - Headers: 
     - Content-Type: application/json
     - Authorization: Bearer [paste token from login/register]
   - Body (raw JSON):
   ```json
   {
     "title": "Team Building Workshop",
     "description": "A workshop to improve team collaboration and communication",
     "date": "2025-04-25T14:00:00.000Z",
     "location": "New York, NY"
   }
   ```

2. Send the request
3. Expected response (201 Created):
   ```json
   {
     "message": "Event created successfully",
     "event": {
       "_id": "...",
       "title": "Team Building Workshop",
       "description": "A workshop to improve team collaboration and communication",
       "date": "2025-04-25T14:00:00.000Z",
       "location": "New York, NY",
       "createdBy": "...",
       "createdAt": "..."
     }
   }
   ```
4. Save this request
5. **Important**: Copy the event ID from the response for testing the Get Single Event endpoint

## Testing Get Single Event

1. Create a new request:
   - Method: GET
   - URL: `http://localhost:5000/api/events/[paste event ID]`
   - Headers: 
     - Content-Type: application/json
     - Authorization: Bearer [paste token from login/register]

2. Send the request
3. Expected response (200 OK): The event details with the creator's information populated
4. Save this request

## Troubleshooting Common Issues

### 401 Unauthorized Error
- Make sure your token is valid and correctly formatted in the Authorization header
- Format should be exactly: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
- Check that the JWT_SECRET in your .env matches what was used to generate the token

### 404 Not Found Error for Single Event
- Verify that the event ID in the URL is correct
- Check if MongoDB is running and the event exists in the database

### 400 Bad Request
- Check the format of your request body
- Ensure all required fields are provided
- Verify email format for registration/login

### 500 Server Error
- Check your server console for detailed error messages
- Verify MongoDB connection
- Ensure environment variables are correctly set