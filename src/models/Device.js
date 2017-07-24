import { Schema } from 'mongoose';
import mongoose from '../config/db';

const devices = new Schema({
  uniqueId: { type: String, unique:true},
  deviceId: { type: String, unique:true},
  userId: { type: mongoose.Schema.Types.ObjectId, ref:'users', required: true},
  workerId: { type: mongoose.Schema.Types.ObjectId, ref:'workers', unique:true, default: null },
  manufacturer: { type: String },
  lastPosition: { type: Object },
  model: { type: String }
},{ timestamps: true });

export default mongoose.model('Devices', devices);
