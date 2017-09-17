var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    date: {type: Date},
    title: {type: String, required: true},
    client: {type: String},
    time: {type: String},
    desc: {type: String},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Event', schema);