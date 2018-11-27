import React from 'react';
// import logo from './logo.svg';
import './css/style.css';
import LexiconTypes from './js/lexicon-types';
import Nav from './js/components/Nav';
import Lexicon from './js/components/Lexicon';

function App() {
	return (
		<div className="App">
			<header className="App__header">
				<div className="Container">
					<h1 className="Title--1">Deep Fried Lexicon</h1>
				</div>
			</header>
			<main className="Main Container" role="main">
				<nav className="Sidebar">
					<ul className="AppTagalong">
						{LexiconTypes
							.map(component =>
								(<Nav
									key={component.title}
									title={component.title}
								/>))}
					</ul>
				</nav>
				<section className="Lexicon">
					{LexiconTypes
						.map(component =>
							(<Lexicon
								key={component.title}
								title={component.title}
								description={component.description}
								otherTitles={component.otherTitles}
								codeExample={component.codeExample}
								codeBlock={component.codeBlock}
							/>))
					}
				</section>
			</main>
		</div>
	);
}

export default App;
