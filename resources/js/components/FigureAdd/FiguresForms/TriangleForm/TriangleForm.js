import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class TriangleForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            MINVALUE: 0,
            MAXVALUE: 100,
            type_id: props.type_id,
            data: {
                firstSide: 1,
                secondSide: 1,
                thirdSide: 1,
            },
            firstSideValid: true,
            secondSideValid: true,
            thirdSideValid: true,
            triangleExists: true,
            formValid: true
        };

        this.firstSideChange = this.firstSideChange.bind(this);
        this.secondSideChange = this.secondSideChange.bind(this);
        this.thirdSideChange = this.thirdSideChange.bind(this);

        this.firstSideValidation = this.firstSideValidation.bind(this);
        this.secondSideValidation = this.secondSideValidation.bind(this);
        this.thirdSideValidation = this.thirdSideValidation.bind(this);
        this.triangleExists = this.triangleExists.bind(this);
        this.formValidation = this.formValidation.bind(this);
    }

    firstSideChange(e) {
        this.setState({
            data: {
                ...this.state.data,
                firstSide: Number(e.target.value)
            }
        }, this.firstSideValidation);
    }

    secondSideChange(e) {
        this.setState({
            data: {
                ...this.state.data,
                secondSide: Number(e.target.value)
            }
        }, this.secondSideValidation);
    }

    thirdSideChange(e) {
        this.setState({
            data: {
                ...this.state.data,
                thirdSide: Number(e.target.value)
            }
        }, this.thirdSideValidation);
    }

    firstSideValidation() {
        this.setState({
            firstSideValid: true
        }, this.triangleExists);

        if( this.state.data.firstSide <= this.state.MINVALUE || this.state.data.firstSide > this.state.MAXVALUE ) {
            this.setState({
                firstSideValid: false
            }, this.triangleExists);
        }
    }

    secondSideValidation() {
        this.setState({
            secondSideValid: true
        }, this.triangleExists);

        if( this.state.data.secondSide <= this.state.MINVALUE || this.state.data.secondSide > this.state.MAXVALUE ) {
            this.setState({
                secondSideValid: false
            }, this.triangleExists);
        }
    }

    thirdSideValidation() {
        this.setState({
            thirdSideValid: true
        }, this.triangleExists);

        if( this.state.data.thirdSide <= this.state.MINVALUE || this.state.data.thirdSide > this.state.MAXVALUE ) {
            this.setState({
                thirdSideValid: false
            }, this.triangleExists);
        }
    }

    formValidation() {
        this.setState({
            formValid: true
        });

        if( !this.state.firstSideValid || !this.state.secondSideValid || !this.state.thirdSideValid || !this.state.triangleExists) {
            this.setState({
                formValid: false
            });
        }
    }

    triangleExists(){
        this.setState({
            triangleExists: true
        }, this.formValidation);

        if( this.state.data.firstSide >= this.state.data.secondSide + this.state.data.thirdSide
            || this.state.data.secondSide >= this.state.data.firstSide + this.state.data.thirdSide
            || this.state.data.thirdSide >= this.state.data.firstSide + this.state.data.secondSide ) {
            this.setState({
                triangleExists: false
            }, this.formValidation);
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <h3>Add triangle</h3>
                    <Form onSubmit={this.props.createFigure.bind(this)}>
                        <Form.Group controlId="formTriangleFirstSide">
                            <Form.Label>First side</Form.Label>
                            <Form.Control
                                className={this.state.firstSideValid ? "is-valid" : "is-invalid"}
                                type="number"
                                onChange={this.firstSideChange}
                                name="firstSide"
                                value={this.state.data.firstSide}
                                min={this.state.MINVALUE}
                                max={this.state.MAXVALUE}
                            />
                            {  (!this.state.firstSideValid) && <div className="text text-danger">Incorrect value</div> }
                        </Form.Group>
                        <Form.Group controlId="formTriangleSecondSide">
                            <Form.Label>Second side</Form.Label>
                            <Form.Control
                                className={this.state.secondSideValid ? "is-valid" : "is-invalid"}
                                type="number"
                                onChange={this.secondSideChange}
                                name="secondSide"
                                value={this.state.data.secondSide}
                                min={this.state.MINVALUE}
                                max={this.state.MAXVALUE}
                            />
                            {  (!this.state.secondSideValid) && <div className="text text-danger">Incorrect value</div> }
                        </Form.Group>
                        <Form.Group controlId="formTriangleThirdSide">
                            <Form.Label>Third side</Form.Label>
                            <Form.Control
                                className={this.state.thirdSideValid ? "is-valid" : "is-invalid"}
                                type="number"
                                onChange={this.thirdSideChange}
                                name="thirdSide"
                                value={this.state.data.thirdSide}
                                min={this.state.MINVALUE}
                                max={this.state.MAXVALUE}
                            />
                            {  (!this.state.thirdSideValid) && <div className="text text-danger">Incorrect value</div> }
                        </Form.Group>
                        {  (!this.state.triangleExists) && <div className="alert alert-danger">
                            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                            Triangle with such sides does not exist</div> }
                        <Button disabled={ (!this.state.formValid) && "disabled" } variant="primary" type="submit">
                            Create figure
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

export default TriangleForm;
