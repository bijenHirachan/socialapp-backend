const nodeMailer = require("nodemailer")


exports.sendEmail = async (options) => {
    const transporter = nodeMailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        },
        service: process.env.SMTP_SERVICE

    })

    const mailOptions = {
        from: "bijen.hirachan@gmail.com",
        to: options.email,
        subject: options.subject,
        text: options.message
    }

    await transporter.sendMail(mailOptions)
}