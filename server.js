// Dependencies
const { response } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const { request } = require('http');

// Statuc web server
app.use(express.static(path.join(__dirname, 'dist')));

// Connection to MongoDB
mongoose.connect('mongodb+srv://root:Arequ1pa2!@'+
    'invoicegeneratorapp.djjnj.mongodb.net/invoiceStorage?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

mongoose.connection.on('error',(error)=>{
    console.log('ERROR' + error);
});
mongoose.connection.once('open', ()=>{
    console.log('The connection to MongoDB Atlas is working.');
});

// Body parser
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

// REST API
app.use('/api/createinvoice', require('./routes/create.js'));
app.use('/api/readinvoice', require('./routes/read.js'));
app.use('/api/updateinvoice', require('./routes/update.js'));
app.use('/api/deleteinvoice', require('./routes/delete.js'));

app.get('*', (request, response)=>{
    response.sendFile(path.join(__dirname,'dist/invoice.html'));
});

// Port
app.listen(3000, ()=>{
    console.log('Listening at localhost: 3000');
});