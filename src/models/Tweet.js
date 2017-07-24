import { Schema } from 'mongoose';
import mongoose from '../config/db';

console.log(mongoose.models)
const TweetSchema = new Schema({
  text: String,
}, { timestamps: true });

export default mongoose.model('Tweet', TweetSchema);
