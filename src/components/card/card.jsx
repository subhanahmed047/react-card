import React from 'react';
import PropTypes from 'prop-types';
import CardWrapper from './wrapper';
import CardImage from './image';
import CardContent from './content';
import CardTitle from './title';
import CardContentLogo from './logo';

const Card = ({ card }) => {
    return (
        <React.Fragment>
            <CardWrapper>
                <CardImage src={card.img} alt={card.title} />
                <CardContent>
                    <CardContentLogo src={card.logo} alt="Company Logo" />
                    <CardTitle>{card.title}</CardTitle>
                </CardContent>
            </CardWrapper>
        </React.Fragment >
    );
}

Card.propTypes = {
    card: PropTypes.object.isRequired,
};

export default Card;