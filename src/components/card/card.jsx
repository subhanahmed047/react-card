import React from 'react';
import PropTypes from 'prop-types';
import CardWrapper from './wrapper';
import CardImage from './image';
import CardContent from './content';
import CardTitle from './title';
import CardContentLogo from './logo';

const Card = ({ img, title, logo }) => {
    return (
        <React.Fragment>
            <CardWrapper>
                <CardImage src={img} alt={title} />
                <CardContent>
                    <CardContentLogo src={logo} alt="Company Logo" />
                    <CardTitle>{title}</CardTitle>
                </CardContent>
            </CardWrapper>
        </React.Fragment >
    );
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired
};

export default Card;