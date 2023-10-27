const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const userSchema = mongoose.Schema({
        image: {
            type: String
        },
        username: {
            type: String
        },
       image: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
        role:
        {
            type:String
        },
        name: {
            type: String
        },
        dob: {
            type: Date
        },
        gender: {
            type: String
        },
        nationality: {
            type: String
        },
        status:{
            type:String,
            default:'pending',
        },
        phone: {
            type: Number
        },
        type:
        {
            type:String,
        }
    }, {
        timestamps: true
    }

);

const user = mongoose.model('user', userSchema);
module.exports = user;