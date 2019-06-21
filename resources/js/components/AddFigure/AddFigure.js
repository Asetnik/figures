import React, { Component } from 'react';
import CircleForm from "../FiguresFroms/CircleForm/CircleForm";
import TriangleForm from "../FiguresFroms/TriangleForm/TriangleForm";
import SquareForm from "../FiguresFroms/SquareForm/SquareForm";
import RectangleForm from "../FiguresFroms/RectangleForm/RectangleForm";


class AddFigure extends Component {

    constructor(props) {
        super(props);
        this.state = {
            figures_types: '',
            type_id: 1,
            data: ''
        };
        this.typeIdChange = this.typeIdChange.bind(this);
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
            return this.state.figures_types.map(function (figures_types, index) {
                return <option key={index} value={figures_types.id}>{figures_types.type}</option>;
            })
        }
    }

    renderFigureForm() {
        switch (this.state.type_id) {
            case 1:
                return <CircleForm type_id={this.state.type_id}/>;
            case 2:
                return <TriangleForm type_id={this.state.type_id}/>;
            case 3:
                return <SquareForm type_id={this.state.type_id}/>;
            case 4:
                return <RectangleForm type_id={this.state.type_id}/>;
        }
    }

    typeIdChange(e) {
        this.setState({
            type_id: Number(e.target.value),
        });
    }

    render() {
        return (
            <div id="addFigure">
                <select onChange={this.typeIdChange} name="type_id" className="form-control">
                    {this.options()}
                </select>
                {this.renderFigureForm()}
            </div>
        );
    }
}

export default AddFigure;