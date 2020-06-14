const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({

    name: {  type: String},
    password: { type: String },
    email: { type: String},
    phonenumber: { type: Number}
 
});
mongoose.model('user', userSchema);