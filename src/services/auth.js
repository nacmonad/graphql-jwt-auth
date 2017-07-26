import jwt from 'jsonwebtoken';

import constants from '../config/constants';
import User from '../models/User';

export async function requireAuth(user) {
  //checks auth and returns user
  console.log("checking")
  console.log(user)
  const me = await User.findById(user._id);
  if (!user || !user._id) {
    throw new Error('Unauthorized!');
  }
  if (!me) {
    throw new Error('Unauthorized!');
  }
  return me;
}

export function decodeToken(token) {
  //decodes provided JWT,
  //returns decoded user or error
  const arr = token.split(' ');
  console.log("decoding ")
  console.log(token)
  if (arr[0] === 'Bearer') {
    try {
      const res = jwt.verify(arr[1], constants.JWT_SECRET)
      return res;
    } catch (tokenError) {
      console.log(tokenError)
      return new Error('JWT is not valid!');
    }
  }
  console.log("unhandled err")
  return new Error('JWT is not valid!');
}
