//require mongoose
const mongoose = require('mongoose');
//Create a constant (UserSchema) and assign it the mongoose schema:

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, "Please provide an email!"],
        unique: [true, "Email Exist"],
    },
    password:{
        type: String,
        required: [true, "Please provide a password"],
        unique: false,
    },
})

//Finally, export UserSchema
//The code below is saying: "create a user table or collection if there is no table with that name already".
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
