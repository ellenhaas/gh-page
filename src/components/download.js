import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';


export default class Download extends Component {
    render() {
        return (
            <section id="down" className="main-wrapper background_sec">
                <div className="main main-raised">
                    <h2 className="padding-30">Downloads</h2>
                    <Container>
                        <Row>
                            <Col xs={{span: 6}} md={{span: 4, offset: 2}}>
                                <a href="https://github.com/ellenhaas/gh-page/blob/gh-pages/ellen_haas_cv_english.pdf" target="_blank"><Button variant="dark">Download CV in English</Button></a>
                            </Col>
                            <Col xs={{span: 6}} md={{span: 4}}>
                                <a href="https://github.com/ellenhaas/gh-page/blob/gh-pages/ellen_haas_cv.pdf" target="_blank"><Button variant="dark">Download CV in French</Button></a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        )
    }
}



