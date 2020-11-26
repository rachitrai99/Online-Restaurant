const path = require('path');
const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
 //router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// router.get('/', (req, res,next)=>{
//     res.sendFile(path.join(__dirname, 'views', 'hoga.html'));
// });



router.use(express.static('views'));
router.get('/',forwardAuthenticated,function(req,res){
  res.sendFile(path.join(__dirname,'views','/index.html'));
  //__dirname : It will resolve to your project folder.s
});  

router.get('/welcome', forwardAuthenticated, (req, res) => res.render('welcome'));

router.use(express.static('views'));
router.get('/cart',forwardAuthenticated,function(req,res){
  res.sendFile(path.join(__dirname,'views','/cart.html'));
  //__dirname : It will resolve to your project folder.s
}); 


router.get('/checkOut',forwardAuthenticated,function(req,res){
  res.sendFile(path.join(__dirname,'views','/checkOut.html'));
  //__dirname : It will resolve to your project folder.s
});  

// Dashboard

router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);


// router.get('/checkOut', ensureAuthenticated, (req, res) =>
//   res.render('checkOut', {
//     user: req.user
//   })
// );


module.exports = router;
