import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || "smtp.gmail.com",
  port: parseInt(process.env.MAIL_PORT || "465"),
  secure: process.env.MAIL_PORT === "465", // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

const getAdminEmailTemplate = ({ name, email, message }: EmailTemplateProps) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'JetBrains Mono', monospace; background-color: #f7f6f3; color: #111111; margin: 0; padding: 40px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; padding: 40px; border: 1px solid #e7e5e4; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
    .header { border-bottom: 1px solid #e7e5e4; padding-bottom: 20px; margin-bottom: 30px; }
    .label { font-size: 10px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 8px; }
    .value { font-size: 14px; margin-bottom: 24px; color: #111111; }
    .footer { font-size: 10px; color: #a1a1aa; margin-top: 40px; text-transform: uppercase; border-top: 1px solid #e7e5e4; padding-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="label">[ INCOMING_TRANSMISSION ]</div>
      <h1 style="font-size: 18px; margin: 10px 0;">New Contact Form Submission</h1>
    </div>
    
    <div class="label">Observer ID [Name]</div>
    <div class="value">${name}</div>
    
    <div class="label">Comms Channel [Email]</div>
    <div class="value">${email}</div>
    
    <div class="label">Transmission [Message]</div>
    <div class="value" style="white-space: pre-wrap; line-height: 1.6;">${message}</div>
    
    <div class="footer">
      SYSTEM_ID: PORTFOLIO_V1 // TIMESTAMP: ${new Date().toISOString()}
    </div>
  </div>
</body>
</html>
`;

const getUserEmailTemplate = ({ name }: { name: string }) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'JetBrains Mono', monospace; background-color: #f7f6f3; color: #111111; margin: 0; padding: 40px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; padding: 40px; border: 1px solid #e7e5e4; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
    .header { border-bottom: 1px solid #e7e5e4; padding-bottom: 20px; margin-bottom: 30px; }
    .label { font-size: 10px; color: #2563eb; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 8px; }
    .footer { font-size: 10px; color: #a1a1aa; margin-top: 40px; text-transform: uppercase; border-top: 1px solid #e7e5e4; padding-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="label">[ SYSTEM_FEEDBACK ]</div>
      <h1 style="font-size: 18px; margin: 10px 0;">Transmission Received</h1>
    </div>
    
    <p style="font-size: 14px; line-height: 1.6;">Hi ${name},</p>
    <p style="font-size: 14px; line-height: 1.6;">Thank you for establishing a link. Your transmission has been successfully processed and added to the logs. I will review the data and get back to you shortly.</p>
    
    <div class="footer">
      Muhammad Shahzeb // Full-Stack Developer
    </div>
  </div>
</body>
</html>
`;

export const sendContactEmails = async ({ name, email, message }: EmailTemplateProps) => {
  const adminMailOptions = {
    from: `"${name} (Portfolio)" <${process.env.MAIL_FROM_ADDRESS}>`,
    to: process.env.ADMIN_EMAIL,
    replyTo: email,
    subject: `[PORTFOLIO] New Message from ${name}`,
    html: getAdminEmailTemplate({ name, email, message }),
  };

  const userMailOptions = {
    from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
    to: email,
    subject: "Transmission Received - Muhammad Shahzeb",
    html: getUserEmailTemplate({ name }),
  };

  await Promise.all([
    transporter.sendMail(adminMailOptions),
    transporter.sendMail(userMailOptions),
  ]);
};
