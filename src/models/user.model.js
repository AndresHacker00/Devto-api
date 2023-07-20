//* Hacer el schema mongoose y el modelo

const mongoose = require ("mongoose")

const userSchema = new mongoose.Schema ({
    name: {
        type:String,
        // unique: true,
        required:true
    },
    email: {
        type: String,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        unique: true,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    profilePicture:{
        type: String
    }
})
//* El modelo se exporta
module.exports = mongoose.model("users", userSchema, "Users");