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
		'message': 'Speak with representative',
		'type': 'user',
		'inputType': 'textInput',
	},
	{
		'userIntent': 'Contact support',
		'nodeName': 'Wix-Contact-Root: EN',
		'dialogflowResponse': {
			'userIntent': 'Contact support',
			'nodeId': 'rBx3y0HVr7m0YN6Zr7No',
		},
		'messageType': 'dialogflow',
		'message': 'User make response to dialogflow and received intent: Contact support',
		'msg': 'Speak with representative',
		'nodeId': 'ROOT-NODE',
		'inputType': 'textInput',
	},
	{
		'message': '<p>Please provide a bit more information so I can connect you to the most relevant Customer Care Expert. </p>',
		'type': 'bot',
		'nodeID': 'KXk6v6QtXoKd2KLyTi9H',
	},
	{
		'message': 'Accepting Payments',
		'type': 'user',
		'inputType': 'category',
	},
	{
		'message': '<p>Got it, please choose a topic to continue.</p>',
		'type': 'bot',
		'nodeID': 'PLLdz6MB8Pb9xe7xQ2YZ',
	},
	{
		'message': 'Wix Payments',
		'type': 'user',
		'inputType': 'button',
	},
	{
		'message': '<p>Alright, which of these do you need help with?</p>',
		'type': 'bot',
		'nodeID': 'O9neEwKF6xnyqSODbIoZ',
	},
	{
		'message': 'Checking the Status of Your Wix Payments Account',
		'type': 'user',
		'inputType': 'button',
	},
	{
		'messageType': 'article',
		'message': 'Article showed',
		'linkTitle': 'Go to article',
		'linkHref': 'https://wix.wixanswers.com/apps/widget/v1/wix/ccd63104-4cc3-4479-8ccc-4482f201db39/view/en/article/0fcd0d5d-b1fc-4a56-b296-cce6956ff4bd',
	},
	{
		'message': '<p>Check this out, I think it will help:</p>',
		'type': 'bot',
		'nodeID': 'nB7wf0A1tYPUO3rMIvpC',
	},
	{
		'message': 'Speak with representative',
		'type': 'user',
		'inputType': 'textInput',
	},
	{
		'userIntent': 'Contact support',
		'nodeName': '~New Contact - Problem solved?',
		'dialogflowResponse': {
			'userIntent': 'Contact support',
			'nodeId': 'rBx3y0HVr7m0YN6Zr7No',
		},
		'messageType': 'dialogflow',
		'message': 'User make response to dialogflow and received intent: Contact support',
		'msg': 'Speak with representative',
		'nodeId': 'DlMA6J2B48b5hZ8n2bHa',
		'inputType': 'textInput',
	},
	{
		'message': '<p>I&#x27;ll connect you with a Customer Care Expert to get the issue solved.</p>',
		'type': 'bot',
		'nodeID': 'sEF5PQ4fcaGXi9SVSiSa',
	},
	{
		'message': '<p>In light of COVID-19, we’re operating with a limited team. Our callback waiting time is longer than usual. Thank you for your patience as we work to support all of our users, while ensuring the health and safety of our team.</p>',
		'type': 'bot',
		'nodeID': 'fkIiMyTKQXHYKH46Kg4p',
	},
	{
		'message': '<p>How would you like to get in touch?</p><p> </p><p><span style="font-weight:bold">Submit a ticket</span>—We&#x27;ll send a reply via email</p><p><span style="font-weight:bold">Request a callback</span>—We&#x27;ll call you in about 3 minute(s)</p>',
		'type': 'bot',
		'nodeID': 'fkIiMyTKQXHYKH46Kg4p',
	},
	{
		'message': 'Request a callback',
		'type': 'user',
		'inputType': 'button',
	},
	{
		'message': '<p>Here&#x27;s what I&#x27;ll send to our Customer Care Experts:</p>',
		'type': 'bot',
		'nodeID': 'MoLeuhO2xWojzgtCvrmc',
	},
	{
		'message': '<p><span style="font-weight:bold">Speak with representative</span></p>',
		'type': 'bot',
		'nodeID': 'MoLeuhO2xWojzgtCvrmc',
	},
	{
		'message': '<p>Do you want to add any details or screenshots to that description or does that look alright?</p>',
		'type': 'bot',
		'nodeID': 'MoLeuhO2xWojzgtCvrmc',
	},
	{
		'message': 'That looks good',
		'type': 'user',
		'inputType': 'button',
	},
	{
		'message': '<p>Got it. What phone number should we call?</p>',
		'type': 'bot',
		'nodeID': 'dE4t2VJFbtPC14oCzK48',
	},
	{
		'message': '+1 407-427-6249',
		'type': 'user',
		'inputType': ':PHONE_SELECTOR',
	},
	{
		'messageType': 'ticketSubmitted',
		'message': 'Ticket submitted',
		'linkTitle': 'Go to ticket',
		'linkHref': 'https://support.wix.com/en/ticket/e8aee983-0770-4dd5-aa33-89789d782998',
	},
	{
		'message': '<p>Request submitted! A Customer Care Expert will be in touch soon. </p><p>Want to review your submission? <span style="text-decoration:underline"><span style="text-decoration:underline"><a href=https://support.wix.com/en/ticket/e8aee983-0770-4dd5-aa33-89789d782998 target=_blank>View your ticket here</a></span></span></p>',
		'type': 'bot',
		'nodeID': 'A9iCm4YENjqfzERN1hYc',
	},
	{
		'message': '<p>Before you go, was this chat helpful?</p>',
		'type': 'bot',
		'nodeID': 'A9iCm4YENjqfzERN1hYc',
	},
	{
		'message': 'Yes',
		'type': 'user',
		'inputType': 'button',
	},
	{
		'message': '<p>Happy to hear it! Do you have any suggestions for how we can improve?</p>',
		'type': 'bot',
		'nodeID': 'HL7x7j2QmbL4IP3sl5bz',
	},
	{
		'message': 'They just called but hung up',
		'type': 'user',
		'inputType': 'textInput',
	},
	{
		'message': '<p>Thanks for getting in touch! Click below to head back to your sites while you wait for a response from our Customer Care team.</p>',
		'type': 'bot',
		'nodeID': 'Z35Xg5y4aFvYNyp8NjYO',
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


const webcomponent = document.querySelector('serhiiko-svelte');
document.addEventListener(':GET_MESSAGE', sendMessage);
webcomponent.addEventListener(':GET_CONVERSATIONS', ({ detail }) => {
	if (detail) sendConversations(detail.responseType);
});

sendMessage();
