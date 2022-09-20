const express = require("express");
const connectDB = require("./db/connect");
const tasks = require('./routers/tasks')
// const cors = require('cors');
const app = express();
require("dotenv").config();
//middleware
app.use(express.json({extended: true}));
app.use('/api/v1',tasks)
app.use((req,res)=>{
   res.setHeader('Access-Control-Allow-Origin','*');
   res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
   res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
   next(); 
})
// app.use(cors())
const start = async () => {
  try {
     await connectDB(process.env.db_url)  // using process dotenv to send url string
     app.listen(80,console.log('server up n running on 80 and connected to db....'))
  } catch(error){ 
     console.log(error)
     console.log('server did not started because of error in db connection...')
  }
 }
 start();
 
