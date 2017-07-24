import { Schema } from 'mongoose';
import mongoose from '../config/db';

const WorkerSchema = new Schema({
  	userId: { type: mongoose.Schema.Types.ObjectId, required:true, ref:'users'},
  }, { timestamps: true });


export default mongoose.model('Workers', WorkerSchema);
