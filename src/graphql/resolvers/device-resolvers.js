import Device from '../../models/Device';

export default {
  createDevice: async (root, args, context) => {
    try {
      //associate with userId
      return await Device.create({ userId:context.user._id, workerId:root._id });
    } catch (error) {
      throw error;
    }
  },
};
