// const nodemailer = require("nodemailer")

// const mailSender = async (email, title, body) => {
//   try {
//     let transporter = nodemailer.createTransport({
//       host: process.env.MAIL_HOST,
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//       secure: false,
//     })

//     let info = await transporter.sendMail({
//       from: `"Studynation | Haneef" <${process.env.MAIL_USER}>`, // sender address
//       to: `${email}`, // list of receivers
//       subject: `${title}`, // Subject line
//       html: `${body}`, // html body
//     })
//     console.log(info.response)
//     return info
//   } catch (error) {
//     console.log(error.message)
//     return error.message
//   }
// }

// module.exports = mailSender

// require("dotenv").config();

// const mailSender = async (email, title, body) => {
//   try {
//     const response = await fetch("https://api.resend.com/emails", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
//       },
//       body: JSON.stringify({
//         from: "Studynation <onboarding@resend.dev>",
//         to: [email],
//         subject: title,
//         html: body,
//       }),
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || "Failed to send email");
//     }

//     console.log("Email sent successfully, id:", data.id);
//     return data;
//   } catch (error) {
//     console.log("mailSender error:", error.message);
//     throw error; // pehle "return error.message" tha, jisse error chhup jaata tha —
//     // "throw" se ab error upar tak sahi se pahunchta hai
//   }
// };

// module.exports = mailSender;

require("dotenv").config();

const mailSender = async (email, title, body) => {
  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "studyNation",
          email: "ashadullahhaneef@gmail.com",
        },
        to: [{ email: email }],
        subject: title,
        htmlContent: body,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send email");
    }

    console.log("Email sent successfully:", data);
    return data;
  } catch (error) {
    console.log("mailSender error:", error.message);
    throw error;
  }
};

module.exports = mailSender;
