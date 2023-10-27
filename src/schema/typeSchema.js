const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const typeSchema = mongoose.Schema({

    type: {
        type: String
    }, 
     userId: {
        type: ObjectId,
        ref: 'user'
    }

}, {
    timestamps: true
}

);

const type = mongoose.model('type', typeSchema);
module.exports = type;