
import { Container, Row, Col } from "react-bootstrap";
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Contact = () => {
  return (
    <section className="contact" id="connect">

        <Container className='contact-bx'>
            <Row className="align-items-center">
                {/* <MailchimpForm /> */}
                {/* <Col size={12} sm={6}>
                    <img src={logo} alt="Logo" />
                </Col> */}
                <Col >
                    <div>
                        <h4>Connect: </h4>
                        <ul className='list-group'>
                            <li className='list-group-item'> {'{'} <a href='https://www.linkedin.com/in/corey-m-neal/' title='LinkedIn profile' target="_blank"><SiLinkedin /></a> {'}'} : LinkedIn</li>
                            <li className='list-group-item'> {'{'} <a href='https://github.com/BadMeme' title="Github account" target="_blank"><SiGithub /></a> {'}'} : Github</li>
                            <li className='list-group-item'> {'{'} <a href='https://docs.google.com/document/d/1H7vXLqCiMOpfQBXIg2NAK6zu-jAKeEKw8-VJI8MPfeg/' title='My Resume' target="_blank"><img src="https://www.freeiconspng.com/uploads/resume-icon-png-4.png" alt='Resume'/></a> {'}'} : Resume</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact