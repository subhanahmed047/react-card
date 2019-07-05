import React from 'react';
import { ThemeProvider } from 'styled-components';
import Card from './components/card/card';
import Container from './components/container/container';
import theme from './theme/theme';
import GlobalStyle from './theme/globalStyles';
import Docs from './docs';
import fakeDataSource from './constants/fakeDataSource';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <GlobalStyle />
                <Docs />
                <Container>
                    {fakeDataSource.map((card) => (
                        <Card key={card.id} card={card} />
                    ))}
                </Container>
            </React.Fragment>
        </ThemeProvider>
    );
}

export default App;
