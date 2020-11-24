// Dependencies
const express = require('express');
const router = express.Router();
const invoiceModel = require('../models/invoice.js');

// Routes
router.delete('/:invoiceId', (request, response)=>{
    invoiceModel.deleteOne({
        _id: request.params.invoiceId
    },(err)=>{
        if(err){
            console.log('ERROR: ' + err);
            response.status(500).json({message: "Problems when removing the invoice."});
        }else{
            console.log('The invoice was removed from MongoDB');
            response.status(200).json({message: 'The invoice was removed from MongoDB.'});
        }
    })
});

// Exporting the contents of file
module.exports = router;