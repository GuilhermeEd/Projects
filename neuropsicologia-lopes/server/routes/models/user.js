var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
    surname: {type: String},
    email: {type: String, unique: true},
    password: {type: String, requires: true}
//    ref: {type: Schema.Types.ObjectId, ref: 'Other-Model'}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);