import { readable, get, writable } from 'svelte/store';
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

export const messages = readable(initialMessages,
	set => window.addEventListener('message', handleOnmessage(set, messagesReducer, messages)));
export const conversations = readable([],
	set => window.addEventListener('message', handleOnmessage(set, conversationsReducer, conversations)));

export const isLoading = writable(false);
export const isSearchResult = writable(false);
