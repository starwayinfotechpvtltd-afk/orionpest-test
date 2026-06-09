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
  const transporter = nodemailer.createTransport({
<<<<<<< HEAD
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
=======
    host: process.env.SMTP_HOST, // mail.orionpest.com
    port: Number(process.env.SMTP_PORT), // 465
    secure: true,
>>>>>>> ec343ab7ef583512f35b7c43e85f5c10b04f5829
    auth: {
      user: process.env.EMAIL_USER, // online@orionpest.com
      pass: process.env.EMAIL_PASS,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });

  try {
    await transporter.verify();
    console.log("SMTP connection verified");
  } catch (err) {
    console.error("SMTP Verify Error:", err);
    throw err;
  }

  const mailOptions = {
    from: `"Leads Orion Pest Control" <${process.env.EMAIL_USER}>`,
    to: process.env.OWNER_EMAIL,
    replyTo: email,
    subject: `New Contact Form Submission ${name} ${new Date()
      .toLocaleDateString("en-GB")
      .replaceAll("/", "-")} - Orion Pest`,
    html: `
      <h2>New Lead Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Postcode:</strong> ${postcode}</p>
      <p><strong>Type:</strong> ${type}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
    `,
  };

  const info = await transporter.sendMail(mailOptions);

  console.log("Message ID:", info.messageId);

  return info;
};