import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

export default class Work extends Component {
    render() {
        return (
            <section id="work" className="main-wrapper background_sec">
                <div className="main main-raised">
                    <Container>

                    <h2 className="padding-30">Work Experience</h2>
                        <p>
                            <h5><i>January 2018 - March 2019: </i><b> UQAM </b> - Course instructor and corrector</h5>
                            <ul>
                                <li>
                                    <a href="https://etudier.uqam.ca/cours?sigle=INF2050" target="blank">INF 2050 - Software development tools and practices.</a>
                                    <p>
                                        Discovery and using of Git, Maven, IntelliJ and Junit, Markdown, TravisCI, Selenium IDE and WebDriver.
                                        Creation of course tutorials based on student progress (<a href="https://github.com/ellenhaas/INF2050_Laboratoires" target="_blank">Github repository</a>).
                                        Support for students in their work and learning.
                                        Correction of homework and exams.
                                    </p>
                                </li>
                                <li>
                                    <a href="https://etudier.uqam.ca/cours?sigle=INF2005" target="blank">INF 2005 - Web Programming.</a>
                                    <p>Introduction to web programming languages through course tutorials: PHP, HTML, CSS, JavaScript.</p>
                                </li>
                                <li>
                                    <a href="https://etudier.uqam.ca/cours?sigle=INF1256" target="blank">INF 1256 - Computer science for Management Sciences.</a>
                                    <p>Correction of homework and exams.</p>
                                </li>
                            </ul>
                        </p>
                        
                        <br />
                        <hr />
                        <br />

                        <p>
                        <h5><i>January 2016 - July 2016: </i><b>UQAM</b> - Research and Development Trainee</h5>
                            <p>
                                NIT is an object oriented expressive language with a script-like syntax aiming at elegance, simplicity and intuitiveness.
                                The force of NIT is based on a strong static typing with virtual types, an extended Objects System with multiple inheritance and a strong support for foreign languages like C, C++, Objective-C and Java.
                            </p>
                            <ul>
                                <li>Research internship on the development of a Machine Learning library for NIT.</li>
                                <li>Implementation of Decision Trees and Bayesian Naive.</li>
                            </ul>
                        </p>
                        
                        <br />
                        <hr />
                        <br />

                        <p>
                            <h5><i>September 2015 - December 2015: </i><b>Domos Kit</b> - Development Trainee</h5>
                            <p>
                                Domos Kit is a startup aiming to help their clients with all the steps coming when they are moving to a new home.
                                They  accompagny their customers in the paperwork coming with changing their adress with a lot of services contracts (energy, assurances, telecommunications, mail...)
                                Their services are based on the fact that they are all free of charge for the customer, their remuneration being assured by the service providers.
                            </p>
                            <ul>
                                <li>Development of a website.</li>
                                <li>Technologies: PHP, HTML 5, CSS 3, Javacript, Jquery, Bootstrap.</li>
                                <li>MVC Architecture</li>
                                <li>Website Design</li>
                            </ul>
                        </p>
                        
                        <br />
                        <hr />
                        <br />

                        <p>
                            <h5><i>February 2015 - May 2015: </i><b>Webaxys</b> - Development Trainee</h5>
                            <p>
                                Webaxys is a Green Datacenter and a network operator.
                                From the design of their infrastructures to the services offered, they aim to reduce the environmental impacts of theirs activities as much as possible.
                                In these eco-responsible services they offer a personalized accompaniment of their customers towards the most efficient and scalable solutions according to their needs.
                            </p>
                            <ul>
                                <li>Extension of an intranet.</li>
                                <li>Technology: Zend Framework 2.</li>
                                <li>Database: MySQL.</li>
                                <li>Module development.</li>
                                <li>Integration of SOAP WebServices.</li>
                            </ul>
                        </p>
                        
                        <br />
                        <hr />
                        <br />

                        <p>
                            <h5><i>May 2014 - August 2014: </i><b>PC VIP Services</b> - Development Trainee</h5>
                            <p>
                                As specialist in Systems, Networks and Security infrastructures, PC VIP offers a suite of solutions and services to SMEs in order to support theses companies in the managament of IT ressources.
                                They accompany their customers  from the audit of existing infrastructures, consulting to make their system evolve as well as then maintenance and monitoring of network infrastructures.    
                            </p>
                            <ul>
                                <li>Development in an existing intranet.</li>
                                <li>Technologies: PHP, MySQL.</li>
                                <li>Database Redesign.</li>
                                <li>Module development.</li>
                            </ul>
                        </p>
                    </Container>
                </div>
            </section>
        )
    }
}

