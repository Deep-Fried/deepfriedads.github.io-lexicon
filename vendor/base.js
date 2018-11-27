function toggleParent(event) {
	event.preventDefault();

	const elem = this.parentNode;
	elem.classList.toggle('is-active');
}

function toggleTarget(event) {
	event.preventDefault();

	const elem = document.querySelector(this.dataset.target);
	elem.classList.toggle('is-active');
}

function toggleSiblings(elem) {
	const siblings = elem.parentNode.children;

	Array.from(siblings)
		.forEach((sibling) => {
			if (sibling !== elem) {
				sibling.classList.remove('is-active');
			} else {
				elem.classList.add('is-active');
			}
		});
}

function toggleTabs(event) {
	event.preventDefault();
	const tabContent = document.querySelectorAll('.TabFolder__content');

	Array.from(tabContent)
		.forEach((content) => {
			content.classList.remove('is-active');

			if (event.target.dataset.target === `#${content.id}`) {
				content.classList.add('is-active');
			}
		});

	toggleSiblings(this);
}

function toggleHandler(toggles, func) {
	Array.from(toggles)
		.forEach(toggle => toggle.addEventListener('click', func));
}

function setupToggles() {
	const elemWithTarget = document.querySelectorAll('[data-target]');
	const drawerToggle = document.querySelectorAll('.Drawer__button');
	const tabs = document.querySelectorAll('.Tab');

	toggleHandler(elemWithTarget, toggleTarget);
	toggleHandler(drawerToggle, toggleParent);
	toggleHandler(tabs, toggleTabs);
}

function setupSnackbar() {
	const snackbar    = document.getElementById('snackbar');
	snackbar.addEventListener('click', () => snackbar.classList.remove('is-active'));
}

function setupSlider($elem) {
	$elem.bxSlider({
		captions: true,
	});
}

function initScrollTo(event) {
	event.preventDefault();
	const tagalongContainer = document.querySelector('.js-tagalong-content');
	const tagalongTarget = document.querySelector(this.getAttribute('href'));
	const top = tagalongTarget.offsetTop - tagalongContainer.offsetTop;

	tagalongContainer.scroll({
		behavior: 'smooth',
		top,
	});
	toggleSiblings(this.parentNode);
}

function appScrollTo(event) {
	event.preventDefault();
	const tagalongTarget = document.querySelector(this.getAttribute('href'));

	tagalongTarget.scrollIntoView({ behavior: 'smooth' });
	toggleSiblings(this.parentNode);
}

function initTagalong() {
	const tagalongLinks = document.querySelectorAll('.Tagalong__item a');
	const appTagalongLinks = document.querySelectorAll('.AppTagalong__item a');

	toggleHandler(tagalongLinks, initScrollTo);
	toggleHandler(appTagalongLinks, appScrollTo);
}


function setupTagalong() {
	// initTagalongToggle();
	initTagalong();
}

jQuery(document).ready(($) => {
	setupToggles();
	setupSnackbar();
	setupSlider($('.Slider'));
	setupTagalong();
});
