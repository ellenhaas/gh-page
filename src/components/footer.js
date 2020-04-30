import React, { Component } from 'react'
import { Container, Col, Row} from 'react-bootstrap';


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'


library.add(
    fab
)


export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Container>
                    <Row>
                        <Col md={{ span: 4, offset: 4 }}>Made with Passion by Ellen Haas</Col>
                    </Row>
                    <Row className="padding-30">
                        <Col md={{ span: 2, offset: 3 }}>
                            <a href="https://github.com/ellenhaas/" target="_blank"><FontAwesomeIcon icon={faGithub} size="4x" /></a>
                        </Col>
                        <Col md="2">
                            <a href="https://twitter.com/HaasEllen2" target="_blank"><FontAwesomeIcon icon={faTwitter} size="4x" /></a>
                        </Col>
                        <Col md="2">
                            <a href="https://www.linkedin.com/in/haasellen/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="4x" /></a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}