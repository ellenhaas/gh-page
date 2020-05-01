import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faPhp, faJava, faJsSquare, faHtml5, faCss3Alt, faReact, faVuejs, faSymfony, faBootstrap, faAngular, faGitAlt, faMarkdown, faNodeJs, faTrello, faUbuntu, faWindows, faLinux, faWordpress} from '@fortawesome/free-brands-svg-icons'
import { fas, faCheckCircle, faLaptopCode, faIdCard, faDatabase } from '@fortawesome/free-solid-svg-icons'

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
                        <h3>Languages/Framework</h3>
                        <Row>
                            <Col xs={{span: 4}} md={{span: 1}} >
                            <FontAwesomeIcon className="fa-icon-vert" icon={faPhp} size="2x"/>
                            </Col>
                            <Col xs={{span: 4}} md={{span: 1}}>
                            <FontAwesomeIcon className="fa-icon-vert" icon={faSymfony} size="2x"/>
                            </Col>
                            <Col xs={{span: 4}} md={{span: 1}}>
                            <FontAwesomeIcon className="fa-icon-vert" icon={faBootstrap} size="2x"/>
                            </Col>

                            <Col xs={{span: 4}} md={{span: 1}}>
                            <FontAwesomeIcon className="fa-icon-vert" icon={faHtml5} size="2x"/>
                            </Col>
                            <Col xs={{span: 4}} md={{span: 1}}>
                            <FontAwesomeIcon className="fa-icon-vert" icon={faCss3Alt} size="2x"/>
                            </Col>
                            <Col xs={{span: 4}} md={{span: 1}}>
                            <FontAwesomeIcon className="fa-icon-vert" icon={faMarkdown} size="2x"/>
                            </Col>
                            
                            <Col xs={{span: 4}} md={{span: 1}} >
                            <FontAwesomeIcon className="fa-icon-vert" icon={faJsSquare} size="2x"/>
                            </Col>
                            <Col xs={{span: 4}} md={{span: 1}}>
                            <FontAwesomeIcon className="fa-icon-vert" icon={faReact} size="2x"/>
                            </Col>
                            <Col xs={{span: 4}} md={{span: 1}}>
                            <FontAwesomeIcon className="fa-icon-vert" icon={faVuejs} size="2x"/>
                            </Col>

                            <Col xs={{span: 4}} md={{span: 1}}>
                            <FontAwesomeIcon className="fa-icon-vert" icon={faNodeJs} size="2x"/>
                            </Col>
                            <Col xs={{span: 4}} md={{span: 1}}>
                            <FontAwesomeIcon className="fa-icon-vert" icon={faAngular} size="2x"/>
                            </Col>
                            <Col xs={{span: 4}} md={{span: 1}}>
                            <FontAwesomeIcon className="fa-icon-vert" icon={faJava} size="2x"/>
                            </Col>
                        </Row>


                        <hr/>
                        <h3>Outils</h3>
                        <Row>
                            <Col xs={{span: 4}} md={{span: 1, offset: 3}} >
                            <FontAwesomeIcon className="fa-icon-vert" icon={faGitAlt} size="2x"/>
                            </Col>
                            <Col xs={{span: 4}} md={{span: 1}}>
                            <FontAwesomeIcon className="fa-icon-vert" icon={faTrello} size="2x"/>
                            </Col>
                            <Col xs={{span: 4}} md={{span: 1}}>
                            <FontAwesomeIcon className="fa-icon-vert" icon={faDatabase} size="2x"/>
                            </Col>

                            <Col xs={{span: 4}} md={{span: 1}} >
                            <FontAwesomeIcon className="fa-icon-vert" icon={faLinux} size="2x"/>
                            </Col>
                            <Col xs={{span: 4}} md={{span: 1}}>
                            <FontAwesomeIcon className="fa-icon-vert" icon={faUbuntu} size="2x"/>
                            </Col>
                            <Col xs={{span: 4}} md={{span: 1}}>
                            <FontAwesomeIcon className="fa-icon-vert" icon={faWindows} size="2x"/>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col xs={{span: 10, offset: 1}} md={{span: 10, offset: 1}}>
                            <h5>Sélénium, WAMP/LAMP, MySQL, Oracle server, Maven, Travis CI, Agile, Scrum...</h5>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        )
    }
}

