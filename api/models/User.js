//this is the place from which the website goes to the database and retrieves the informationg
//of the user like the name and password and checks if its there or not
//else the register page will be redirected to//
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
  username: {type: String, required: true, min: 4, unique: true},
  password: {type: String, required: true},
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;