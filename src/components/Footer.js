
import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
// import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";
// import logo from '../assets/img/NicePng_vaporwave-grid-png_2071258.png';
import liIcon from '../assets/img/navIcon1.png';
import msIcon from '../assets/img/navIcon2.jpg';
import ghIcon from '../assets/img/navIcon3.png';

const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <Row className="align-items-center">
                {/* <MailchimpForm /> */}
                {/* <Col size={12} sm={6}>
                    <img src={logo} alt="Logo" />
                </Col> */}
                <Col size={12} sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="#"><img src={liIcon} alt="Icon" /></a>
                        <a href="#"><img src={ghIcon} alt="Icon" /></a>
                        <a href="#"><img src={msIcon} alt="Icon" /></a>
                    </div>
                    <p>Copyright 2022. All Rights Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer