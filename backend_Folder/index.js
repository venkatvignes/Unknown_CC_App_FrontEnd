const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

const uri = process.env.ATLAS_URI;

const app = express()

const port = process.env.PORT || 5000;

app.use(cors())

app.use(express.json());


mongoose.connect(uri)
        .then(() => {
          console.log("hi mongo");
        })

  const exerciseroutes = require('./routes/exercise')
  const userroutes = require('./routes/user')

  app.use('/exercises',exerciseroutes)
  app.use('/users', userroutes)

app.listen(port,()=>{
    console.log(`server is running port: ${port}`)
})
