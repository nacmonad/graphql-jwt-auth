import mongoose, { Schema } from 'mongoose';

const geolocations = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref:'users', required: true},
  deviceId: { type: String, ref:'devices', required: true },
  coords: {
        accuracy:{type: Number },
        altitude:{type: Number },
        heading:{type: Number },
        latitude:{type: Number },
        longitude:{type: Number },
        speed:{type: Number }
      },
  timestamp: {type:String}
},{ timestamps: true });


export default mongoose.model('Geolocations', geolocations);
