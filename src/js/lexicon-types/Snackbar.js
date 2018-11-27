export default {
	title: 'Snackbar',
	otherTitles: [
		'Alert Bar',
		'Announcement',
		'Banner',
		'Sheet',
		'Toaster',
		'Top Bar',
	],
	description: 'Snackbars give users context with a Message, either along the top or bottom of the window. Snackbars are dismissable and can contain actions or simply text. Some snackbars will display without user interaction, e.g., on page load.',
	codeExample: `
<button class="Button Button--snackbar" data-target="#snackbar">Show Snackbar</button>
<div id="snackbar" class="Snackbar">
	This is the snackbar. Click to dismiss.
</div>
`,
	codeBlock: `
<div id="snackbar" class="Snackbar">
	This is the snackbar. Click to dismiss.
</div>
`,
};
