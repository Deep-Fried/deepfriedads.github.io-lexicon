import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CodeExample from './CodeExample';
import CodeBlock from './CodeBlock';
import Parser from 'html-react-parser';

class Lexicon extends PureComponent {
	render() {
		const {
			title,
			otherTitles,
			description,
			codeExample,
			codeBlock,
		} = this.props;
		const titleFormatted = title.replace(' ', '-').toLowerCase();
		return (
			<div className="Lexicon__term" id={`lexicon-${titleFormatted}`}>
				<div className="Container">
					<header className="Lexicon__header">
						<h1 className="Title--1 Lexicon__title">{title}</h1>
						{(0 < otherTitles.length) ?
							<div className="BadgeContainer">
								<p className="BadgeContainer__title Title--6">Unauthorized names</p>
								{otherTitles.map(otherTitle => (otherTitle ? <span className="Badge Badge--primary" key={otherTitle}>{otherTitle}</span> : ''))}
							</div>
							: ''
						}
					</header>
					{(description) ?
						<div className="Lexicon__description">
							<h3 className="Title--6">Description</h3>
							<p>{Parser(description)}</p>
						</div>
						: ''
					}
					{(codeExample) ? <CodeExample codeExample={codeExample} /> : '' }
					{(codeBlock) ? <CodeBlock codeBlock={codeBlock} /> : '' }
				</div>
			</div>
		);
	}
}

export default Lexicon;

Lexicon.defaultProps = {
	description: '',
	codeExample: '',
	codeBlock: '',
};

Lexicon.propTypes = {
	title: PropTypes.string.isRequired,
	otherTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
	description: PropTypes.string,
	codeExample: PropTypes.string,
	codeBlock: PropTypes.string,
};
