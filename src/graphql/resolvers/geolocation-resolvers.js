import Geolocation from '../../models/Geolocation';

export default {
  createGeolocation: async (_, args, context) => {
    try {
      console.log("creating a geolocation! --from geo resolver")
      //associate with userId, associate with deviceId
      return await Geolocation.create({ userId:context.user._id, deviceId:args.deviceId });
      return null
    } catch (error) {
      throw error;
    }
  },
};
