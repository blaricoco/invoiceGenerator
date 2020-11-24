// Dependencies
const { response } = require('express');
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice.js')
// Routes
router.post('/', (request, response)=>{
    const input = request.body;
    const newDocument = new invoiceModel({
        sellerName: input.sellerName,
        sellerAddress: input.sellerAddress,
        customerName: input.customerName,
        customerAddress: input.customerAddress,
        items: input.items,
        finalPrice: input.finalPrice,
        terms: input.terms,
        invoiceDescription: input.invoiceDescription
    });
    // Saving information inside the database
    newDocument.save((err, doc)=>{
        if(err){
            // Something went wrong
            console.log('ERROR: ' + err);
            response.status(500).json({message: 'Problems when saving data'})
        }else{
            // Success
            console.log('Invoice was created successfully.');
            response.status(200).json({message: 'The invoice was created successfully.'})
        }
    });

});


// Exporting the contents of file
module.exports = router;