const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['https://nutaro.de', 'http://localhost:9090'],  // Allowed domains
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Create Gmail transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
    }
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
    try {
        const { name, email, subject, message, recipient } = req.body;

        // Validate the recipient to prevent email spoofing
        const allowedRecipients = ['info@nutaro.de', 'booking@nutaro.de'];
        if (!allowedRecipients.includes(recipient)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid recipient'
            });
        }

        // Email options
        const mailOptions = {
            from: `"Nutaro Contact Form" <${process.env.GMAIL_USER}>`,
            to: recipient,
            replyTo: email,
            subject: `Website Contact: ${subject}`,
            text: `Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Message from Website Contact Form</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #333; margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        res.header('Content-Type', 'application/json');
        res.status(200).json({
            success: true,
            message: 'Email sent successfully'
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.header('Content-Type', 'application/json');
        res.status(500).json({
            success: false,
            message: 'Error sending email',
            error: error.message
        });
    }
});

// Simple health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});