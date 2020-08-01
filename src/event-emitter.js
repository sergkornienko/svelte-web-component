import { setContext, getContext } from 'svelte';
import { INPUT, OUTPUT} from './constants.js';

export const initEventEmmiter = (dispatchEvent) => {
	setContext('event-emitter', {
		dispatchEvent: (type, detail) => dispatchEvent(new CustomEvent(type, { detail })),
	});
};

export const dispatchLoadConversations = () => {
	const { dispatchEvent } = getContext('event-emitter');
	dispatchEvent(OUTPUT.GET_CONVERSATIONS, {
		responseType: INPUT.ADD_CONVERSATIONS,
		// TODO: add data of filters state
	});
};

export const dispatchToggleFavorite = (_id) => {
	const { dispatchEvent } = getContext('event-emitter');
	dispatchEvent(OUTPUT.TOGGLE_FAVORITE, { _id });
};

export const dispatchToggleReaded = (_id) => {
	const { dispatchEvent } = getContext('event-emitter');
	dispatchEvent(OUTPUT.TOGGLE_READED, { _id });
};
