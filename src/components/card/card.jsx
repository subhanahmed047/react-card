import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper, CardImage, CardContentLogo, CardTitle, CardContent } from '../card';

const Card = ({ card }) => {
    return (
        <CardWrapper>
            <CardImage src={card.img} alt={card.title} />
            <CardContent>
                <CardContentLogo src={card.logo} alt="Company Logo" />
                <CardTitle>{card.title}</CardTitle>
            </CardContent>
        </CardWrapper>
    );
}

Card.propTypes = {
    card: PropTypes.shape({
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
    })
};

export default Card;