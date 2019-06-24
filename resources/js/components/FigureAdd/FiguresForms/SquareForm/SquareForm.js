import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SquareForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type_id: props.type_id,
            data: {
                height: 0
            }
        };
        this.heightChange = this.heightChange.bind(this);
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
            <div className="row">
                <div className="col-6">
                    <h3>Add square</h3>
                    <Form onSubmit={this.props.createFigure.bind(this)}>
                        <Form.Group controlId="formSquareHeight">
                            <Form.Label>Height</Form.Label>
                            <Form.Control type="number" onChange={this.heightChange} name="height" value={this.state.data.height}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className="col-6">
                    <img src="../images/square.png"/>
                </div>
            </div>
        );
    }
}

export default SquareForm;