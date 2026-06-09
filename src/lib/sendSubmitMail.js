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
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Postcode:</strong> ${postcode}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Message:</strong> ${message}</p>

        <p><strong>Date:</strong> ${new Date().toLocaleString("en-GB")}</p>
      `,
    };

    const userMailOptions = {
      from: `"Orion Pest Control" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Orion Pest Control",
      html: `
        <h2>Thank You, ${name}</h2>

        <p>We have received your enquiry.</p>

        <p>Our team will contact you shortly.</p>

        <hr>

        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Postcode:</strong> ${postcode}</p>
        <p><strong>Service Type:</strong> ${type}</p>
      `,
    };

    console.log("Sending owner email");

    const ownerInfo =
      await transporter.sendMail(ownerMailOptions);

    console.log("Owner email sent");

    console.log("Sending customer email");

    const userInfo =
      await transporter.sendMail(userMailOptions);

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