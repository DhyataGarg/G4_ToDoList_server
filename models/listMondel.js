const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    title: String,
    description: String,
    isCompleted: {
        type: 'boolean',
        default: false
    },
});

const List = mongoose.model('List', listSchema);
module.exports = {List};