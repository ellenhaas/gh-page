import React, { Component , useState, useInput} from 'react'
import { Container, Row, Col, Button, Form, InputGroup , FormControl} from 'react-bootstrap';




export default class Contact extends Component {

    state = {
        fname: "Mark",
        lname: "Otto",
        email: "",
        city: "",
        state: "",
        zip: ""
      };
    
      submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
      };
    
      changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
      };


    render() {
        return (
            <section id="cont" className="main-wrapper background_sec">
            <div className="main main-raised">
                <h1 className="padding-30">Contact</h1>
                <Container>
                    
                        <Form noValidate onSubmit={this.submitHandler}>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom01" className="mb-3">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue="John"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>



                            <Form.Group as={Col} md="4" controlId="validationCustom02" className="mb-3">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                defaultValue="Doe"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>




                            <Form.Group as={Col} md="4" controlId="validationCustom03" className="mb-3">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="e-mail"
                                defaultValue="john.doe@doe.com"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>
                            <InputGroup md="12" className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text>Your message</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl as="textarea" aria-label="With textarea" />
                            </InputGroup>
                        </Form.Row>

                        <Form.Row className="align-center-all">
                            <Button type="submit">Submit form</Button>
                        </Form.Row>
                        </Form>
                </Container>
            </div>
            </section>
        )
    }
}


