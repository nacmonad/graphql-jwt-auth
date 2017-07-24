export default `
  scalar Date

  type Status {
    message: String!
  }

  type Auth {
    token: String!
    user: Me!
  }

  type User {
    _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
    workers: [Worker]
  }

  type Me {
    _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
    workers: [Worker]
  }

  type Tweet {
    _id: ID!
    text: String!
    createdAt: Date!
    updatedAt: Date!
  }
  type Worker {
    _id: ID!
    userId: ID!
    createdAt: Date!
    updatedAt: Date!
    devices: [Device]
  }
  type Device {
    _id: ID!
    userId: ID!
    workerId: ID!
    createdAt: Date!
    updatedAt: Date!
    geolocations: [Geolocation]
  }
  type Geolocation {
    _id:ID!
    userId:ID!
    deviceId:ID!
    coords: Coordinate
    timestamp: String
    createdAt: Date!
    updatedAt: Date!
  }
  type Coordinate {
  accuracy: Float,
  altitude: Float,
  heading: Float,
  latitude: Float,
  longitude: Float,
  speed: Float
}
  type RootQuery {
    getTweet(_id: ID!): Tweet
    getTweets: [Tweet]
    me: Me
    getUser: User
  }

  type RootMutation {
    createWorker: Worker
    createDevice(workerId:ID!): Device
    createGeolocation(userId:ID!, deviceId:ID!): Geolocation
    createTweet(text: String!): Tweet
    updateTweet(_id: ID!, text: String): Tweet
    deleteTweet(_id: ID!): Status
    signup(email: String!, fullName: String!, password: String!, avatar: String, username: String): Auth
    login(email: String!, password: String!): Auth
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;
