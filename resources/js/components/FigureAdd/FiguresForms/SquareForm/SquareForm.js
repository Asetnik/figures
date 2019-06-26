import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SquareForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            MINVALUE: 0,
            MAXVALUE: 100,
            type_id: props.type_id,
            data: {
                height: 1
            },
            heightValid: true,
            formValid: true
        };
        this.heightChange = this.heightChange.bind(this);
        this.heightValidation = this.heightValidation.bind(this);
        this.formValidation = this.formValidation.bind(this);
    }

    heightChange(e) {
        this.setState({
            data: {
                height: Number(e.target.value)
            }
        }, this.heightValidation);
    }

    heightValidation(){
        this.setState({
            heightValid: true
        }, this.formValidation);

        if( this.state.data.height <= this.state.MINVALUE || this.state.data.height > this.state.MAXVALUE ) {
            this.setState({
                heightValid: false
            }, this.formValidation);
        }
    }

    formValidation() {
        this.setState({
            formValid: true
        });

        if( !this.state.heightValid ) {
            this.setState({
                formValid: false
            });
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <h3>Add square</h3>
                    <Form onSubmit={this.props.createFigure.bind(this)}>
                        <Form.Group controlId="formSquareHeight">
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
                        <Button disabled={ (!this.state.formValid) && "disabled" } variant="primary" type="submit">
                            Create figure
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