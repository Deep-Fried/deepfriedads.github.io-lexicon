import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Nav extends PureComponent {
	render() {
		const { title } = this.props;
		const titleFormatted = title.replace(' ', '-').toLowerCase();
		return (
			<li className="AppTagalong__item"><a href={`#lexicon-${titleFormatted}`}>{title}</a></li>
		);
	}
}

export default Nav;

Nav.propTypes = {
	title: PropTypes.string.isRequired,
};
