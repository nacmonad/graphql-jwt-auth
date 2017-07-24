import Workers from '../../models/Workers';

export default {
  createWorker: async (_, args, { user }) => {
    console.log("creatworker async resolver")
    console.log(user)
    try {
      //associate with userId
      return await Workers.create({ userId:user._id });
    } catch (error) {
      throw error;
    }
  },
};
