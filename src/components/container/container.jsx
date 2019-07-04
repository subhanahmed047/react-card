import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: ${props => props.justify ? props.justify : 'center'};
    flex-wrap: ${props => props.wrap ? props.wrap : 'wrap'};
    list-style: none;
    margin: 0;
    padding: 0;
`;

export default Container;