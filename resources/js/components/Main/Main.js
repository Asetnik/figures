import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import FigureAdd from "../FigureAdd/FigureAdd";
import { Switch, Route, Redirect } from 'react-router-dom';

import FigureStatistics from "../FigureStatistics/FigureStatistics";
import FiguresList from "../FiguresList/FiguresList";

class Main extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Switch>
                        <Route path={'/'} exact component={ FigureAdd } />
                        <Route path={'/statistics'} exact component={ FigureStatistics } />
                        <Route path={'/figuresList'} exact component={ FiguresList } />
                        <Redirect to="/" />
                    </Switch>
                </Container>
            </div>
        );
    }
}

export default Main;