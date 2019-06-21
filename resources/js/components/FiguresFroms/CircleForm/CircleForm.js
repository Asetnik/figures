import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CircleForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type_id: props.type_id,
            data: ''
        };
        this.circleSubmit = this.circleSubmit.bind(this);
        this.radiusChange = this.radiusChange.bind(this);
    }

    circleSubmit(e) {
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

    radiusChange(e) {
        this.setState({
           data: {
               radius: Number(e.target.value)
           }
        });
    }

    render() {
        return (
            <div>
                <h3>Add circle</h3>
                <Form onSubmit={this.circleSubmit}>
                    <Form.Group controlId="formCircleRaius">
                        <Form.Label>Radius</Form.Label>
                        <Form.Control type="number" onChange={this.radiusChange} name="radius" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default CircleForm;