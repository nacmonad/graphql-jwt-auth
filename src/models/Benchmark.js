import { Schema } from 'mongoose';
import mongoose from '../config/db';

const benchmarks = new Schema({
  makeModel: { type: String, required:true, unique:true},
  scores : [{
    deviceId: { type: mongoose.Schema.Types.ObjectId, ref:'devices', required: true },
    type : { type:String },
    score : { type:Number }
     }]
},{ timestamps: true });

export default mongoose.model('Benchmarks', benchmarks);
