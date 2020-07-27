import { readable, get } from 'svelte/store';
import { messagesReducer, conversationsReducer } from './reducers';

const handleOnmessage = (set, reducer, store) => {
	return (e) => {
		const state = reducer(e, get(store));
		if (state) set(state);
	};
};

const initialMessages = {
	avatar: '',
	list: [],
};

const messages = readable(initialMessages, set => window.addEventListener('message', handleOnmessage(set, messagesReducer, messages)));
const conversations = readable([], set => window.addEventListener('message', handleOnmessage(set, conversationsReducer, conversations)));

export {
	messages,
	conversations,
};
