const mongoose = require('mongoose')

const databaseConnect =async ()=>{
 await mongoose.connect('mongodb+srv://mechpandey01:yZAzWY1c2ZNQ8HyD@cluster0.tvubhhn.mongodb.net/?retryWrites=true&w=majority')
 console.log("connected to database successfully")
}    