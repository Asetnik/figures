import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from "axios";

class FigureStatistics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            figureStatistics: {},
        };

    }

    componentWillMount() {
        axios
            .get('/figures_statistics')
            .then(response => {
                this.setState({ figureStatistics: response.data });
            })
    }

    render() {
        return (
            <div>
                <h3>Figures statistics</h3>
                <div>
                {
                    Object.keys(this.state.figureStatistics).map( (figureType, index) => {
                        return <div key={index} className="row mb-1">
                            <Badge className="col-1" variant="secondary">{figureType}</Badge>
                            <ProgressBar
                                className="col-11 p-0"
                                now={this.state.figureStatistics[figureType]}
                                label={`${this.state.figureStatistics[figureType]}%`}/>
                        </div>
                    })
                }
                </div>
            </div>
        );
    }
}

export default FigureStatistics;