import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class RectangleForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            MINVALUE: 0,
            MAXVALUE: 100,
            type_id: props.type_id,
            data: {
                height: 1,
                width: 1
            },
            heightValid: true,
            widthValid: true,
            formValid: true
        };
        this.heightChange = this.heightChange.bind(this);
        this.widthChange = this.widthChange.bind(this);
        this.widthValidation = this.widthValidation.bind(this);
        this.heightValidation = this.heightValidation.bind(this);
        this.formValidation = this.formValidation.bind(this);
    }

    heightChange(e) {
        this.setState({
            data: {
                width: this.state.data["width"],
                height: Number(e.target.value)
            }
        }, this.heightValidation);
    }

    widthChange(e) {
        this.setState({
            data: {
                width: Number(e.target.value),
                height: this.state.data["height"]
            }
        }, this.widthValidation);
    }

    widthValidation() {
        this.setState({
            widthValid: true
        }, this.formValidation);

        if( this.state.data.width < this.state.MINVALUE || this.state.data.width > this.state.MAXVALUE ) {
            this.setState({
                widthValid: false
            }, this.formValidation);
        }
    }

    heightValidation() {
        this.setState({
            heightValid: true
        }, this.formValidation);

        if( this.state.data.height < this.state.MINVALUE || this.state.data.height > this.state.MAXVALUE ) {
            this.setState({
                heightValid: false
            }, this.formValidation);
        }
    }

    formValidation(){
        this.setState({
            formValid: true
        });

        if( !this.state.heightValid || !this.state.widthValid ) {
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
                        <Form.Group controlId="formRectangleHeight">
                            <Form.Label>Height</Form.Label>
                            <Form.Control
                                className={this.state.heightValid ? "is-valid" : "is-invalid"}
                                type="number"
                                onChange={this.heightChange}
                                name="height"
                                value={this.state.data.height}
                                min={this.state.MINVALUE}
                                max={this.state.MAXVALUE}
                            />
                            {  (!this.state.heightValid) && <div className="text text-danger">Incorrect value</div> }
                        </Form.Group>
                        <Form.Group controlId="formRectangleWidth">
                            <Form.Label>Width</Form.Label>
                            <Form.Control
                                className={this.state.widthValid ? "is-valid" : "is-invalid"}
                                type="number"
                                onChange={this.widthChange}
                                name="width"
                                value={this.state.data.width}
                                min={this.state.MINVALUE}
                                max={this.state.MAXVALUE}
                            />
                            {  (!this.state.widthValid) && <div className="text text-danger">Incorrect value</div> }
                        </Form.Group>
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