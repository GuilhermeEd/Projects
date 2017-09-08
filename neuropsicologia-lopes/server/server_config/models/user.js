var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    events: [{type: Schema.Types.ObjectId, ref: 'Event'}]
});

schema.plugin(uniqueValidator);

module.exports = mongoose.model('User', schema);