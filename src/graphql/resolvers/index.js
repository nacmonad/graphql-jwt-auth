import GraphQLDate from 'graphql-date';

import TweetResolvers from './tweet-resolvers';
import UserResolvers from './user-resolvers';
import WorkerResolvers from './worker-resolvers';
import DeviceResolvers from './device-resolvers';
import GeolocationResolvers from './geolocation-resolvers';
import BenchmarkResolvers from './benchmark-resolvers';

import Workers from '../../models/Workers';
import Devices from '../../models/Device';
import Geolocations from '../../models/Geolocation';

export default {
  Date: GraphQLDate,
  Me: {
    async workers(root, args, context) {
        try {
            return await Workers.find({userId:root._id})
        } catch (e) {
          throw e
        }
      }
    },
  Worker: {
    async devices(root, args, context) {
      try {
        return await Devices.find({workerId:root._id})
      } catch (e) {
        throw e
      }
    }
  },
  Device: {
    async geolocations(root, args, context) {
      try {
          return await Geolocations.find({deviceId:root._id})
      } catch (e) {
        throw e
      }
    }
  },
  RootQuery: {
    getTweet: TweetResolvers.getTweet,
    getTweets: TweetResolvers.getTweets,
    me: UserResolvers.me
  },
  RootMutation: {
    createBenchmark: BenchmarkResolvers.createBenchmark,
    createGeolocation: GeolocationResolvers.createGeolocation,
    createDevice: DeviceResolvers.createDevice,
    createWorker: WorkerResolvers.createWorker,
    createTweet: TweetResolvers.createTweet,
    updateTweet: TweetResolvers.updateTweet,
    deleteTweet: TweetResolvers.deleteTweet,
    signup: UserResolvers.signup,
    login: UserResolvers.login
  }
};
