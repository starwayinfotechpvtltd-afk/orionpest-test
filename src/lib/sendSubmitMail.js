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

    const ownerMailOptions = {
      from: `"Orion Pest Control" <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      cc: process.env.BACKUP_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission ${name} - ${new Date()
        .toLocaleDateString("en-GB")
        .replaceAll("/", "-")}`,
      html: `
    <h2>New Lead Received</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Postcode:</strong> ${postcode}</p>
    <p><strong>Type:</strong> ${type}</p>
    <p><strong>Message:</strong> ${message}</p>
  `,
    };

    const userMailOptions = {
      from: `"Orion Pest Control" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Orion Pest Control",
      html: `
    <h2>Thank You, ${name}!</h2>

    <p>We have received your enquiry and our team will get back to you shortly.</p>

    <h3>Your Submission</h3>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Postcode:</strong> ${postcode}</p> 
    <p><strong>Service Type:</strong> ${type}</p>
    <p><strong>Message:</strong> ${message}</p>

    <br>

    <p>Regards,</p>
    <p><strong>Orion Pest Control</strong></p>
  `,
    };

    const ownerInfo = await transporter.sendMail(ownerMailOptions);
    const userInfo = await transporter.sendMail(userMailOptions);

    return {
      success: true,
      owner: ownerInfo,
      user: userInfo,
    };
  } catch (error) {
    return error;
  }
};
