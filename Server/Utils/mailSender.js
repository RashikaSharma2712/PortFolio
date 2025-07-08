const nodemailer = require('nodemailer');

const mailSender = async (email, title, body) => {
    try {
        // Create a transporter
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port:587,
            secure:false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        // Send mail
        let info = await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        });

        console.log("Email sent successfully:", info.messageId);
        return info;
    } catch (error) {
        console.log("Error in mailSender:", error);
        throw error;
    }
};

module.exports = mailSender; 