const router = require('express').Router();
let Exercise = require ('../models/exercise.model');

router.route('/').get((req,res)=>{
    Exercise.find()
    .then(exe=>res.json(exe))
    .catch(err=>res.status(400).json('Error:'+err));
});

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.duration);
    const newExercise = new Exercise({username,
        description,
        duration,
        date})
    newExercise.save().then(()=>res.json('Exercise added'))
})
module.exports = router;