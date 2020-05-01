import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';


export default class Introduction extends Component {
    render() {
        return (
            <section id="intr" className="main-wrapper background_sec">
                <div className="main main-raised">
                    <h2 className="padding-30">About me</h2>
                    <Container>
                        <Row>
                            <Col xs={{span: 12}} md={{span: 8, offset: 2}}>
                                <p>
                                    <br /><b>First Name: </b> Ellen
                                    <br /><b>Last Name: </b> Haas
                                    <br /><b>E-mail: </b> ellen.haas.pm@gmail.com
                                    <br /><b>Work permit: </b> Allowed to work in Canada (Post graduate work permit)
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        )
    }
}



