import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import indexRouter from './routes/index.js';

// Chargement des variables d'environnement
dotenv.config();

// Initialisation de l'application
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Configurer le moteur de template
app.set("view engine", "ejs");
app.set("views", "./views");

// Utiliser les routes
app.use('/', indexRouter);

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
    console.log(`Voir http://localhost:${PORT}`);
});