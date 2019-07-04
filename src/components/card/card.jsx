import React from 'react';
import PropTypes from 'prop-types';
import CardWrapper from './wrapper';
import CardImage from './image';
import CardContent from './content';
import CardTitle from './title';

const Card = ({ img, title }) => {
    return (
        <React.Fragment>
            <CardWrapper>
                <CardImage src={img} alt={title} />
                <CardContent>
                    <CardTitle>{title}</CardTitle>
                </CardContent>
            </CardWrapper>
        </React.Fragment >
    );
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Card;