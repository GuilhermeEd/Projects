var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required: true},
    client: {type: String},
    time: {type: String},
    desc: {type: String},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

schema.plugin(uniqueValidator);

module.exports = mongoose.model('Event', schema);