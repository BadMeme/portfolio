
import { Container, Row, Col } from "react-bootstrap";
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Contact = () => {
  return (
    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
                {/* <MailchimpForm /> */}
                {/* <Col size={12} sm={6}>
                    <img src={logo} alt="Logo" />
                </Col> */}
                <Col size={12} sm={6}>
                    <h4>Connect: </h4>
                    <ul>
                        <li>LinkedIn</li>
                        <li>Github</li>
                        <li>Resumee</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact