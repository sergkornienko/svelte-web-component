import { CONNECTION_ID, INPUT } from './types';

export const isChatConvEvent = ({ data }) => data && data.messageType === CONNECTION_ID;

const conversationsReducer = (e, previousState) => {
	if (!isChatConvEvent(e)) return null;
	switch (e.data.type) {
		case INPUT.ADD_CONVERSATIONS:
			return previousState.concat(e.data.list);
		case INPUT.LOAD_CONVERSATIONS:
			return e.data.list.slice();
		default:
			return null;
	}
};

const messagesReducer = (e) => {
	const isMsgEvent = isChatConvEvent(e) && e.data.type === INPUT.MESSAGE;
	return isMsgEvent ? {
		avatar: e.data.avatar,
		list: e.data.list,
		botId: e.data.botId,
	} : null;
};

export {
	conversationsReducer,
	messagesReducer,
};
