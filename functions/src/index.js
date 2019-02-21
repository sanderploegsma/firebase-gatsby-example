const functions = require('firebase-functions');
const express = require('express');

const app = express();
const api = express.Router();

api.get('/greeting', (req, res) => res.send('Hello from functions!'));
app.use('/api', api);

exports.api = functions.https.onRequest(app);