import nodemailer from 'nodemailer';
import { envs } from "../config/enviroments/enviroments.js";

import fs from 'fs'
import path from 'path';

import { fileURLToPath } from 'url';



// Obtener el nombre de este archivo
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: envs.EMAIL,
        pass: envs.EMAIL_PASSWORD
    }
});

//  console.log('Pass:', envs.EMAIL_PASSWORD)


const sendEmailPassword = (username, email, redirectUrl) => {
    // console.log("Datos email:", username, email, redirectUrl);
    
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const templatePath = path.join(__dirname, "", "templatePassword.html");
    const htmlTemplate = fs.readFileSync(templatePath, "Utf8");

  // console.log("Datos email password:", username, email, redirectUrl);
  
    var personalizedHtml = htmlTemplate
      .replace("{{username}}", username)
      .replace("{{email}}", email)
      .replace("{{redirectUrl}}", redirectUrl);
  

  const mailOptions = {
    from: '"CUBIX CASINO" <verification.cubix@gmail.com>',
    to: email,
    subject: "🎰 Cubix password recovery",
    html: personalizedHtml,
  };

  transporter.sendMail(mailOptions, function (error) {
    if (error) {
      console.log("⚠️" + error);
    } else {
      console.log("✅ Email sent: " + username);
    }
  });
  
};


export {
    sendEmailPassword
}
