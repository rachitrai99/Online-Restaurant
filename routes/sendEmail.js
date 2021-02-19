const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');
let cron = require('node-cron');

router.get('/sendEmail/test11',function(req,res){
    res.sendFile(path.join(__dirname,'views','/sendMail/test11.html'));
  });

  router.post('/sendEmail/test11', (req, res) => {
    req.flash('success_msg', ' ');
    res.redirect('/index.html');
  });   
  
    var transporter  = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'uzumki002@gmail.com',
            pass: 'jaypee01'
        }
    });
    
    var mailOptions = {
        from: 'uzumki002@gmail.com',
        to: 'uzumki002@gmail.com , eonrai17@gmail.com',
        subject: 'Sending mail',
        html:  '<h2>Name: Kshitij Gupta </h2> </br> <h2>number: 9454904603 </h2> </br> <h2>Address: Mumbai </h2>'
    
    };

    cron.schedule('3* * * * *', ()=>{
        transporter.sendMail(mailOptions, function(error, info){
            if (error){
                console.log(error);
            }
            else{
                console.log('Email sent: '+ info.response);
            }
        });
    });

        
    
module.exports=router;