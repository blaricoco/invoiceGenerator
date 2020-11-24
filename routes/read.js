// Dependencies
const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice.js')

// Read all invoices
router.get('/all', (request, response)=>{
    invoiceModel.find((err, docs)=>{
        if(err){
            console.log('ERROR '+ err);
            response.status(500).json({message: 'Problems when reading information'})
        }else{
            console.log('All invoices were found.');
            response.status(200).json(docs);
        }
    });
});

// Read invoice by ID
router.get('/:invoiceId', (request, response)=>{
    invoiceModel.findOne({
        _id: request.params.invoiceId
    }, (err, invoice)=>{
        if(err){
            console.log('ERROR: ' +err);
            response.status(500).json({message: 'Problems when reading the invoice'});
        }else{
            console.log('The invoice was found.');
            response.status(200).json(invoice);
        }
    })
});

// Exporting the contents of file
module.exports = router;