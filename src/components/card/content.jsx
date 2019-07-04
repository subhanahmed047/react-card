import styled from 'styled-components';

const CardContent = styled.div`
    padding: 1rem;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: block;
    height: 18%;
	background: rgba(0, 0, 0, 0.6);
    display: flex;
    padding: 1rem;
    opacity: 0;
    visibility: hidden;
    transition: visibility .2s, opacity .2s linear;
    justify-content: start;
    flex-direction: row;
    align-items: center;
}
`;

export default CardContent;