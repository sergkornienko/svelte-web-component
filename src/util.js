import { MESSAGE_TYPE } from './types.js';

export const isUser = (t) => t === MESSAGE_TYPE.USER;
export const isBot = (t) => t === MESSAGE_TYPE.BOT;
