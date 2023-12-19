require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer'); // If you plan to send emails

const app = express(); // Initialize your app before using it
const port = 3001; // Ensure this port is different from your React app's port

app.use(cors()); // Use cors middleware
app.use(bodyParser.json()); // Use bodyParser middleware

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD
    }
  });
  
  app.post('/contact', async (req, res) => {
    const { firstName, lastName, phone, service } = req.body;
  
    // Nodemailer email options
    const mailOptions = {
      from: 'youremail@example.com',
      to: 'recipient@example.com',
      subject: 'New Contact Form Submission',
      text: `You have a new submission from: ${firstName} ${lastName}, Phone: ${phone}, Interested in: ${service}`
      // You can also use `html` to send HTML-formatted emails
    };
  
    // Send email
    try {
      await transporter.sendMail(mailOptions);
      res.send({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send({ message: 'Error sending email' });
    }
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});