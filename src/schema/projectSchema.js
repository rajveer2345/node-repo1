const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const projectSchema = mongoose.Schema({
        image: {
            type: String
        },
        title: {
            type: String
        },
        desc: {
            type: String
        },
        category: {
            type: String
        }, 
        type:
        {
            type:String,
    
        },
        url: {
            type: String
        },
        userId: {
            type: ObjectId,
        }
    }, {
        timestamps: true
    }

);

const project = mongoose.model('project', projectSchema);
module.exports = project;