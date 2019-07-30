import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class RectangleForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            MINVALUE: -100,
            MAXVALUE: 100,
            type_id: props.type_id,
            data: {
                firstX: -1,
                firstY: -1,
                secondX: 1,
                secondY: 1
            },
            firstXValid: true,
            firstYValid: true,
            secondXValid: true,
            secondYValid: true,
            rectangleExists: true,
            formValid: true
        };
        this.firstXChange = this.firstXChange.bind(this);
        this.firstYChange = this.firstYChange.bind(this);
        this.firstXValidation = this.firstXValidation.bind(this);
        this.firstYValidation = this.firstYValidation.bind(this);
        this.secondXChange = this.secondXChange.bind(this);
        this.secondYChange = this.secondYChange.bind(this);
        this.secondXValidation = this.secondXValidation.bind(this);
        this.secondYValidation = this.secondYValidation.bind(this);
        this.rectangleExists = this.rectangleExists.bind(this);
        this.formValidation = this.formValidation.bind(this);
    }

    firstXChange(e) {
        this.setState({
            data: {
                    ...this.state.data,
                firstX: Number(e.target.value)
            }
        }, this.firstXValidation);
    }

    firstYChange(e) {
        this.setState({
            data: {
                ...this.state.data,
                firstY: Number(e.target.value)
            }
        }, this.firstYValidation);
    }

    secondXChange(e) {
        this.setState({
            data: {
                ...this.state.data,
                secondX: Number(e.target.value)
            }
        }, this.secondXValidation);
    }

    secondYChange(e) {
        this.setState({
            data: {
                ...this.state.data,
                secondY: Number(e.target.value)
            }
        }, this.secondYValidation);
    }

    firstXValidation() {
        this.setState({
            firstXValid: true
        }, this.rectangleExists);

        if( this.state.data.firstX < this.state.MINVALUE || this.state.data.firstX > this.state.MAXVALUE ) {
            this.setState({
                firstXValid: false
            }, this.rectangleExists);
        }
    }

    firstYValidation() {
        this.setState({
            firstYValid: true
        }, this.rectangleExists);

        if( this.state.data.firstY < this.state.MINVALUE || this.state.data.firstY > this.state.MAXVALUE ) {
            this.setState({
                firstYValid: false
            }, this.rectangleExists);
        }
    }

    secondXValidation() {
        this.setState({
            secondXValid: true
        }, this.rectangleExists);

        if( this.state.data.secondX < this.state.MINVALUE || this.state.data.secondX > this.state.MAXVALUE ) {
            this.setState({
                secondXValid: false
            }, this.rectangleExists);
        }
    }

    secondYValidation() {
        this.setState({
            secondYValid: true
        }, this.rectangleExists);

        if( this.state.data.secondY < this.state.MINVALUE || this.state.data.secondY > this.state.MAXVALUE ) {
            this.setState({
                secondYValid: false
            }, this.rectangleExists);
        }
    }

    rectangleExists() {
        this.setState({
            rectangleExists: true
        }, this.formValidation);

        if( this.state.data.firstX === this.state.data.secondX && this.state.data.firstY === this.state.data.secondY) {
            this.setState({
                rectangleExists: false
            }, this.formValidation);
        }
    }

    formValidation(){
        this.setState({
            formValid: true
        });

        if( !this.state.firstXValid || !this.state.firstYValid || !this.state.secondXValid || !this.state.secondYValid || !this.state.rectangleExists) {
            this.setState({
                formValid: false
            });
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <h3>Add rectangle</h3>
                    <Form onSubmit={this.props.createFigure.bind(this)}>
                        <Form.Group controlId="formRectangleFirstX">
                            <Form.Label>First X</Form.Label>
                            <Form.Control
                                className={this.state.firstXValid ? "is-valid" : "is-invalid"}
                                type="number"
                                onChange={this.firstXChange}
                                name="firstX"
                                value={this.state.data.firstX}
                                min={this.state.MINVALUE}
                                max={this.state.MAXVALUE}
                            />
                            {  (!this.state.firstXValid) && <div className="text text-danger">Incorrect value</div> }
                        </Form.Group>
                        <Form.Group controlId="formRectangleFirstY">
                            <Form.Label>First Y</Form.Label>
                            <Form.Control
                                className={this.state.firstYValid ? "is-valid" : "is-invalid"}
                                type="number"
                                onChange={this.firstYChange}
                                name="firstY"
                                value={this.state.data.firstY}
                                min={this.state.MINVALUE}
                                max={this.state.MAXVALUE}
                            />
                            {  (!this.state.firstYValid) && <div className="text text-danger">Incorrect value</div> }
                        </Form.Group>
                        <Form.Group controlId="formRectangleSecondX">
                            <Form.Label>Second X</Form.Label>
                            <Form.Control
                                className={this.state.secondXValid ? "is-valid" : "is-invalid"}
                                type="number"
                                onChange={this.secondXChange}
                                name="secondX"
                                value={this.state.data.secondX}
                                min={this.state.MINVALUE}
                                max={this.state.MAXVALUE}
                            />
                            {  (!this.state.secondXValid) && <div className="text text-danger">Incorrect value</div> }
                        </Form.Group>
                        <Form.Group controlId="formRectangleSecondY">
                            <Form.Label>Second Y</Form.Label>
                            <Form.Control
                                className={this.state.secondYValid ? "is-valid" : "is-invalid"}
                                type="number"
                                onChange={this.secondYChange}
                                name="secondY"
                                value={this.state.data.secondY}
                                min={this.state.MINVALUE}
                                max={this.state.MAXVALUE}
                            />
                            {  (!this.state.secondYValid) && <div className="text text-danger">Incorrect value</div> }
                        </Form.Group>
                        {  (!this.state.rectangleExists) && <div className="alert alert-danger">
                            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                            Rectangle with such points does not exist</div> }
                        <Button disabled={ (!this.state.formValid) && "disabled" } variant="primary" type="submit">
                            Create figure
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
