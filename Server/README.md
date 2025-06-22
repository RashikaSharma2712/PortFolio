# Portfolio Contact Server

A Node.js/Express server for handling contact form submissions from a portfolio website.

## Features

- Contact form submission handling
- Email notifications for new submissions
- MongoDB database storage
- Input validation
- CORS enabled for frontend integration

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Configuration:**
   - Copy `env.example` to `.env`
   - Update the following variables in `.env`:
     - `DATABASE_URL`: Your MongoDB connection string
     - `MAIL_HOST`: SMTP host (e.g., smtp.gmail.com)
     - `MAIL_USER`: Your email address
     - `MAIL_PASS`: Your email app password

3. **Database Setup:**
   - Ensure MongoDB is running
   - The database will be created automatically on first connection

4. **Email Setup (Optional):**
   - For Gmail, use an App Password instead of your regular password
   - Enable 2-factor authentication and generate an App Password

## Running the Server

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on port 5000 by default (or the port specified in your .env file).

## API Endpoints

### POST /api/v1/contactUs
Submit a contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss a project."
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I'd like to discuss a project.",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  "message": "Form Submitted Successfully"
}
```

## Project Structure

```
Server/
├── config/
│   └── Database.js          # Database connection
├── controllers/
│   └── ContactUs.js         # Contact form controller
├── models/
│   └── Contact.js           # Contact model
├── routes/
│   └── contact.js           # Contact routes
├── Utils/
│   └── mailSender.js        # Email utility
├── index.js                 # Main server file
├── package.json
└── env.example              # Environment variables template
```

## Dependencies

- express: Web framework
- mongoose: MongoDB ODM
- nodemailer: Email sending
- cors: Cross-origin resource sharing
- dotenv: Environment variable management
- nodemon: Development server (dev dependency) 