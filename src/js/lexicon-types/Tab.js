export default {
	title: 'Tab',
	otherTitles: [
		'Tabbed Content',
	],
	description: 'Tabs, like Drawers, control the visibility of their related content. However, tabs are grouped and can only display one content at a time. Tabs are almost always visually similar to their physical counterparts.',
	codeExample: `
<nav>
	<ul class="TabGroup">
		<li class="Tab is-active">
			<a href="#" data-target="#tabContent-1">Tab 1</a>
		</li>
		<li class="Tab">
			<a href="#" data-target="#tabContent-2">Tab 2</a>
		</li>
		<li class="Tab">
			<a href="#" data-target="#tabContent-3">Tab 3</a>
		</li>
		<li class="Tab">
			<a href="#" data-target="#tabContent-4">Tab 4</a>
		</li>
		<li class="Tab">
			<a href="#" data-target="#tabContent-5">Tab 5</a>
		</li>
	</ul>
</nav>
<div class="TabFolder">
	<div id="tabContent-1" class="TabFolder__content is-active"><p>Fried Oreos fried farm eggs calamari eggplant parm taquitos. Philly scrapple fried farm eggs fried pickles chicken-fried steaks. Kroketten General Tso's chicken gator bites. Veal parmigiana pork-stuffed egg rolls mozzarella sticks. Empanadas churros corn fritters popovers. Scallion pancakes pommes frites and aioli kroketten shrimp po-boys.</p></div>
	<div id="tabContent-2" class="TabFolder__content"><p>Knishes General Tso's chicken far-far plantain chips.</p></div>
	<div id="tabContent-3" class="TabFolder__content"><p>Scotch eggs fried Snickers jalapeño poppers krupuks corn fritters. French fries kids chicken nuggets taquitos shrimp tempura. Scallion pancakes crab rangoons jalapeño poppers soft-shelled crabs. Crawfish tails jin deui corndogs. Corn fritters krupuks funnel cakes. Crawfish puffs brussel sprouts funnel cakes tortilla chips. Kroketten shrimp tempura extra hot buffalo wings. Cajun crabcakes gator bites puri crawfish tails. Krupuks corn fritters fried farm eggs.</p></div>
	<div id="tabContent-4" class="TabFolder__content"><p>Beignets taquitos empanadas. Knishes angels on horseback chicken fingers with Cane's sauce. Wontons puri tortilla chips calamari pita chips. Veggie tempura taquitos kroketten krupuks. Hush puppies 'n' tartar sauce Hubig's pies papadums. Corn fritters fried Oreos fried Twinkies scallion pancakes.</p></div>
	<div id="tabContent-5" class="TabFolder__content"><p>Papadums calamari french fries chicken-fried steaks croquettes. Pommes frites and aioli plantain chips angels on horseback fish and chips. Angels on horseback puri papadums. Scallion pancakes krupuks calamari. Philly scrapple chalupas samosas. Philly scrapple fish and chips chicken fingers with Cane's sauce tortilla chips. Clam strips and cocktail sauce pommes frites and aioli Hubig's pies churros empanadas. Philly scrapple Mrs. Wheat's meat pies wontons funnel cakes. Zeppoles samosas krupuks. Plantain chips zeppoles soft-shelled crabs.</p></div>
</div>
`,
	codeBlock: `
<nav>
	<ul class="TabGroup">
		<li class="Tab is-active">
			<a href="#" data-target="#tabContent-1">Tab 1</a>
		</li>
		<li class="Tab">
			<a href="#" data-target="#tabContent-2">Tab 2</a>
		</li>
		<li class="Tab">
			<a href="#" data-target="#tabContent-3">Tab 3</a>
		</li>
		<li class="Tab">
			<a href="#" data-target="#tabContent-4">Tab 4</a>
		</li>
		<li class="Tab">
			<a href="#" data-target="#tabContent-5">Tab 5</a>
		</li>
	</ul>
</nav>
<div class="TabFolder">
	<div class="TabFolder__content is-active" id="tabContent-1">...</div>
	<div class="TabFolder__content" id="tabContent-2">...</div>
	<div class="TabFolder__content" id="tabContent-3">...</div>
	<div class="TabFolder__content" id="tabContent-4">...</div>
	<div class="TabFolder__content" id="tabContent-5">...</div>
</div>
`,
};
