import React from 'react';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Container from '../components/container/container';
import Card from '../components/card/card';

const TextWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #efefef;
    flex: 1;
    height: 10vh;
    padding: 1rem;
    text-align: center;
`;

const card = {
    title: 'Home and away',
    img: 'https://i.ibb.co/jkqfpL9/tile.jpg',
    logo: 'https://i.ibb.co/pQGpztg/logo.png',
};

const cardComponentString =
    `
    <Card card={card} />
`;


const cardComponentPropsString =
    `
    Card.propTypes = {
        card: PropTypes.shape({
            img: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            logo: PropTypes.string.isRequired,
        })
    };
`;

const Docs = () => {
    return (
        <React.Fragment>
            <TextWrapper>
                <h2>React-Card</h2>
                <span>A simple react component that uses css flexbox and styled-components to create a card layout.</span>
            </TextWrapper>
            <Container>
                <Card card={card} ></Card>
            </Container>
            <h3>Code</h3>
            <SyntaxHighlighter language="javascript" style={dark}>
                {cardComponentString}
            </SyntaxHighlighter>
            <h3>Props</h3>
            <SyntaxHighlighter language="javascript" style={dark}>
                {cardComponentPropsString}
            </SyntaxHighlighter>
        </React.Fragment>
    );
}

export default Docs;