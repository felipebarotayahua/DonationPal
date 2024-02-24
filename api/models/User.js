const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create a "pre-hook" that will run prior to a record being saved
// Hash the incoming password 10x and then store the hashed password back to the user object
UserSchema.pre('save', async function(next) {
    const user = this;
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

// Create a helper function that uses bcrypt to check the plain text version 
// of the password against the hashed version
UserSchema.methods.isValidPassword = async function(encryptedPassword) {
    const user = this;
    const compare = await bcrypt.compare(encryptedPassword, user.password);
    return compare;
}

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
