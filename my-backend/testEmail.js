require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD 
  }
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'jneutron815@gmail.com', 
  subject: 'Test Email',
  text: 'This is a test email from Nodemailer'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});