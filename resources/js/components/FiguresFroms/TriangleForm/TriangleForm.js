import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SquareForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type_id: props.type_id,
            data: {
                firstSide: '',
                secondSide: '',
                thirdSide: ''
            }
        };
        this.triangleSubmit = this.triangleSubmit.bind(this);
        this.firstSideChange = this.firstSideChange.bind(this);
        this.secondSideChange = this.secondSideChange.bind(this);
        this.thirdSideChange = this.thirdSideChange.bind(this);
    }

    triangleSubmit(e) {
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
            <div>
                <h3>Add square</h3>
                <Form onSubmit={this.triangleSubmit}>
                    <Form.Group controlId="formTriangleFirstSide">
                        <Form.Label>First side</Form.Label>
                        <Form.Control type="number" onChange={this.firstSideChange} name="firstSide" />
                    </Form.Group>
                    <Form.Group controlId="formTriangleSecondSide">
                        <Form.Label>Second side</Form.Label>
                        <Form.Control type="number" onChange={this.secondSideChange} name="secondSide" />
                    </Form.Group>
                    <Form.Group controlId="formTriangleThirdSide">
                        <Form.Label>Third side</Form.Label>
                        <Form.Control type="number" onChange={this.thirdSideChange} name="thirdSide" />
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