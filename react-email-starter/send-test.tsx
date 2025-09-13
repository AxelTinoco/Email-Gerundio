import { sendEmail } from './emails/nodemailer';

sendEmail()
  .then(() => console.log('Email sent successfully!'))
  .catch((error) => console.error('Error sending email:', error));