export default `
  scalar Date

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
    benchmarks: [Benchmark]
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
input CoordinateInput {
  accuracy: Float,
  altitude: Float,
  heading: Float,
  latitude: Float,
  longitude: Float,
  speed: Float
}

type Benchmark {
  _id:ID!
  makeModel:String
  scores: [Score]
}
type Score {
  _id:ID!
  deviceId:ID!
  type:String!
  score:Float!
}
  type RootQuery {
    me: Me
    getUser: User
    getWorkers: [Worker]
    getWorker(_id:ID!): Worker

  }

  type RootMutation {
    signup(email: String!, fullName: String!, password: String!, avatar: String, username: String): Auth
    login(email: String!, password: String!): Auth
    createWorker: Worker
    createDevice(workerId:ID!): Device
    createGeolocation(userId:ID!, deviceId:ID!, coords: CoordinateInput, timestamp:String): Geolocation
    createBenchmark(deviceId:ID!) : Benchmark
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;
