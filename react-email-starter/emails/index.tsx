import 'dotenv/config';  // Add this line at the top
import { render } from '@react-email/components';
import * as postmark from 'postmark';
import TpremiaEducativeEmail from './t-premia/t-premia-correo-educativo';

async function sendEmail() {
  console.log('API Key:', process.env.POSTMARK_API_KEY ? 'Found' : 'Missing');
  
  const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY!);
  
  const emailHtml = await render(<TpremiaEducativeEmail />);
  
  const options = {
    From: 'axel@gerundio.com.mx',
    To: 'axel@gerundio.com.mx',
    Subject: 'hello world',
    HtmlBody: emailHtml,
  };
  
  const result = await client.sendEmail(options);
  console.log('Email sent!', result);
}

sendEmail().catch(console.error);