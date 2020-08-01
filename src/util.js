import { MESSAGE_TYPE } from './constants.js';

export const isUser = (t) => t === MESSAGE_TYPE.USER;
export const isBot = (t) => t === MESSAGE_TYPE.BOT;
