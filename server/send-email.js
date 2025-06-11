import { createTransport } from 'nodemailer';
import 'dotenv/config';

export default async (req, res) => {
    if (req.method != 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { email, message } = req.body;

        if (!email || !message) {
            return res.status(400).json({ message: 'All fields required' });
        }

        const transporter = createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_FROM,
                pass: process.env.EMAIL_PW,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: 'New Freelance Contact',
            html: `
                <h3>New Freelance Contact</h3>
                <p><b>From:</b> ${email}</p>
                <h4>Message:</h4>
                <p>${message}</p>
            `,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
