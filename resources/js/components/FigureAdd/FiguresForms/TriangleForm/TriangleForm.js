import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SquareForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type_id: props.type_id,
            data: {
                firstSide: 0,
                secondSide: 0,
                thirdSide: 0
            }
        };
        this.firstSideChange = this.firstSideChange.bind(this);
        this.secondSideChange = this.secondSideChange.bind(this);
        this.thirdSideChange = this.thirdSideChange.bind(this);
    }

    firstSideChange(e) {
        this.setState({
            data: {
                firstSide: Number(e.target.value),
                secondSide: this.state.data["secondSide"],
                thirdSide: this.state.data["thirdSide"]
            }
        });
    }

    secondSideChange(e) {
        this.setState({
            data: {
                firstSide: this.state.data["firstSide"],
                secondSide: Number(e.target.value),
                thirdSide: this.state.data["thirdSide"]
            }
        });
    }

    thirdSideChange(e) {
        this.setState({
            data: {
                firstSide: this.state.data["firstSide"],
                secondSide: this.state.data["secondSide"],
                thirdSide: Number(e.target.value)
            }
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <h3>Add triangle</h3>
                    <Form onSubmit={this.props.createFigure.bind(this)}>
                        <Form.Group controlId="formTriangleFirstSide">
                            <Form.Label>First side</Form.Label>
                            <Form.Control type="number" onChange={this.firstSideChange} name="firstSide" value={this.state.data.firstSide}/>
                        </Form.Group>
                        <Form.Group controlId="formTriangleSecondSide">
                            <Form.Label>Second side</Form.Label>
                            <Form.Control type="number" onChange={this.secondSideChange} name="secondSide" value={this.state.data.secondSide}/>
                        </Form.Group>
                        <Form.Group controlId="formTriangleThirdSide">
                            <Form.Label>Third side</Form.Label>
                            <Form.Control type="number" onChange={this.thirdSideChange} name="thirdSide" value={this.state.data.thirdSide}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className="col-6">
                    <img src="../images/triangle.png"/>
                </div>
            </div>
        );
    }
}

export default SquareForm;