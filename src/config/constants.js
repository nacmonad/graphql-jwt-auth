export default {
  PORT: process.env.PORT || 3030,
  DB_URL: 'mongodb://localhost/synapse',
  GRAPHQL_PATH: '/graphql',
  JWT_SECRET: 'supersecretphrase'
};
