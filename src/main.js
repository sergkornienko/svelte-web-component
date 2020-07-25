import App from './App.svelte';

class Test extends HTMLElement {
  connectedCallback() {
    new App({
			target: this,
				props: {
					name: 'serhiiko new'
				}
    });
  }
}

window.customElements.define('serhiiko-svelte', Test);