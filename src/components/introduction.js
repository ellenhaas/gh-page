import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';


export default class Introduction extends Component {
    render() {
        return (
            <section id="intr" className="main-wrapper background_sec">
                <div className="main main-raised">
                    <h1 className="padding-30">About me</h1>
                    <Container>
                        <p>
                            <ul>
                                <li><b>First Name : </b> Ellen</li>
                                <li><b>Last Name : </b> Haas</li>
                                <li><b>E-mail : </b> ellen.haas.pm@gmail.com</li>
                                <li><b>Work permit : </b> Allowed to work in Canada (Post graduate work permit)</li>
                            </ul>

                        </p>
                    </Container>
                </div>
            </section>
        )
    }
}



