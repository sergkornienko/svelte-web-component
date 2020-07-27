const FALLBACK_CONV = [
	{
		'duration': 25407,
		'countMessages': 7,
		'finalMessage': 'Check out this article to learn how to change to a different Premium Plan:',
		'locale': 'en',
	},
	{
		'duration': 54329,
		'countMessages': 10,
		'finalMessage': 'Add product options (sizes, colors, etc.)',
		'locale': 'en',
		'formFactor': 'Mobile',
		'userAvatar': 'https://images-wixmp-7ef3383b5fd80a9f5a5cc686.wixmp.com/PersonalUploads/a8f4d2975a5e4e4183bfcd5bc49d46be.PNG',
		'userName': 'yellowamour1',
	},
	{
		'duration': 56956,
		'countMessages': 22,
		'finalMessage': 'Happy to hear it! Do you have any suggestions for how we can improve?',
		'locale': 'en',
		'withTicket': 'https://support.wix.com/en/ticket/e1404fb1-559b-4526-ad6e-e1844fbebd36',
		'userAvatar': 'https://images-wixmp-7ef3383b5fd80a9f5a5cc686.wixmp.com/PersonalUploads/afe194388c2b45a8b088a78f77bc8772.PNG',
		'userName': 'magicesoaps',
	},
];
const FALLBACK_MSGS = [
	{
		'message': '<p>Hi! 👋 Let’s connect you to the right Customer Care Expert. Start by choosing a topic or explaining your issue below.</p>',
		'type': 'bot',
		'nodeID': 'ROOT-NODE',
	},
	{
		'message': 'Billing, Charges & Subscriptions',
		'type': 'user',
		'inputType': 'category',
	},
];

const sendMessage = (avatar, list) =>
	window.postMessage({
		messageType: 'CHATBOT-CONV',
		type: ':SHOW_MESSAGE',
		avatar: avatar || 'https://static.parastorage.com/unpkg/@wix/marketing-header-and-footer@1.0.2282/dist/statics/assets/default-profile-image.svg',
		list: list || FALLBACK_MSGS,
	}, '*');

const sendConversations = (type, list) =>
	window.postMessage({
		messageType: 'CHATBOT-CONV',
		type,
		list: list || FALLBACK_CONV,
	}, '*');

window.input = {
	message: (avatar, list) => {
		sendMessage(avatar, list);
	},
	addConversations: (list) => {
		sendConversations(':ADD_CONVERSATIONS', list);
	},
	loadConversations: (list) => {
		sendConversations(':LOAD_CONVERSATIONS', list);
	},
};

document.addEventListener(':GET_MESSAGE', sendMessage);

const webcomponent = document.querySelector('serhiiko-svelte');
webcomponent.addEventListener(':GET_CONVERSATIONS', ({ detail }) => {
	if (detail) sendConversations(detail.responseType);
});
