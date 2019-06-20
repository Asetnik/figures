import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type_id: '',
            data: ''
        };
        this.typeIdChange = this.typeIdChange.bind(this);
        this.dataChange = this.dataChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    typeIdChange(e) {
        this.setState({
            type_id: e.target.value,
        });
    }

    dataChange(e) {
        this.setState({
            data: {radius : parseFloat(e.target.value)},
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post('/figures', {
                type_id: this.state.type_id,
                data: this.state.data
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="type_id"
                    onChange={this.typeIdChange}
                />
                <input
                    type="text"
                    name="data"
                    onChange={this.dataChange}
                />
                <input type="submit" name="submit" />
            </form>
    );
    }
}

export default Test;