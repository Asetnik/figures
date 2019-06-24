import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class RectangleForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type_id: props.type_id,
            data: {
                height: 0,
                width: 0
            }
        };
        this.heightChange = this.heightChange.bind(this);
        this.widthChange = this.widthChange.bind(this);
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
            <div className="row">
                <div className="col-6">
                    <h3>Add rectangle</h3>
                    <Form onSubmit={this.props.createFigure.bind(this)}>
                        <Form.Group controlId="formRectangleHeight">
                            <Form.Label>Height</Form.Label>
                            <Form.Control type="number" onChange={this.heightChange} name="height" value={this.state.data.height}/>
                        </Form.Group>
                        <Form.Group controlId="formRectangleWidth">
                            <Form.Label>Width</Form.Label>
                            <Form.Control type="number" onChange={this.widthChange} name="width" value={this.state.data.width}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className="col-6">
                    <img src="../images/rectangle.png"/>
                </div>
            </div>
        );
    }
}

export default RectangleForm;