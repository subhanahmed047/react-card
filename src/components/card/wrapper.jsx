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
    margin: 1rem;

    &:hover ${CardImage} {
        webkit-filter: blur(.05rem);
        filter: blur(.05rem);
    }

    &:hover ${CardContent} {
        visibility: visible;
        opacity: 1;
    }

    @media ${devices.MOBILE_L} {
        width: 50%;
    }

    @media ${devices.TABLET} {
        width: 33%;
    }
`;

export default CardWrapper;