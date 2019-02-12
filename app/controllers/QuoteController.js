

const Quote = require('../models/quote');

const quoteController = {
    create: (req, res) => {
        var quote = new Quote(req.body);

        if(req.body.message != ''){
            quote.save((err)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log("Successfully created a quote")
                }
            })
        }else{
            console.log("Message can not be empty!");
        }
    }
}



module.exports = quoteController;