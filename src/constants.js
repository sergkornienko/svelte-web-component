export const CONNECTION_ID = 'CHATBOT-CONV'; // used to understand that this event belong to CHATBOT-CONV
export const INPUT = {
	MESSAGE: ':SHOW_MESSAGE',
	ADD_CONVERSATIONS: ':ADD_CONVERSATIONS', // add conversations to the bottom of showed now
	LOAD_CONVERSATIONS: ':LOAD_CONVERSATIONS', // load conversations of specific filtering & sorting in first time
};
export const OUTPUT = {
	MESSAGE: ':GET_MESSAGE',
	GET_CONVERSATIONS: ':GET_CONVERSATIONS',
	TOGGLE_FAVORITE: ':TOGGLE_FAVORITE',
	TOGGLE_READED: ':TOGGLE_READED',
	REFRESH: ':REFRESH',
};

export const MESSAGE_TYPE = {
	BOT: 'bot',
	USER: 'user',
};

export const BOT_AVATAR = 'https://static.wixstatic.com/media/6b6193_ecd746de20294375a939b82ae3158efa~mv2.png/v1/fill/w_24,h_24/bot.png';
export const USER_AVATAR = 'https://static.wixstatic.com/media/e3b156_3d201b5439cc4306b29eec0c64e816b1~mv2.png';