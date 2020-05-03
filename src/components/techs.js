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
            <section id="tech" className="main-wrapper background_sec">
                <div className="main main-raised">
                    <Container>
                        <h3>Languages / Framework</h3>
                        <Row> 
                            <Col xs={{span: 4}} md={{span: 2}} >
                                <FontAwesomeIcon className="fa-icon-vert fa-padding" icon={faPhp} size="2x" title="PHP"/>
                                <br/> PHP
                            </Col>
                            <Col xs={{span: 4}} md={{span: 2}}>
                                <FontAwesomeIcon className="fa-icon-vert fa-padding" icon={faSymfony} size="2x" title="Symfony"/>
                                <br/> Symfony
                            </Col>
                            <Col xs={{span: 4}} md={{span: 2}}>
                                <FontAwesomeIcon className="fa-icon-vert fa-padding" icon={faBootstrap} size="2x" title="Bootstrap"/>
                                <br/> Bootstrap
                            </Col>
                            <Col xs={{span: 4}} md={{span: 2}}>
                                <FontAwesomeIcon className="fa-icon-vert fa-padding" icon={faHtml5} size="2x" title="HTML 5"/>
                                <br/> HTML 5
                            </Col>
                            <Col xs={{span: 4}} md={{span: 2}}>
                                <FontAwesomeIcon className="fa-icon-vert fa-padding" icon={faCss3Alt} size="2x" title="CSS 3"/>
                                <br/> CSS 3
                            </Col>
                            <Col xs={{span: 4}} md={{span: 2}}>
                                <FontAwesomeIcon className="fa-icon-vert fa-padding" icon={faMarkdown} size="2x" title="Markdown"/>
                                <br/> Markdown
                            </Col>
                        </Row>
                        <Row className="fa-padding">    
                            <Col xs={{span: 4}} md={{span: 2}} >
                                <FontAwesomeIcon className="fa-icon-vert fa-padding" icon={faJsSquare} size="2x" title="JavaScript"/>
                                <br/> JavaScript
                            </Col>
                            <Col xs={{span: 4}} md={{span: 2}}>
                                <FontAwesomeIcon className="fa-icon-vert fa-padding" icon={faReact} size="2x" title="React"/>
                                <br/> React
                            </Col>
                            <Col xs={{span: 4}} md={{span: 2}}>
                                <FontAwesomeIcon className="fa-icon-vert fa-padding" icon={faVuejs} size="2x" title="Vue JS"/>
                                <br/> Vue JS
                            </Col>
                            <Col xs={{span: 4}} md={{span: 2}}>
                                <FontAwesomeIcon className="fa-icon-vert fa-padding" icon={faNodeJs} size="2x" title="Node JS"/>
                                <br/> Node JS
                            </Col>
                            <Col xs={{span: 4}} md={{span: 2}}>
                                <FontAwesomeIcon className="fa-icon-vert fa-padding" icon={faAngular} size="2x" title="Angular"/>
                                <br/> Angular
                            </Col>
                            <Col xs={{span: 4}} md={{span: 2}}>
                                <FontAwesomeIcon className="fa-icon-vert fa-padding" icon={faJava} size="2x" title="Java"/>
                                <br/> Java
                            </Col>
                        </Row>


                        <hr/>
                        <h3>Tools</h3>
                        <Row className="fa-padding">
                            <Col xs={{span: 4}} md={{span: 2, offset: 3}} >
                                <FontAwesomeIcon className="fa-icon-vert fa-padding" icon={faGitAlt} size="2x" title="Git"/>
                                <br/> Git
                            </Col>
                            <Col xs={{span: 4}} md={{span: 2}}>
                                <FontAwesomeIcon className="fa-icon-vert fa-padding" icon={faTrello} size="2x" title="Trello"/>
                                <br/> Trello
                            </Col>
                            <Col xs={{span: 4}} md={{span: 2}}>
                                <FontAwesomeIcon className="fa-icon-vert fa-padding" icon={faDatabase} size="2x" title="Databases"/>
                                <br/> Databases
                            </Col>
                        </Row>
                        <Row className="fa-padding">
                            <Col xs={{span: 6}} md={{span: 2, offset: 4}} >
                                <FontAwesomeIcon className="fa-icon-vert fa-padding" icon={faLinux} size="2x" title="Linux"/>
                                <br/> Linux
                            </Col>
                            <Col xs={{span: 6}} md={{span: 2}}>
                                <FontAwesomeIcon className="fa-icon-vert fa-padding" icon={faWindows} size="2x" title="Windows"/>
                                <br/> Windows
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

