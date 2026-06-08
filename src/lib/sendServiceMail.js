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
  name,
  phone,
  location,
  service,
}) => {
  try {
    console.log("\n==============================");
    console.log("CREATING SMTP TRANSPORT");
    console.log("==============================");

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

    console.log("\n==============================");
    console.log("VERIFYING SMTP");
    console.log("==============================");

    await transporter.verify();

    console.log("SMTP VERIFIED");
    console.log("Host:", process.env.SMTP_HOST);
    console.log("Port:", process.env.SMTP_PORT);
    console.log("User:", process.env.EMAIL_USER);
    console.log("Owner:", process.env.OWNER_EMAIL);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,

      subject: `New Lead - ${name} | Orion Pest Control`,

      text: `
NEW LEAD RECEIVED

Name: ${name}
Phone: ${phone}
Location: ${location}
Service: ${service}

Submitted:
${new Date().toLocaleString()}
      `,
    };

    console.log("\n==============================");
    console.log("MAIL OPTIONS");
    console.log("==============================");
    console.log(JSON.stringify(mailOptions, null, 2));

    const info = await transporter.sendMail(mailOptions);

    console.log("\n==============================");
    console.log("EMAIL SENT");
    console.log("==============================");
    console.log("Message ID:", info.messageId);
    console.log("Envelope:", info.envelope);
    console.log("Accepted:", info.accepted);
    console.log("Rejected:", info.rejected);
    console.log("Pending:", info.pending);
    console.log("Response:", info.response);
    console.log("Message Size:", info.messageSize);

    return {
      success: true,
      info,
    };
  } catch (error) {
    console.log("\n==============================");
    console.log("EMAIL ERROR");
    console.log("==============================");

    console.error(error);

    return {
      success: false,
      error: error.message,
      stack: error.stack,
    };
  }
};




