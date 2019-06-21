import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SquareForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type_id: props.type_id,
            data: {
                height: ''
            }
        };
        this.squareSubmit = this.squareSubmit.bind(this);
        this.heightChange = this.heightChange.bind(this);
    }

    squareSubmit(e) {
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
                height: Number(e.target.value)
            }
        });
    }

    render() {
        return (
            <div>
                <h3>Add square</h3>
                <Form onSubmit={this.squareSubmit}>
                    <Form.Group controlId="formSquareHeight">
                        <Form.Label>Height</Form.Label>
                        <Form.Control type="number" onChange={this.heightChange} name="height" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default SquareForm;