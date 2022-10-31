import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// import arrow1 from '..assets/img/arrow1.svg';
// import arrow2 from '..assets/img/arrow2.svg'
// import meter1 from '../assets/img/meter1.svg';
// import meter2 from '../assets/img/meter2.svg';
// import meter3 from '../assets/img/meter2.svg';
// import colorSharp from "../assets/img/color-sharp.png";


const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint : { max:4000, min:3000 },
            items: 5
        },
        desktop: {
            breakpoint : { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (
        <section className='skill' id='skills'>
            <Container className="skill-bx">
                <Row>
                    <Col>                        
                            <h2>Skills</h2>
                            {/* <p></p> */}
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className='item'>
                                {/* <img src ={} alt='Image' /> */}
                                <h5>Languages</h5>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>JavaScript</li>
                                        <li className='list-group-item'>Python</li>
                                        <li className='list-group-item'>HTML</li>
                                        <li className='list-group-item'>CSS</li>
                                        <li className='list-group-item'>Mongo</li>
                                        <li className='list-group-item'>SQL</li>
                                        <li className='list-group-item'>JSON</li>
                                        <li className='list-group-item'>EJS</li>
                                    </ul>
                            </div>
                            <div className='item'>
                                {/* <img src ={} alt='Image' /> */}
                                <h5>Frameworks</h5>
                                    <ul className='list-group'>
                                        <li className='list-group-item'>React</li>
                                        <li className='list-group-item'>Express.js</li>
                                        <li className='list-group-item'>Django</li>
                                        
                                    </ul>
                            </div>
                            <div className='item'>
                                {/* <img src ={} alt='Image' /> */}
                                <h5>Databases</h5>
                                <ul className='list-group'>
                                        <li className='list-group-item'>MongoDB</li>
                                        <li className='list-group-item'>postgreSQL</li>
                                    </ul>
                            </div>
                            <div className='item'>
                                {/* <img src ={} alt='Image' /> */}
                                <h5>Libraries</h5>
                                <ul className='list-group'>
                                    <li className='list-group-item'>Jquery</li>
                                    <li className='list-group-item'>Bootstrap</li>
                                    <li className='list-group-item'>Bulma</li>
                                </ul>
                            </div> 
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-left" src={colorSharp}/> */}
        </section>
    )

}

export default Skills