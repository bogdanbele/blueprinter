import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../base-components/Flex';

const listToParagraph = (data) => {
    let linksArray = [];
    data.forEach(element => {
        linksArray.push(<p key={data.indexOf(element)} className='mb-0'>{element}</p>)
    });
    return linksArray;
};

export default function MiniContent(props) {
    let list = () => (props.list ? <>{listToParagraph(props.list)}</> : null);

    return (
        <Flex className={`flex-column ${props.flexClassName}`}>
            <h3>{props.header}</h3>
            <p>{props.description}</p>
            {list()}
        </Flex>
    );
}

MiniContent.propTypes = {
    header: PropTypes.string,
    description: PropTypes.string,
    flexClassName: PropTypes.string,
    list: PropTypes.array,
};

MiniContent.defaultProps = {
    flexClassName: '',
};
