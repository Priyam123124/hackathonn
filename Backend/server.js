// server.js

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'adan.rath@ethereal.email', // Your email address
    pass: 'rSMNqfJsh1ydx8Rdxv' // Your email password
  }
});

// Endpoint to send verification code via email
app.post('/sendVerificationCode', (req, res) => {
  const { email } = req.body;

  // Generate a random verification code
  const verificationCode = Math.floor(100000 + Math.random() * 900000);

  // Email options
  const mailOptions = {
    from: 'your_email@gmail.com',
    to: email,
    subject: 'Verification Code',
    text: `Your verification code is: ${verificationCode}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Verification code sent successfully');
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
