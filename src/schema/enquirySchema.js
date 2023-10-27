const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const enquirySchema = mongoose.Schema({
        name: {
            type: String
        },
       
        email: {
            type: String
        },
        subject: {
            type: String
        },
        message:
        {
            type:String
        },
        userId: {
            type: ObjectId,
            ref: 'user'
        }
    }, {
        timestamps: true
    }

);

const enquiry = mongoose.model('enquiry', enquirySchema);
module.exports = enquiry;