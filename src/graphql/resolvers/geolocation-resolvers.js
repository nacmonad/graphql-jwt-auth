import Geolocation from '../../models/Geolocation';

export default {
  createGeolocation: async (_, args, context) => {
    try {      
      return await Geolocation.create({ userId:args.userId, deviceId:args.deviceId , coords:args.coords});
    } catch (error) {
      throw error;
    }
  },
};
