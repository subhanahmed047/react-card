import React from 'react';
import './App.css';
import Card from './components/card/card';
import CardContainer from './components/card/container';

function App() {
    const data = [
        {
            title: 'Card Grid Layout',
            img: 'https://picsum.photos/630/300/?image=10',
        },
        {
            title: 'Card Grid Layout',
            img: 'https://picsum.photos/630/300/?image=10',
        },
        {
            title: 'Card Grid Layout',
            img: 'https://picsum.photos/630/300/?image=10',
        },
        {
            title: 'Card Grid Layout',
            img: 'https://picsum.photos/630/300/?image=10',
        },
    ];
    return (
        <CardContainer>
            {data.map((card) => (
                <Card img={card.img} title={card.title} />
            ))}
        </CardContainer>
    );
}

export default App;
