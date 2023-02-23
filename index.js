require('dotenv').config();

const express = require('express');

const app = express();

const { PORT } = require('./config/auth');

const dbconnect = require ('./db/dbconnect');

const router = require('./router');

const cors = require ('cors');

let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(router);

dbconnect();

app.listen(PORT, ()=> console.log('Node server running on http://localhost:5500'))