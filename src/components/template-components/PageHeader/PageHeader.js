import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../base-components/Flex';
import Row from '../../base-components/Row';

export default class PageHeader extends React.PureComponent {
	render() {
		let header = () => (this.props.isHeaderVisible ? <h1>{this.props.header}</h1> : null);
		let headerText = () =>
			this.props.isHeaderTextVisible ? <h3 className='px-5'>{this.props.headerText}</h3> : null;

            console.log(this.props)
		return (
			<Row className={`Row--header ${this.props.rowClassName}`}>
				<Flex className="column flex--text-center">
					{header()}
					{headerText()}
				</Flex>
                {this.props.children}
			</Row>
		);
	}
}

PageHeader.propTypes = {
	header: PropTypes.string,
	headerText: PropTypes.string,
	isHeaderVisible: PropTypes.bool,
    isHeaderTextVisible: PropTypes.bool,
    rowClassName: PropTypes.string
};

PageHeader.defaultProps = {
    rowClassName: ''
}

