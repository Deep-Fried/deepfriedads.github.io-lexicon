export default {
	title: 'Nav Sub',
	otherTitles: [
		'Dropdown',
		'Submenu',
	],
	description: 'Nav Subs reside within the context of a higher order Nav item.',
	codeExample: `
<nav>
	<ul class="Nav">
		<li class="Nav__item is-active">
			<a href="#">Active</a>
		</li>
		<li class="Nav__item Nav__item--sub">
			<a href="#">Sub</a>
			<ul class="Nav__sub">
				<li class="Nav__item"><a href="#">Nav Sub Item</a></li>
				<li class="Nav__item"><a href="#">Nav Sub Item</a></li>
				<li class="Nav__item"><a href="#">Nav Sub Item</a></li>
			</ul>
		</li>
		<li class="Nav__item">
			<a href="#">Item</a>
		</li>
	</ul>
</nav>
`,
	codeBlock: `
<nav>
	<ul class="Nav">
		<li class="Nav__item is-active">
			<a href="#">Active</a>
		</li>
		<li class="Nav__item Nav__item--sub">
			<a href="#">Sub</a>
			<ul class="Nav__sub">
				<li class="Nav__item"><a href="#">Nav Sub Item</a></li>
				<li class="Nav__item"><a href="#">Nav Sub Item</a></li>
				<li class="Nav__item"><a href="#">Nav Sub Item</a></li>
			</ul>
		</li>
		<li class="Nav__item">
			<a href="#">Item</a>
		</li>
	</ul>
</nav>
`,
};
