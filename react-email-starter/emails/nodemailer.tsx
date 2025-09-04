import { render } from '@react-email/components';
import * as nodemailer from 'nodemailer';
import TpremiaEducativeEmail from './t-premia/t-premia-correo-educativo';

const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  secure: false,
  auth: {
    user: '8d518dd476779b',
    pass: '574315fd009a9f',
  },
});

export async function sendEmail(): Promise<void> {

  const emailHtml = await render(<TpremiaEducativeEmail />);

  const options: nodemailer.SendMailOptions = {
    from: 'you@example.com',
    to: 'user@gmail.com',
    subject: 'hello world',
    html: emailHtml,
  };

  await transporter.sendMail(options);
}
