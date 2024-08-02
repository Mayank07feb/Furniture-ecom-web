const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,   // Your email account
    pass: process.env.EMAIL_PASS    // Your email password
  }
});

// Function to send an email
const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,  // Sender address
    to,                           // List of receivers
    subject,                      // Subject line
    text                          // Plain text body
  };

  // Send email
  return transporter.sendMail(mailOptions)
    .then(info => {
      console.log('Email sent:', info.response);
    })
    .catch(error => {
      console.error('Error sending email:', error);
    });
};

module.exports = sendEmail;
