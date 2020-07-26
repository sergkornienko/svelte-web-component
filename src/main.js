import App from './App.svelte';

class Test extends HTMLElement {
  connectedCallback() {
    const dispatchEvent = this.dispatchEvent.bind(this);
    new App({
			target: this,
				props: {
          name: 'serhiiko new',
          dispatchEvent,
				}
    });
  }
}

window.customElements.define('serhiiko-svelte', Test);