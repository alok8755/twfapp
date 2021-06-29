const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const mongoose = require('mongoose');
const db = mongoose.connection;

const cors = require('cors');



mongoose.connect('mongodb://localhost/TaskDatabase', {useNewUrlParser: true, useUnifiedTopology: true});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected!')
});


require('dotenv').config()
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

//CORS
app.use(cors({origin: true, credentials: true}));

// body-parser
app.use('/', jsonParser, require('./routes/auth'));
