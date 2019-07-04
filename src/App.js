import React from 'react';
import { ThemeProvider } from 'styled-components';
import Card from './components/card/card';
import Container from './components/container/container';
import theme from './theme/theme';
import GlobalStyle from './theme/globalStyles';

function App() {
    const cards = [
        {
            id: 0,
            title: 'Card Grid Layout',
            img: 'https://i.ibb.co/jkqfpL9/tile.jpg',
            logo: 'https://i.ibb.co/pQGpztg/logo.png',
        },
        {
            id: 1,
            title: 'Card Grid Layout',
            img: 'https://i.ibb.co/jkqfpL9/tile.jpg',
            logo: 'https://i.ibb.co/pQGpztg/logo.png',
        },
        {
            id: 2,
            title: 'Card Grid Layout',
            img: 'https://i.ibb.co/jkqfpL9/tile.jpg',
            logo: 'https://i.ibb.co/pQGpztg/logo.png',
        },
        {
            id: 3,
            title: 'Card Grid Layout',
            img: 'https://i.ibb.co/jkqfpL9/tile.jpg',
            logo: 'https://i.ibb.co/pQGpztg/logo.png',
        },
    ];
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <GlobalStyle />
                <Container>
                    {cards.map((card) => (
                        <Card key={card.id} card={card} />
                    ))}
                </Container>
            </React.Fragment>
        </ThemeProvider>
    );
}

export default App;
