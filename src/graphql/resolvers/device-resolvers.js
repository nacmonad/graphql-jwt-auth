import Device from '../../models/Device';

export default {
  createDevice: async (_, args, context) => {
    try {
      //associate with userId
      return await Device.create({ userId:context.user._id, workerId:args.workerId });
    } catch (error) {
      throw error;
    }
  },
};
