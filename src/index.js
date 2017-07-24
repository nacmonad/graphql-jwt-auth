/* eslint-disable no-console */

import express from 'express';

import { createServer } from 'http';

import './config/db';
import constants from './config/constants';
import middlewares from './config/middlewares';
import mocks from './mocks';

const app = express();

middlewares(app);

const graphQLServer = createServer(app);

//populate db with mock data then run graphql server
mocks().then(() => {
  graphQLServer.listen(constants.PORT, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`GQL Server listening on port: ${constants.PORT}`);
    }
  });
});
