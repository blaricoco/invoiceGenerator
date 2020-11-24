// Dependencies
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice.js')

// Routes
router.put('/:invoiceId', (request, response)=>{

    const input = request.body;

    invoiceModel.updateOne({
        _id : request.params.invoiceId
    }
    ,{
        sellerName: input.sellerName,
        sellerAddress: input.sellerAddress,
        customerName: input.customerName,
        customerAddress: input.customerAddress,
        items: input.items,
        finalPrice: input.finalPrice,
        terms: input.terms,
        invoiceDescription: input.invoiceDescription
    }
    , (err, result)=>{
        if(err){
            console.log('ERROR: ' + err);
            response.status(500).json({message: 'Problems when updating the information.'});
        }else{
            console.log('Invoice was updated.');
            response.status(200).json({message: 'Invoice was updated successfully.'});
        }
    });
});

// Exporting the contents of file
module.exports = router;