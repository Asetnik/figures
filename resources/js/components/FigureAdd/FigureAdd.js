import React, { Component } from 'react';
import axios from 'axios';

import CircleForm from "./FiguresForms/CircleForm/CircleForm";
import TriangleForm from "./FiguresForms/TriangleForm/TriangleForm";
import SquareForm from "./FiguresForms/SquareForm/SquareForm";
import RectangleForm from "./FiguresForms/RectangleForm/RectangleForm";

class FigureAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            figures_types: '',
            type_id: 1,
            data: ''
        };
        this.typeIdChange = this.typeIdChange.bind(this);
        this.options = this.options.bind(this);
    }

    componentWillMount() {
        axios
            .get('/figures_types')
            .then(response => {
                this.setState({ figures_types: response.data });
            })
    }

    options(){
        if (this.state.figures_types instanceof Array) {
            return this.state.figures_types.map(function (figure_type, index) {
                return <option key={index} value={figure_type.id}>{figure_type.type}</option>;
            })
        }
    }

    renderFigureForm() {
        switch (this.state.type_id) {
            case 1:
                return <CircleForm type_id={this.state.type_id} createFigure={this.createFigure} />;
            case 2:
                return <TriangleForm type_id={this.state.type_id} createFigure={this.createFigure} />;
            case 3:
                return <SquareForm type_id={this.state.type_id} createFigure={this.createFigure} />;
            case 4:
                return <RectangleForm type_id={this.state.type_id} createFigure={this.createFigure} />;
        }
    }

    typeIdChange(e) {
        this.setState({
            type_id: Number(e.target.value),
        });
    }

    createFigure(e){
        e.preventDefault();
        axios
            .post('/figures', {
                type_id: this.state.type_id,
                data: this.state.data
            })
            .then(response => {
                alert(response.data)
            });
    }

    render() {
        return (
            <div id="addFigure">
                <h3>Add figure</h3>
                <select onChange={this.typeIdChange} name="type_id" className="form-control w-25 mb-5">
                    {this.options()}
                </select>
                {this.renderFigureForm()}
            </div>
        );
    }
}

export default FigureAdd;