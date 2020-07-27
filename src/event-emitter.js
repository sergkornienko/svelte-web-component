import { setContext } from 'svelte';

export const initEventEmmiter = (dispatchEvent) => {
	setContext('event-emitter', {
		dispatchEvent: (type, detail) => dispatchEvent(new CustomEvent(type, { detail })),
	});
};
