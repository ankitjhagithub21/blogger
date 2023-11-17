const mongoose = require('mongoose')

const connectDb = (dburl) =>{
    mongoose.connect(dburl).then(()=>{
        console.log("Database connected")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDb