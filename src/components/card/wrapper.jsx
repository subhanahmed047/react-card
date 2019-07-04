import styled from 'styled-components';
import devices from '../../constants/devices';
import CardImage from './image';
import CardContent from './content';

const CardWrapper = styled.div`
    position: relative;
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin: ${props => props.theme.cardMargin};

    &:hover ${CardImage} {
        webkit-filter: blur(.09rem);
        filter: blur(.09rem);
    }

    &:hover ${CardContent} {
        visibility: visible;
        opacity: 1;
    }

    @media ${devices.minWidth.MOBILE_L} {
        width: 50%;
    }

    @media ${devices.minWidth.TABLET} {
        width: 33%;
    }

    /* Because there is no hover on a touch devices, display the content by default on tablet or lower width devices */
    @media only screen and ${devices.maxWidth.TABLET} {
        ${CardContent} {
            opacity: 1;
            visibility: visible;
            transition: opacity 2s linear;
        }
    }
`;

CardWrapper.defaultProps = {
    theme: {
        cardMargin: '.5rem',
    }
}

export default CardWrapper;