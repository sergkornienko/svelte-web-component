
const convInt = setInterval(() => {
	const item = document.querySelector('chatbot-conv');
	if (item) {
		document.body.appendChild(item);
		console.log('move to the body');
		clearInterval(convInt);
	}
}, 100);
