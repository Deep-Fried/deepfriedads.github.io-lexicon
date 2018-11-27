import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';

class CodeExample extends PureComponent {
	render() {
		const { codeExample } = this.props;
		return <div className="CodeExample"><h3 className="Title--6">Example</h3>{Parser(codeExample)}</div>;
	}
}

export default CodeExample;

CodeExample.defaultProps = {
	codeExample: '',
};

CodeExample.propTypes = {
	codeExample: PropTypes.string,
};
