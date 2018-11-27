import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/styles/hljs';

class CodeBlock extends PureComponent {
	render() {
		const { codeBlock } = this.props;
		if (!codeBlock) {
			return '';
		}

		return (
			<div>
				<h3 className="Title--6">Code</h3>
				<SyntaxHighlighter showLineNumbers language="html" style={github}>{codeBlock.trim()}</SyntaxHighlighter>
			</div>
		);
	}
}

export default CodeBlock;

CodeBlock.defaultProps = {
	codeBlock: '',
};

CodeBlock.propTypes = {
	codeBlock: PropTypes.string,
};
