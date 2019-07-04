import React from 'react';
import './App.css';
import Card from './components/card/card';
import Container from './components/container/container';

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
        <Container>
            {cards.map((card) => (
                <Card key={card.id} card={card} />
            ))}
        </Container>
    );
}

export default App;
