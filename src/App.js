import React from 'react';
import './App.css';
import Card from './components/card/card';
import CardContainer from './components/card/container';

function App() {
    const data = [
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
        <CardContainer>
            {data.map((card) => (
                <Card
                    key={card.id}
                    img={card.img}
                    title={card.title}
                    logo={card.logo}
                />
            ))}
        </CardContainer>
    );
}

export default App;
