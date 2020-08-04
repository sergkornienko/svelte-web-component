import { setContext } from 'svelte';
// import { INPUT, OUTPUT} from './constants.js';
// import { isLoading } from './store.js';

export const initEventEmmiter = (dispatchEvent) => {
	setContext('event-emitter', {
		dispatchEvent: (type, detail) => {
			dispatchEvent(new CustomEvent(type, { detail }));
		},
	});
};

// export const dispatchLoadConversations = (filter, sort, language) => {
// 	const { dispatchEvent } = getContext('event-emitter');
// 	isLoading.set(true);
// 	dispatchEvent(OUTPUT.GET_CONVERSATIONS, {
// 		sort,
// 		filter,
// 		language,
// 		responseType: INPUT.LOAD_CONVERSATIONS,
// 	});
// };

// export const dispatchLoadMoreConversations = () => {
// 	const { dispatchEvent } = getContext('event-emitter');
// 	isLoading.set(true);
// 	dispatchEvent(OUTPUT.GET_CONVERSATIONS, {
// 		responseType: INPUT.ADD_CONVERSATIONS,
// 	});
// };

// export const dispatchSearch = (value) => {
// 	if (!value || value === '') {
// 		return;
// 	}
// 	const { dispatchEvent } = getContext('event-emitter');
// 	dispatchEvent(OUTPUT.SEARCH, {
// 		value,
// 		responseType: INPUT.LOAD_SEARCH_RESULT,
// 	});
// };

// export const dispatchRefresh = () => {
// 	const { dispatchEvent } = getContext('event-emitter');
// 	dispatchEvent(OUTPUT.REFRESH, {
// 		responseType: INPUT.LOAD_CONVERSATIONS,
// 	});
// };

// export const dispatchToggleFavorite = (_id, value) => {
// 	const { dispatchEvent } = getContext('event-emitter');
// 	dispatchEvent(OUTPUT.TOGGLE_FAVORITE, { _id, value });
// };

// export const dispatchToggleReaded = (_id) => {
// 	const { dispatchEvent } = getContext('event-emitter');
// 	dispatchEvent(OUTPUT.TOGGLE_READED, { _id });
// };

// export const dispatchOpenMessage = (_id) => {
// 	const { dispatchEvent } = getContext('event-emitter');
// 	dispatchEvent(OUTPUT.MESSAGE, {
// 		_id,
// 		responseType: INPUT.MESSAGE,
// 	});
// };
