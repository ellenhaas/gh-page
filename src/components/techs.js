import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { fas, faCheckCircle, faLaptopCode, faIdCard } from '@fortawesome/free-solid-svg-icons'

library.add(
    fab,
    fas
)

export default class Techs extends Component {
    render() {
        return (
            <section id="techs" className="main-wrapper background_sec">
                <div className="main main-raised">


                    <Container className="fa-container-inline">

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
                    </Container>
                    <br /> <hr/><br />
                    <Container>
                    <span className="fa-container-inline"><FontAwesomeIcon className="fa-icon-vert" icon="" size="2x"/></span><br/>
                    <span className="fa-container-inline"><FontAwesomeIcon className="fa-icon-vert" icon="" size="2x"/></span><br/>
                    <span className="fa-container-inline"><FontAwesomeIcon className="fa-icon-vert" icon="" size="2x"/></span><br/>
                    <span className="fa-container-inline"><FontAwesomeIcon className="fa-icon-vert" icon="" size="2x"/></span><br/>
                    <span className="fa-container-inline"><FontAwesomeIcon className="fa-icon-vert" icon="" size="2x"/></span><br/>
                    <span className="fa-container-inline"><FontAwesomeIcon className="fa-icon-vert" icon="" size="2x"/></span><br/>
                    <span className="fa-container-inline"><FontAwesomeIcon className="fa-icon-vert" icon="" size="2x"/></span><br/>
                    </Container>
                </div>
            </section>
        )
    }
}

