import { Schema } from 'mongoose';
import mongoose from '../config/db';

const WorkerSchema = new Schema({
  	userId: { type: mongoose.Schema.Types.ObjectId, required:true, ref:'users'},
  }, { timestamps: true });

  //before hook to associate userId
  //can be handled in resolvers as well
  WorkerSchema.pre('save', function(next) {
    console.log("presave hook!")
    //this.userId = mongoose.Types.ObjectId(req.user);
    return next();
  });

export default mongoose.model('Workers', WorkerSchema);
