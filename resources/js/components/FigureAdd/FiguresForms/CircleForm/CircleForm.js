import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CircleForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type_id: props.type_id,
            data: {
                radius: 0
            }
        };
        this.radiusChange = this.radiusChange.bind(this);
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
            <div className="row">
                <div className="col-6">
                    <h3>Add circle</h3>
                    <Form onSubmit={this.props.createFigure.bind(this)}>
                        <Form.Group controlId="formCircleRaius">
                            <Form.Label>Radius</Form.Label>
                            <Form.Control type="number" onChange={this.radiusChange} name="radius" value={this.state.data.radius} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className="col-6">
                    <img src="../images/circle.png"/>
                </div>
            </div>
        );
    }
}

export default CircleForm;