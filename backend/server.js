import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Pour envoyer un message
app.post("/send", async (req, res) => {
    const { nom, prenom, email, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "your-gmail-account",
                pass: "your-gmail-password"
            }
        });

        await transporter.sendMail({
            from: `"${nom} ${prenom}" <${email}>`,
            to: "recipient-email@example.com",
            subject: "Nouveau message depuis votre site web",
            text: message
        });

        res.status(200).json({ message: "Message envoyé avec succès!" });
    } catch (error) {
        console.error("Erreur lors de l'envoi du message :", error);
        res.status(500).send("Erreur lors de l'envoi du message.");
    }
});

// Démarrage du serveur
app.listen(3000, () => {
    console.log("Serveur en écoute sur le port 3000");
});