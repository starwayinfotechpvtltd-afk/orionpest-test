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

export const sendMail = async ({ name, phone, location, service }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      // Added fallback to 587 to prevent NaN errors if env var is missing
      port: Number(process.env.SMTP_PORT) || 587, 
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Verify the connection first. If this fails, it jumps to the catch block safely.
    await transporter.verify();
    console.log("SMTP verified. Send user:", process.env.EMAIL_USER);

    const mailOptions = {
      from: `"Leads Orion Pest Control" <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      subject: `New Contact Form Submission ${name} ${new Date().toLocaleDateString("en-GB").replaceAll("/", "-")} - Orion Pest`,
      html: `
        <h2>New Lead Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p> 
        <p><strong>Postcode:</strong> ${location}</p>
        <p><strong>Type:</strong> ${service}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    // 2. Send the mail
    const info = await transporter.sendMail(mailOptions);

    console.log("Message ID:", info.messageId);
    console.log("Accepted:", info.accepted);
    
    return { success: true, messageId: info.messageId };

  } catch (err) {
    // 3. If ANYTHING fails above, it is caught here. THE SERVER WILL NOT CRASH.
    console.error("CRITICAL EMAIL ERROR: ", err.message);
    return { success: false, error: err.message };
  }
};
