import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class RectangleForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type_id: props.type_id,
            data: {
                height: '',
                width: ''
            }
        };
        this.rectangleSubmit = this.rectangleSubmit.bind(this);
        this.heightChange = this.heightChange.bind(this);
        this.widthChange = this.widthChange.bind(this);
    }

    rectangleSubmit(e) {
        e.preventDefault();
        console.log("submit", this.state);
        axios
            .post('/figures', {
                type_id: this.state.type_id,
                data: this.state.data
            })
            .then(response => {
                alert(response.data)
            });
    }

    heightChange(e) {
        this.setState({
            data: {
                width: this.state.data["width"],
                height: Number(e.target.value)
            }
        });
    }

    widthChange(e) {
        this.setState({
            data: {
                width: Number(e.target.value),
                height: this.state.data["height"]
            }
        });
    }

    render() {
        return (
            <div>
                <h3>Add rectangle</h3>
                <Form onSubmit={this.rectangleSubmit}>
                    <Form.Group controlId="formRectangleHeight">
                        <Form.Label>Height</Form.Label>
                        <Form.Control type="number" onChange={this.heightChange} name="height" />
                    </Form.Group>
                    <Form.Group controlId="formRectangleWidth">
                        <Form.Label>Width</Form.Label>
                        <Form.Control type="number" onChange={this.widthChange} name="width" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default RectangleForm;