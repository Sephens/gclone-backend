//external exports
const mongoose = require('mongoose');
require('dotenv').config();

//
async function dbConnect(){
    // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
    mongoose
    .connect(process.env.DB_URL,
        {
         //   these are options to ensure that the connection is done properly
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        })
        //Use a then...catch... block to show if the connection was successful or not:
        .then(()=>{
            console.log('Connection to Mongo Atlas was successful');
        })
        .catch((error)=>{
            console.log('Unable to connect to Mongo Atlas!!');
            console.error(error);
        });


}
module.exports = dbConnect;