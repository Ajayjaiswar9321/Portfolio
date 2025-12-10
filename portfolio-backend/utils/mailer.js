const nodemailer = require('nodemailer');

// Email template
const getEmailTemplate = ({ name, email, subject, message }) => {
  const date = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0e17;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0e17; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1a1f2e 0%, #0d1117 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 212, 255, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(90deg, #00d4ff, #00ffc8); padding: 3px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background: #0d1117;">
                <tr>
                  <td style="padding: 30px 40px; text-align: center;">
                    <h1 style="margin: 0; color: #00d4ff; font-size: 28px; font-weight: 700; letter-spacing: 1px;">
                      📬 New Contact Message
                    </h1>
                    <p style="margin: 10px 0 0; color: #8b949e; font-size: 14px;">
                      [contact_reachout] Portfolio Inquiry
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sender Info -->
          <tr>
            <td style="padding: 30px 40px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background: rgba(0, 212, 255, 0.05); border: 1px solid rgba(0, 212, 255, 0.2); border-radius: 12px; padding: 20px;">
                <tr>
                  <td>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="50%" style="padding: 10px 15px;">
                          <p style="margin: 0 0 5px; color: #8b949e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">From</p>
                          <p style="margin: 0; color: #fff; font-size: 16px; font-weight: 600;">${name}</p>
                        </td>
                        <td width="50%" style="padding: 10px 15px;">
                          <p style="margin: 0 0 5px; color: #8b949e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                          <a href="mailto:${email}" style="color: #00d4ff; font-size: 14px; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" style="padding: 10px 15px;">
                          <p style="margin: 0 0 5px; color: #8b949e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Subject</p>
                          <p style="margin: 0; color: #00ffc8; font-size: 16px; font-weight: 500;">${subject || 'No subject'}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 25px; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px;">
                    <p style="margin: 0 0 15px; color: #8b949e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                    <p style="margin: 0; color: #e6edf3; font-size: 15px; line-height: 1.8; white-space: pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Quick Actions -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: ${subject || 'Your Portfolio Inquiry'}"
                       style="display: inline-block; padding: 14px 32px; background: linear-gradient(90deg, #00d4ff, #00ffc8); color: #0a0e17; font-size: 14px; font-weight: 600; text-decoration: none; border-radius: 8px; margin-right: 10px;">
                      ↩️ Reply to ${name.split(' ')[0]}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px; background: rgba(0, 0, 0, 0.3); border-top: 1px solid rgba(255, 255, 255, 0.1);">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin: 0; color: #8b949e; font-size: 12px;">
                      📅 Received: ${date}
                    </p>
                  </td>
                  <td align="right">
                    <p style="margin: 0; color: #8b949e; font-size: 12px;">
                      🏷️ Label: <span style="color: #00d4ff;">contact_reachout</span>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>

        <!-- Sub Footer -->
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 20px; text-align: center;">
              <p style="margin: 0; color: #484f58; font-size: 11px;">
                This email was sent from your portfolio contact form at portfolio-ajay-eight.vercel.app
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      // user: process.env.EMAIL_USER,
      // pass: process.env.EMAIL_PASS
      // user: 'Mail_sender',
      user: 'ajay.portfolio.mail@gmail.com',
      pass: 'ilasxjvzuinmzfzd',
    }
  });
};

// Send contact email
const sendContactEmail = async ({ name, email, subject, message }) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"Portfolio Contact" <ajay.portfolio.mail@gmail.com>`,
    to: process.env.EMAIL_TO || 'ajayjaiswar6340@gmail.com',
    replyTo: email,
    subject: `[contact_reachout] ${subject || 'New Message'} - from ${name}`,
    html: getEmailTemplate({ name, email, subject, message }),
    headers: {
      'X-Label': 'contact_reachout',
      'X-Priority': '1'
    }
  };

  const result = await transporter.sendMail(mailOptions);
  return result;
};

module.exports = {
  sendContactEmail,
  getEmailTemplate
};
