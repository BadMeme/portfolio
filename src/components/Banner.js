import { useState, useEffect } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {ArrowRightCircle} from 'react-bootstrap-icons'
import headerImg from "../assets/img/NicePng_vaporwave-grid-png_2071258.png" ///stuff///

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100)
    const toRotate = ["Software Developer", "Web Developer", "Web Designer", "UI/UX Designer", "Change These Banner.js"];
    const period = 2000;

    useEffect(() => {
        let counter = setInterval(() => {
            count();
        }, delta)

        return () => {clearInterval(counter)};
    }, [text])

    const count = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500)
        }
    
    }

    const bio="A software engineer with passions for art, music, poetry, philosophy, and programming. I'm an analytical and creative mind that is always seeking to broaden my horizons and solve interesting problems. I’m looking for a backend development role where I can continue to expand my knowledge and skills."
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Corby's Portfolio</span>
                        <h1>{"Corey Neal"}</h1>
                        <h2 className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></h2>
                        <p>{bio}</p>
                        {/* <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button> */}
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        {/* <div className={isVisible ? "animate__animated animate__zoomIn" : ""}> */}
                            <img src={headerImg} alt='Header Img' />
                        {/* </div> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;