const router = require('express').Router();
let User = require ('../models/user.model');

router.route('/').get((req,res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error:'+err));
});

router.route('/add').post((req,res)=>{
    const username = req.body.name;
    const Age = req.body.age;
    const emailId = req.body.emailId;
    const mobileNo = req.body.mobileNo;
    
    const newUser = new User({username,Age,emailId,mobileNo})
    newUser.save().then(()=>res.json('User added successfully'))
})
module.exports = router;