// import nodemailer from "nodemailer";

// export const sendMail = async ({ name, phone, location, service }) => {
//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: Number(process.env.SMTP_PORT),
//     secure: Number(process.env.SMTP_PORT) === 465,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   try {
//     await transporter.verify();
//     console.log("SMTP verified");
//   } catch (err) {
//     console.error("SMTP verify error:", err);
//   }

//   console.log("Send user", process.env.EMAIL_USER);
//   const mailOptions = {
//     from: `"Leads Orion Pest Control" <${process.env.EMAIL_USER}>`,
//     to: process.env.OWNER_EMAIL,
//     subject: `New Contact Form Submission ${name} ${new Date().toLocaleDateString("en-GB").replaceAll("/", "-")} - Orion Pest`,
//     html: `
//       <h2>New Lead Received</h2>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Phone:</strong> ${phone}</p>
//       <p><strong>Postcode:</strong> ${location}</p>
//       <p><strong>Type:</strong> ${service}</p>
//       <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
//     `,
//   };

//   const info = await transporter.sendMail(mailOptions);

//   console.log("Message ID:", info.messageId);
//   console.log("Accepted:", info.accepted);
//   console.log("Rejected:", info.rejected);
//   console.log("Response:", info.response);
// };

import nodemailer from "nodemailer";

export const sendMail = async ({
  fullName,
  email,
  phone,
  establishment,
  message,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

      logger: true,
      debug: true,
    });

    await transporter.verify();

    console.log("SMTP VERIFIED");
    console.log("Host:", process.env.SMTP_HOST);
    console.log("Port:", process.env.SMTP_PORT);
    console.log("User:", process.env.EMAIL_USER);
    console.log("Owner:", process.env.OWNER_EMAIL);

    const mailOptions = {
      from: `"Orion Pest Control" <${process.env.EMAIL_USER}>`,

      to: process.env.OWNER_EMAIL,
      cc: process.env.BACKUP_EMAIL,

      replyTo: process.env.EMAIL_USER,

      subject: `🐞 New Lead - ${establishment} | ${fullName}`,

      html: `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
  </head>

  <body style="margin:0;padding:0;background:#f4f7f9;font-family:Arial,sans-serif;">

    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7f9;padding:30px 0;">
      <tr>
        <td align="center">

          <table width="650" cellpadding="0" cellspacing="0"
            style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,.08);">

            <!-- Header -->
            <tr>
              <td
                style="background:#0f766e;padding:25px;text-align:center;color:#ffffff;">
                <h1 style="margin:0;font-size:28px;">
                  Orion Pest Control
                </h1>

                <p style="margin-top:8px;font-size:14px;">
                  New Website Lead Received
                </p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:30px;">

                <h2 style="margin-top:0;color:#0f766e;">
                  Lead Information
                </h2>

                <table width="100%" cellpadding="0" cellspacing="0">

                  <tr>
                    <td style="padding:12px;border-bottom:1px solid #eee;width:180px;">
                      <strong>Name</strong>
                    </td>

                    <td style="padding:12px;border-bottom:1px solid #eee;">
                      ${fullName}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px;border-bottom:1px solid #eee;">
                      <strong>Email</strong>
                    </td>

                    <td style="padding:12px;border-bottom:1px solid #eee;">
                      ${email}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px;border-bottom:1px solid #eee;">
                      <strong>Phone Number</strong>
                    </td>

                    <td style="padding:12px;border-bottom:1px solid #eee;">
                      ${phone}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px;border-bottom:1px solid #eee;">
                      <strong>Establishment</strong>
                    </td>

                    <td style="padding:12px;border-bottom:1px solid #eee;">
                      ${establishment}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px;border-bottom:1px solid #eee;">
                      <strong>Message</strong>
                    </td>

                    <td style="padding:12px;border-bottom:1px solid #eee;">
                      ${message}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px;border-bottom:1px solid #eee;">
                      <strong>Submitted On</strong>
                    </td>

                    <td style="padding:12px;border-bottom:1px solid #eee;">
                      ${new Date().toLocaleString("en-GB")}
                    </td>
                  </tr>

                </table>

                <div
                  style="margin-top:25px;padding:18px;background:#ecfdf5;border-left:4px solid #10b981;border-radius:6px;">

                  <strong>Action Required:</strong>
                  Please contact this lead as soon as possible.

                </div>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td
                style="background:#f8fafc;padding:20px;text-align:center;font-size:13px;color:#64748b;">

                Orion Pest Control Website Lead Notification

                <br><br>

                Generated automatically from
                https://orionpest.com

              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `,
    };

    console.log(JSON.stringify(mailOptions, null, 2));

    const info = await transporter.sendMail(mailOptions);

    return {
      success: true,
      info,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error: error.message,
      stack: error.stack,
    };
  }
};
