
import { Container, Row, Col } from "react-bootstrap";
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <Row className="align-items-center">
                {/* <MailchimpForm /> */}
                {/* <Col size={12} sm={6}>
                    <img src={logo} alt="Logo" />
                </Col> */}
                <Col><p>Copyright 2022. All Rights Reserved</p></Col>
                <Col size={12} sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href='https://www.linkedin.com/in/corey-m-neal/' title='LinkedIn profile' target="_blank"><SiLinkedin /></a>
                        <a href='https://github.com/BadMeme' title="Githup account" target="_blank"><SiGithub /></a>
                        <a href='https://docs.google.com/document/d/1H7vXLqCiMOpfQBXIg2NAK6zu-jAKeEKw8-VJI8MPfeg/' title='My Resume' target="_blank"><img src="https://www.freeiconspng.com/uploads/resume-icon-png-4.png" alt='Resume'/></a>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer