import { Schema } from 'mongoose';
import mongoose from '../config/db';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

import constants from '../config/constants';

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  firstName: String,
  lastName: String,
  avatar: String,
  type: String,
  password: String,
  email: String
}, { timestamps: true });

//before hook
UserSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
    return next();
  }

  return next();
});

UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  },
  authenticateUser(password) {
    return compareSync(password, this.password);
  },
  createToken() {
    return jwt.sign(
      {
        _id: this._id
      },
      constants.JWT_SECRET
    )
  }
}

export default mongoose.model('User', UserSchema);
