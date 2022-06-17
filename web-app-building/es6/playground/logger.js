import * as constants from './constants.js';

export default function logger (message, type = constants.TYPE_LOG) {
  console[type](message);
}