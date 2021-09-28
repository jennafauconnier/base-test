const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/dataInput');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/name-gender');

const nameSchema = new mongoose.Schema({
   firstName: String,
   lastNameName: String
});



app.use((req, res) => {
   res.json({ message: 'Votre requête a bien été reçue !' }); 
});

module.exports = app;