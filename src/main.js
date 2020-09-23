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
