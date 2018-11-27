export default {
	title: 'Modal',
	otherTitles: [
		'Overlay',
		'Pop Up',
		'FancyBox',
		'Lightbox',
		'Backdrop',
		'Dialog',
	],
	description: 'Modals interrupt the user for an action or temporary experience.',
	codeExample: `
<button class="Button Button--modal" data-target="#modal">Open Modal</button>
<div id="modal" class="Modal">
	<div class="Container">
		<div class="Modal__content">
			<p class="Title--1">Title</p>
			<p>Horseradish sauce fried pickles General Tso’s chicken. Mozzarella sticks fish and chips pork dumplings crawfish tails calamari. Falafel tortilla chips baklava veal parmigiana latkes. Funnel cakes Cajun crabcakes french fries. Crawfish pies fried Snickers kroketten pork dumplings. Kroketten fried Twinkies eggplant parm fried Oreos.</p>
		</div>
		<button class="Modal__button" data-target="#modal">Close</button>
	</div>
</div>
`,
	codeBlock: `
<button class="Button Button--modal" data-target="#modal">Open Modal</button>
<div id="modal" class="Modal">
	<div class="Container">
		<div class="Modal__content">
			<p class="Title--1">Title</p>
			<p>...</p>
		</div>
		<button class="Modal__button" data-target="#modal">Close</button>
	</div>
</div>
`,
};
