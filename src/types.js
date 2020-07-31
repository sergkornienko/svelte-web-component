const CONNECTION_ID = 'CHATBOT-CONV'; // used to understand that this event belong to CHATBOT-CONV
const INPUT = {
	MESSAGE: ':SHOW_MESSAGE',
	ADD_CONVERSATIONS: ':ADD_CONVERSATIONS', // add conversations to the bottom of showed now
	LOAD_CONVERSATIONS: ':LOAD_CONVERSATIONS', // load conversations of specific filtering & sorting in first time
};
const OUTPUT = {
	MESSAGE: ':GET_MESSAGE',
	GET_CONVERSATIONS: ':GET_CONVERSATIONS',
	TOGGLE_FAVORITE: ':TOGGLE_FAVORITE',
	TOGGLE_READED: ':TOGGLE_READED',
	REFRESH: ':REFRESH',
};

const MESSAGE_TYPE = {
	BOT: 'bot',
	USER: 'user',
};

export {
	CONNECTION_ID,
	INPUT,
	OUTPUT,
	MESSAGE_TYPE,
};
