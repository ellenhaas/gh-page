import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

export default class Education extends Component {
    render() {
        return (
            <section id="educ" className="main-wrapper background_sec">
                <div className="main main-raised">
                    <Container>

                    <h2 className="padding-30">Education</h2>
                        <p>
                            <ul>
                                <li>2020: Master ès Science (M.Sc.) in Computer Science, Université du Québec À Montréal, Québec, Canada.</li>
                                <li>2017: Information Systems Manager, Software Development Major , EXIA.Cesi, Mont Saint Aignan, France.</li>
                                <li>2014: Programmer Analyst, EXIA.Cesi, Mont Saint Aignan, France.</li>
                                <li>2013: Network and Database Administrator, Cesi, Mont Saint Aignan, France.</li>
                            </ul>
                        </p>
                        

                        <br />
                        <hr />
                        <br />


                    <h2 className="padding-30">Research project for the Master</h2>
                        <p>
                            <b>Game Genesis - A UML profile for writing Game Design Documents : </b>Creation of a UML
                            profile, named Game Genesis, intended for the pre-production phase of a video game development
                            project. Based on the MDA Framework (Mechanics, Dynamics, Aesthetics), this profile provides an
                            extensible visual tool to organize the Mechanics elements of the video game during its design. This tool
                            would allow the reuse of data in all stages of the project and subsequently the transformation of models
                            to adapt them to the tools and needs of multidisciplinary development teams.
                        </p>

                        <br />
                        <Row>
                            <Col xs={{span: 6,offset: 3}} md={{span: 6, offset: 3}}>
                                <a href="https://github.com/ellenhaas/gh-page/raw/gh-pages/HAAE26619007___M_moire_maitrise.pdf" target="_blank"><Button variant="dark">Download the Master's Thesis</Button></a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        )
    }
}

