import Workers from '../../models/Workers';

export default {
  getWorker: async (_, {_id}, { token, user }) => {
    console.log("get worker async resolver")
    console.log(_id)
    console.log(token)
    console.log(user)
    try {
      //associate with userId
      return await Workers.findOne({ _id });
    } catch (error) {
      throw error;
    }
  },
  getWorkers: async (_, args, { user }) => {
    console.log("get workers async resolver")
    console.log(user)
    try {
      //associate with userId
      return await Workers.find({ userId:user._id});
    } catch (error) {
      throw error;
    }
  },
  createWorker: async (_, args, context) => {
    console.log("creatworker async resolver")
    console.log(args)
    console.log(context)
    try {
      //associate with userId
      return await Workers.create({ userId:context.user._id });
    } catch (error) {
      throw error;
    }
  },

};
