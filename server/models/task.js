const mongoose = require('mongoose');
const userAccount = require('./useraccount');
const { Schema } = mongoose;

const taskSchema = new Schema({
    taskuserId: {
        type: Schema.Types.ObjectId,
        ref: userAccount,
        required: true,
    },
    taskname: {
        type: String,
        required: true,
    },
    taskdescription: {
        type: String,
        required: true,
    },
    taskstatus: {
        type: String,
        required: true,
    },
    tasktodaysdate: {
        type: Date,
        required: true,
    },
    taskduedate: {
        type: Date,
        required: true,
    },
})

const task = mongoose.model("tasks", taskSchema);
module.exports = task;
