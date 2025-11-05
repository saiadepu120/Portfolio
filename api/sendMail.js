import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Only POST requests allowed." });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // true for 465, false for 587 or others
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // HTML Template
  const htmlBody = `
    <div style="
      font-family: 'Segoe UI', Arial, sans-serif;
      background-color: #f8fafc;
      padding: 40px;
      color: #1e293b;
    ">
      <div style="
        max-width: 600px;
        margin: 0 auto;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      ">
        <div style="
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white;
          padding: 24px;
          text-align: center;
        ">
          <h2 style="margin: 0; font-size: 22px;">📬 New Contact Form Message</h2>
        </div>

        <div style="padding: 28px;">
          <p style="margin: 0 0 16px 0; font-size: 15px;">
            You’ve received a new message through your portfolio contact form.
          </p>

          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px; font-weight: 600; width: 100px;">Name:</td>
              <td style="padding: 8px; color: #334155;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: 600;">Email:</td>
              <td style="padding: 8px; color: #334155;">${escapeHtml(email)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: 600;">Subject:</td>
              <td style="padding: 8px; color: #334155;">${escapeHtml(subject || 'N/A')}</td>
            </tr>
          </table>

          <div style="
            margin-top: 24px;
            padding: 16px;
            background-color: #f1f5f9;
            border-left: 4px solid #3b82f6;
            border-radius: 8px;
          ">
            <p style="margin: 0 0 6px 0; font-weight: 600;">Message:</p>
            <p style="white-space: pre-wrap; margin: 0; color: #334155;">${escapeHtml(message)}</p>
          </div>
        </div>

        <div style="
          background-color: #f8fafc;
          text-align: center;
          padding: 16px;
          font-size: 13px;
          color: #64748b;
        ">
          <p style="margin: 0;">
            © ${new Date().getFullYear()} Sai Bharadwaj Adepu — Portfolio Contact Form
          </p>
        </div>
      </div>
    </div>
  `;

  // Plain text fallback (for non-HTML clients)
  const textBody = `
You’ve received a new contact form submission.

Name: ${name}
Email: ${email}
Subject: ${subject || 'N/A'}

Message:
${message}
`;

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MY_EMAIL,
      subject: subject || 'Contact Form Message',
      text: textBody,
      html: htmlBody,
    });

    res.status(200).json({ success: true, message: 'Message sent!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
}

// Helper to escape HTML safely
function escapeHtml(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
