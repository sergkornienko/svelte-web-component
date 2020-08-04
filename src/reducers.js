import { CONNECTION_ID, INPUT } from './constants';
import { isLoading, isSearchResult } from './store.js';

export const isChatConvEvent = ({ data }) => data && data.messageType === CONNECTION_ID;

const conversationsReducer = (e, previousState) => {
	if (!isChatConvEvent(e)) return null;
	isLoading.set(false);
	switch (e.data.type) {
		case INPUT.ADD_CONVERSATIONS:
			isSearchResult.set(false);
			return previousState.concat(e.data.list);
		case INPUT.LOAD_CONVERSATIONS:
			isSearchResult.set(false);
			return e.data.list.slice();
		case INPUT.LOAD_SEARCH_RESULT:
			isSearchResult.set(true);
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
