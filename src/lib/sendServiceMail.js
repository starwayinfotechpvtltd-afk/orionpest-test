import nodemailer from "nodemailer";

export const sendMail = async ({ name, phone, location, service }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.verify();
  } catch (err) {
  }

  const mailOptions = {
    from: `"Leads Orion Pest Control" <${process.env.SEND_USER}>`,
    to: process.env.OWNER_EMAIL,
    subject: `New Contact Form Submission ${name} ${new Date().toLocaleDateString('en-GB').replaceAll('/', '-')} - Orion Pest`,
    html: `
      <h2>New Lead Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Postcode:</strong> ${location}</p>
      <p><strong>Type:</strong> ${service}</p>
      <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
};