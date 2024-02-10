import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import apiRouter from './src/routes/index.js';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

// Templating engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Using apiRouter
app.use(apiRouter);

app.listen(port, () => {
    console.log(`The port is listening at ${port}`);
});

// Define route handler for '/'
apiRouter.get('/', async (req, res) => {
    res.render('index');
});