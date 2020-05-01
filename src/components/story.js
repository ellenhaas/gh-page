import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

export default class Story extends Component {
    render() {
        return (
            <section id="stor" className="main-wrapper background_sec">
                <div className="main main-raised">
                    <h2 className="padding-30">Curiculum Vitae</h2>
                    <Container>
                        <p>
                            
                        <h4>Education</h4>
                        <p>
                            <ul>
                                <li>2020 : Master ès Science (M.Sc.) in Computer Science, Université du Québec À Montréal, Québec, Canada.</li>
                                <li>2017 : Information Systems Manager, Software Development Major , EXIA.Cesi, Mont Saint Aignan, France.</li>
                                <li>2014 : Programmer Analyst, EXIA.Cesi, Mont Saint Aignan, France.</li>
                                <li>2013 : Network and Database Administrator, Cesi, Mont Saint Aignan, France.</li>
                            </ul>
                            <p>
                                <b>Research project for the Master</b>
                                <br /><b>Game Genesis - A UML profile for writing Game Design Documents : </b>Creation of a UML
                                profile, named Game Genesis, intended for the pre-production phase of a video game development
                                project. Based on the MDA Framework (Mechanics, Dynamics, Aesthetics), this profile provides an
                                extensible visual tool to organize the Mechanics elements of the video game during its design. This tool
                                would allow the reuse of data in all stages of the project and subsequently the transformation of models
                                to adapt them to the tools and needs of multidisciplinary development teams.
                            </p>
                        </p>
                        <br />
                        <hr />
                        <h4>Work Experience</h4>
                        <p>
                            <i>January 2018 - March 2019 : </i><b> Course instructor and corrector</b>
                            <ul>
                                <li><a href="https://etudier.uqam.ca/cours?sigle=INF2050" target="blank">INF2050 - Software development tools and practices.</a></li>
                                <li><a href="https://etudier.uqam.ca/cours?sigle=INF2005" target="blank">INF 2005 - Web Programming.</a></li>
                                <li><a href="https://etudier.uqam.ca/cours?sigle=INF1256" target="blank">INF 1256 - Computer science for Management Sciences.</a></li>
                            </ul>
                        </p>
                        <p>
                            <i>January 2016 - July 2016 : </i><b>Research and Development Trainee</b>
                            <ul>
                                <li>Research internship on the development of a Machine Learning library for NIT.</li>
                            </ul>
                        </p>
                        <p>
                            <i>September 2015 - December 2015 : </i><b>Development Trainee</b>
                            <ul>
                                <li>Development of a website for the startup "Domos Kit".</li>
                                <li>Technologies: PHP, HTML 5, CSS 3, Javacript, Jquery, Bootstrap.</li>
                                <li>MVC Architecture</li>
                                <li>Website Design</li>
                                <li>Development of a first website for Domos Kit</li>
                            </ul>
                        </p>
                        <p>
                            <i>February 2015 - May 2015 : </i><b>Development Trainee</b>
                            <ul>
                                <li>Extension of an intranet.</li>
                                <li>Technology: Zend Framework 2.</li>
                                <li>Database: MySQL.</li>
                                <li>Module development.</li>
                                <li>Integration of SOAP WebServices.</li>
                            </ul>
                        </p>
                        <p>
                            <i>May 2014 - August 2014 : </i><b>Development Trainee</b>
                            <ul>
                                <li>Development in an existing intranet.</li>
                                <li>Technologies : PHP, MySQL.</li>
                                <li>Database Redesign.</li>
                                <li>Module development.</li>
                            </ul>
                        </p>
                        </p>
                    </Container>
                </div>
            </section>
        )
    }
}

