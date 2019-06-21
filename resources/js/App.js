import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'

import AddFigure from './components/AddFigure/AddFigure';
import Header from "./components/Header/Header";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Container>
                    <AddFigure />
                </Container>
            </div>
        );
    }
}

export default App;