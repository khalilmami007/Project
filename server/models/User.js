const mongoose= require("mongoose")

const User=new mongoose.Schema({

    Firstname:{
        type:String,
        required:[true,"The FirstName is required"]

    },

    Lastname:{
        type:String,
        required:[true,"The LastName is required"]

    },
    email: {
        type: String,
        required: [true,"The Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        validate: {
            validator: (value) => {
                // here you can add your custom validation logic for email format
                return value.match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
            },
            message: "Please enter a valid email"
        }
    },
    password: {
        type: String,
        required: [true, "The Password is required"],
        minlength: [8, "The Password must be at least 8 characters"],
        validate: {
            validator: (value) => {
                // Custom validation logic for password format
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
            },
            message: "The Password must contain at least one lowercase letter, one uppercase letter, and one number"
    
        
        },}
    
    


})

const UserModel = mongoose.model('User', User)

module.exports = UserModel
