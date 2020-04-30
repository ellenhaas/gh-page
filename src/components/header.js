import React, { Component } from 'react'
import { Image , Container, Row} from 'react-bootstrap'


export default class Header extends Component {
    render() {
        return (
            <header>
                <Container className="header align-center-all">
                </Container>
                <Container className="header-text">
                    <Row className="align-center-all padding-30 header-row">
                        <Image src={require('../img/avatar.png')} className="img-avatar" roundedCircle />
                    </Row>
                    <Row className="align-center-all padding-30">
                        <h1>Full Stack Developer</h1>
                    </Row>
                </Container>
            </header>
        )
    }
}