import App from './components/App.svelte';

class Test extends HTMLElement {
	connectedCallback() {
		const dispatchEvent = this.dispatchEvent.bind(this);
		new App({
			target: this,
			props: {
				dispatchEvent,
			},
		});
	}
}

window.customElements.define('chatbot-conv', Test);

window.addEventListener('pagehide',  () => {
	const data = {
		my: 'test',
	};
	navigator.sendBeacon('https://www.wix.com/support/chatbot-conv/_functions/log', JSON.stringify({ data }));
});
