import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Buttons/Button';
import { GlobalStyle, defaultTheme, darkTheme } from './styles';
import Signup from './components/Modals/Signup';

const Div = styled.div`
    ${({ styles }) => `${styles}`}
`;

const themes = {
    0: defaultTheme,
    1: darkTheme,
};

const App = () => {
    const [theme, toggleTheme] = useState(0);

    return (
        <ThemeProvider theme={themes[theme]}>
            <h2>Buttons</h2>
            <button onClick={() => toggleTheme((t) => (t === 0 ? 1 : 0))}>
                Togglr theme
            </button>
            {/* <Button size="sm" variant="primary">
                Here we go
            </Button>
            <Button size="md" variant="primary">
                Here we go
            </Button>
            <Button size="lg" variant="primary">
                Here we go
            </Button>
            <h2>Buttons Secondary</h2>
            <Button size="sm" variant="secondary">
                Here we go
            </Button>
            <Button size="md" variant="secondary">
                Here we go
            </Button>
            <Button size="lg" variant="secondary">
                Here we go
            </Button>
            <Button size="sm" variant="secondary" disabled>
                Here we go
            </Button> */}
            <Div styles="width: 100vw; height: 100vh; margin: 10px; display: flex; justify-content: center; align-items: center;">
                <Signup />
            </Div>
            <GlobalStyle />
        </ThemeProvider>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
