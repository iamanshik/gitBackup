const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide title of Video'],
        trim: true
        
    },
    description:{
        type: String,
        required: [true, 'must provide title of Video'],
        trim: true,
        maxlength: [120, 'dscription can not be more than 120 characters'],
    },
    likes:{
        type: Number
    },
    dislikes:{
        type: Number
    },
    tags:{
        type: Array
    },
    date:{
        type: Date
    }
  })

// tasks will the collection in the database having above schema 
module.exports = mongoose.model('videoDetails',TaskSchema)