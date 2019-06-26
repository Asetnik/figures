import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Swal from 'sweetalert2';
import axios from "axios";

class FiguresList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            figuresArray: [],
        };
        this.alertAboutRemove = this.alertAboutRemove.bind(this);
    }

    componentWillMount() {
        axios
            .get('/figures')
            .then(response => {
                this.setState({ figuresArray: response.data });
            })
    }

    alertAboutRemove(event) {
        let tr = event.target.parentElement.parentElement;
        let id = Number(event.target.getAttribute("figure_id"));
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you really want to delete figure?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                axios
                    .post('/delete_figure/' + id)
                    .then(response => {
                        if(response.data == 'deleted') {
                            tr.remove();
                            Swal.fire({
                                type: 'success',
                                title: 'Deleted',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        } else {
                            Swal.fire({
                                type: 'error',
                                title: 'Not deleted!',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }

                    });
            }
        })
    }

    render() {
        return (
            <div>
                <h3>Figures list</h3>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Type</th>
                        <th>Square</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.figuresArray.map((figure, index) => {
                               return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{figure.type}</td>
                                        <td>{figure.square}</td>
                                        <td>
                                            <i
                                                onClick={this.alertAboutRemove}
                                                figure_id={figure.id}
                                                className="fa fa-trash-o"
                                                aria-hidden="true"
                                                style={{cursor: 'pointer',
                                                        color: 'red'
                                                    }}
                                            ></i></td>
                                    </tr>;
                            })
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default FiguresList;