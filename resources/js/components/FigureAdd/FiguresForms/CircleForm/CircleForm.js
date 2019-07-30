import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CircleForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            MINVALUE: 0,
            MAXVALUE: 100,
            type_id: props.type_id,
            data: { radius: 1 },
            radiusValid: true,
        };
        this.radiusChange = this.radiusChange.bind(this);
        this.radiusValidation = this.radiusValidation.bind(this);
    }

    radiusChange(e) {
        this.setState({
           data: {
               radius: Number(e.target.value)
           }
        }, this.radiusValidation);
    }

    radiusValidation() {
        this.setState({
            radiusValid: true
        }, this.formValidation);

        if( this.state.data.radius <= this.state.MINVALUE || this.state.data.radius > this.state.MAXVALUE ) {
            this.setState({
                radiusValid: false
            });
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <h3>Add circle</h3>
                    <Form onSubmit={this.props.createFigure.bind(this)}>
                        <Form.Group controlId="formCircleRadius">
                            <Form.Label>Radius</Form.Label>
                            <Form.Control
                                className={this.state.radiusValid ? "is-valid" : "is-invalid"}
                                type="number"
                                onChange={this.radiusChange}
                                name="radius"
                                value={this.state.data.radius}
                                min={this.state.MINVALUE}
                                max={this.state.MAXVALUE}
                            />
                            {  (!this.state.radiusValid) && <div className="text text-danger">Incorrect value</div> }
                        </Form.Group>
                        <Button disabled={ (!this.state.radiusValid) && "disabled" } variant="primary" type="submit">
                            Create figure
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
