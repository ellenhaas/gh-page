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
                                    <ul>
                                        <li><b>First Name : </b> Ellen</li>
                                        <li><b>Last Name : </b> Haas</li>
                                        <li><b>E-mail : </b> ellen.haas.pm@gmail.com</li>
                                        <li><b>Work permit : </b> Allowed to work in Canada (Post graduate work permit)</li>
                                    </ul>

                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        )
    }
}



