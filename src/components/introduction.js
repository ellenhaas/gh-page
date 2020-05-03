import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faUser, faAt, faHeart, faCheckCircle, faLaptopCode, faIdCard } from '@fortawesome/free-solid-svg-icons'

library.add(
    fas
)

export default class Introduction extends Component {
    render() {
        return (
            <section id="intr" className="main-wrapper background_sec">
                <div className="main main-raised">

                    <Container className="fa-container-inline">
                        <h2>About me</h2>
                        <Row className="fa-container-inline">
                            <Col xs={{span: 12}} md={{span: 3, offset: 2}} >
                                <FontAwesomeIcon className=" fa-icon-vert" icon={faUser} size="2x" />
                            </Col>
                            <Col xs={{span: 12}} md={{span: 6, offset: 0}} className="fa-text-align fa-icon-vert">
                                Ellen HAAS
                            </Col>
                        </Row>
                        <hr/>
                        <Row className="fa-container-inline">
                            <Col xs={{span: 12}} md={{span: 3, offset: 2}} >
                                <FontAwesomeIcon className=" fa-icon-vert" icon={faAt} size="2x" />
                            </Col>
                            <Col xs={{span: 12}} md={{span: 6, offset: 0}} className="fa-text-align fa-icon-vert">
                                ellen.haas.pm@gmail.com
                            </Col>
                        </Row>
                        <hr/>
                        <Row className="fa-container-inline">
                            <Col xs={{span: 12}} md={{span: 3, offset: 2}} >
                                <FontAwesomeIcon className=" fa-icon-vert" icon={faCheckCircle} size="2x" />
                            </Col>
                            <Col xs={{span: 12}} md={{span: 6, offset: 0}} className="fa-text-align fa-icon-vert">
                                Ready to work remotely
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col xs={{span: 12}} md={{span: 3, offset: 2}} >
                                <FontAwesomeIcon className="fa-icon-vert" icon={faLaptopCode} size="2x"/>
                            </Col>
                            <Col xs={{span: 12}} md={{span: 6, offset: 0}} className="fa-text-align fa-icon-vert">
                                Windows and Linux environments ready
                            </Col>
                        </Row> 
                        <hr/>
                        <Row>
                            <Col xs={{span: 12}} md={{span: 3, offset: 2}}>
                                <FontAwesomeIcon className="fa-icon-vert" icon={faIdCard} size="2x"/>
                            </Col>
                            <Col xs={{span: 12}} md={{span: 6, offset: 0}} className="fa-text-align fa-icon-vert">
                            Allowed to work in Canada (Visa OK)
                            </Col>
                        </Row> 
                        <hr/>
                        <Row>
                            <Col xs={{span: 12}} md={{span: 3, offset: 2}}>
                                <FontAwesomeIcon className="fa-icon-vert" icon={faHeart} size="2x"/>
                            </Col>
                            <Col xs={{span: 12}} md={{span: 6, offset: 0}} className="fa-text-align fa-icon-vert">
                            I like to work with: PHP/HTML/CSS <br/>
                            JS environments like React and NodeJS <br/>
                            and passion.
                            </Col>
                        </Row> 
                    </Container>
                </div>
            </section>
        )
    }
}



