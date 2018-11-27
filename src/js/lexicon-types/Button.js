export default {
	title: 'Button',
	otherTitles: [
		'Link',
		'Btn',
		'DFA Btn',
		'CTA',
	],
	description: 'Buttons perform actions on the page; whereas links will take a user away from the page. Sometimes links can look like buttons in order to attract more attention or because the action resides on another page.',
	codeExample: `
<button class="Button">Default</button>
<button class="Button Button--primary">Primary</button>
<button class="Button Button--secondary">Secondary</button>
<a class="Button" href="#">Link</a>
`,
	codeBlock: `
<!-- Buttons -->
<button class="Button">Default</button>
<button class="Button Button--primary">Primary</button>
<button class="Button Button--secondary">Secondary</button>

<!-- Link using button class -->
<a class="Button" href="#">Link</a>
`,
};
