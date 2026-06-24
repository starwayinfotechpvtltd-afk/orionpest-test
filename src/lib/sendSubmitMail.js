// import nodemailer from "nodemailer";

// export const sendMail = async ({ name, email, phone, postcode, type, message }) => {
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   })

//   try {
//     await transporter.verify();
//   } catch (err) {
//   }

//   const mailOptions = {
//     from: `"Leads Orion Pest Control" <${process.env.SEND_USER}>`,
//     to: process.env.OWNER_EMAIL,
//     replyTo: email,
//     subject: `New Contact Form Submission ${name} ${new Date().toLocaleDateString('en-GB').replaceAll('/', '-')} - Orion Pest`,
//     html: `
//       <h2>New Lead Received</h2>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Phone:</strong> ${phone}</p>
//       <p><strong>Postcode:</strong> ${postcode}</p>
//       <p><strong>Type:</strong> ${type}</p>
//       <p><strong>Message:</strong> ${message}</p>
//       <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
//     `,
//   };

//   const info = await transporter.sendMail(mailOptions);
// };

// // import nodemailer from "nodemailer";

// // export const sendMail = async ({ name, email, phone, service }) => {
// //   const transporter = nodemailer.createTransport({
// //     host: "orionpest.com",
// //     port: 465, // OR 587
// //     secure: true, // true for 465, false for 587
// //     auth: {
// //       user: process.env.EMAIL_USER,
// //       pass: process.env.EMAIL_PASS,
// //     },
// //   });

// //   try {
// //     await transporter.verify();
// //   } catch (err) {
// //   }

// //   const mailOptions = {
// //     from: `"Orion Pest Control" <${process.env.EMAIL_USER}>`,
// //     to: process.env.OWNER_EMAIL,
// //     replyTo: `"${name}" <${email}>`,
// //     subject: "New Contact Form Submission - Orion Pest",
// //     html: `
// //       <h2>New Lead Received</h2>
// //       <p><strong>Name:</strong> ${name}</p>
// //       <p><strong>Email:</strong> ${email}</p>
// //       <p><strong>Phone:</strong> ${phone}</p>
// //       <p><strong>Service:</strong> ${service || "N/A"}</p>
// //       <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
// //     `,
// //   };

// //   const info = await transporter.sendMail(mailOptions);
// // };

import nodemailer from "nodemailer";

export const sendMail = async ({
  name,
  email,
  phone,
  postcode,
  type,
  message,
}) => {
  try {
    console.log("Creating SMTP transporter");

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

    const ownerMailOptions = {
      from: `"Orion Pest Control" <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      cc: process.env.BACKUP_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission - ${name}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
</head>
<body style="margin:0;padding:20px;background:#f4f6f9;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background:#2563eb;padding:20px;text-align:center;">
              <h2 style="margin:0;color:#ffffff;">
                New Contact Form Submission
              </h2>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:30px;">
              <p style="margin-top:0;color:#555;">
                A new inquiry has been submitted through the website contact form.
              </p>

              <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">
                <tr style="background:#f8fafc;font-size:14px;">
                  <td style="font-weight:bold;width:150px;">Name</td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold;font-size:14px;">Email</td>
                  <td>${email}</td>
                </tr>
                <tr style="background:#f8fafc;font-size:14px;">
                  <td style="font-weight:bold;">Phone</td>
                  <td>${phone}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold;font-size:14px;">Postcode</td>
                  <td>${postcode}</td>
                </tr>
                <tr style="background:#f8fafc;font-size:14px;">
                  <td style="font-weight:bold;">Type</td>
                  <td>${type}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold;vertical-align:top;font-size:14px;">Message</td>
                  <td style="white-space:pre-wrap;">${message}</td>
                </tr>
              </table>

              <hr style="border:none;border-top:1px solid #e5e7eb;margin:25px 0;" />

              <p style="margin:0;color:#6b7280;font-size:14px;">
                <strong>Submitted:</strong> ${new Date().toLocaleString("en-GB")}
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;padding:15px;text-align:center;color:#6b7280;font-size:12px;">
              This email was generated automatically from the website contact form.
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

    const userMailOptions = {
      from: `"Orion Pest Control" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Orion Pest Control",
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
</head>
<body style="margin:0;padding:20px;background:#f4f6f9;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#2563eb;padding:25px;text-align:center;">
              <h2 style="margin:0;color:#ffffff;">
                Thank You, ${name}!
              </h2>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:30px;">
              <p style="margin-top:0;color:#374151;font-size:16px;">
                We have successfully received your enquiry.
              </p>

              <p style="color:#4b5563;line-height:1.6;">
                Thank you for contacting us. Our team is reviewing your request and will get back to you as soon as possible.
              </p>

              <div style="background:#f8fafc;border-left:4px solid #2563eb;padding:15px;margin:25px 0;">
                <p style="margin:0;color:#374151;">
                  We typically respond within 1 business day.
                </p>
              </div>

              <h3 style="color:#111827;margin-bottom:15px;">
                Your Submitted Details
              </h3>

              <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">
                <tr style="background:#f8fafc;">
                  <td style="font-weight:bold;width:150px;">Phone</td>
                  <td>${phone}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold;">Postcode</td>
                  <td>${postcode}</td>
                </tr>
                <tr style="background:#f8fafc;">
                  <td style="font-weight:bold;">Service Type</td>
                  <td>${type}</td>
                </tr>
              </table>

              <p style="margin-top:25px;color:#4b5563;">
                If any of the above information is incorrect, simply reply to this email and we'll update it.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;padding:20px;text-align:center;">
              <p style="margin:0;color:#6b7280;font-size:13px;">
                Thank you for choosing us. We look forward to assisting you.
              </p>
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

    console.log("Sending owner email");

    const ownerInfo = await transporter.sendMail(ownerMailOptions);

    console.log("Owner email sent");

    console.log("Sending customer email");

    const userInfo = await transporter.sendMail(userMailOptions);

    console.log("Customer email sent");

    return {
      success: true,
      ownerInfo,
      userInfo,
    };
  } catch (error) {
    console.error("EMAIL ERROR");
    console.error(error);

    return {
      success: false,
      error: error.message,
      stack: error.stack,
    };
  }
};
