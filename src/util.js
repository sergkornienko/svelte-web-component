import { MESSAGE_TYPE, MONTHS } from './constants.js';

export const isUser = (t) => t === MESSAGE_TYPE.USER;
export const isBot = (t) => t === MESSAGE_TYPE.BOT;
export const isActiveConv = (active, conv, i) => active === conv._id || (!active && i === 0);

const msToTime = (duration) => {
	let minutes = Math.floor((duration / (1000 * 60)) % 60);
	let	hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

	hours = (hours < 10) ? 0 + hours : hours;
	minutes = (minutes < 10) ? 0 + minutes : minutes;

	return hours + ':' + minutes;
};
const durationOld = (createdDate, updatedDate) => {
	return new Date(updatedDate - createdDate).toISOString().slice(14, -5);
};

const dateToStrShort = (createdDate) => {
	const month = MONTHS[createdDate.getMonth()];
	const date = createdDate.getDate();
	return `${month} ${date}`;
};

export const dateToString = (date) => {
	const createdDate = new Date(date.$date);
	const hours = createdDate.getHours() > 9 ? createdDate.getHours() : 0 + createdDate.getHours();
	const minutes = createdDate.getMinutes() > 9 ? createdDate.getMinutes() : 0 + createdDate.getMinutes();

	return `${hours}:${minutes} ${dateToStrShort(createdDate)}`;
};

export const formatConvDetails = (conv) =>
	`${conv.countMessages} messages (${conv.duration ? msToTime(conv.duration) : durationOld(conv._createdDate, conv._updatedDate)} min)`;
