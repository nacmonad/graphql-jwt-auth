import Benchmarks from '../../models/Benchmark';

export default {
  createBenchmark: async (_, args, context) => {
    try {
      //associate with device make+model
      //devices can post benchmarks signed by deviceId
      //creates if benchmark doesn't exist for makeModel
      const benchmark = await Benchmarks.findOneAndUpdate(
        {makeModel:"makeModel"},
        {
          $push: {"scores":{
            deviceId:args.deviceId,
            type:"fake",
            score: args.score || Math.floor(100*Math.random())
          }}
        },
        {upsert:true});
      return benchmark
    } catch (error) {
      throw error;
    }
  },
};
