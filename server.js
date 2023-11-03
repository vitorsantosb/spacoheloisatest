require('dotenv').config();

const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const cors = require('cors');
const isPortAvailable = require('is-port-available');

const router = require('./routes');
const default_port = 3000;

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs',
    partialsDir: path.join(__dirname, 'src', 'views', 'partials'),
}));

app.use(cors());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src', 'views'));

async function startServer() {
    try {
        const isAvailable = await isPortAvailable(process.env.PORT || default_port);

        if (!isAvailable) {
            throw new Error(`Port ${process.env.PORT} is not available`);
        }
        
        app.use(router);

        app.listen(process.env.PORT || default_port, function () {
            console.log(`Server started on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

startServer();