export default {
	title: 'Title',
	otherTitles: [
		'Headings',
	],
	description: 'Titles represent the visual typographical hierarchy. <code>h1</code>&ndash;<code>h6</code> represent search engine and content hierarchy. HTML headings must be styled with a Title to show visual hierarchy. Different heading levels can share the same visual Title.',
	codeExample: `
<div class="TitleExample">
	<h1>This is an H1</h1>
	<h2>This is an H2</h2>
	<h3>This is an H3</h3>
	<h4>This is an H4</h4>
	<h5>This is an H5</h5>
	<h6>This is an H6</h6>
	<h1 class="Title--1">This is an H1 with Title--1 class</h1>
	<h2 class="Title--1">This is an H2 with Title--1 class</h2>
</div>
`,
	codeBlock: `
<!-- Default HTML heading styles are removed with a reset -->
<h1>This is an H1</h1>
<h2>This is an H2</h2>
<h3>This is an H3</h3>
<h4>This is an H4</h4>
<h5>This is an H5</h5>
<h6>This is an H6</h6>

<!-- Title is styled with class -->
<h1 class="Title--1">Title Text</h1>

<!-- Different HTML headings can be styled with same class -->
<h2 class="Title--1">Title Text</h2>
`,
};
