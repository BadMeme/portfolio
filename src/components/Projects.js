import { Container, Row, Col, Tab } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import projImg1 from '../assets/img/proj1.png'
import projImg2 from '../assets/img/proj2.png'
import projImg3 from '../assets/img/proj3.png'
import projImg4 from '../assets/img/proj4.png'
// import projImg4 from '../assets/img/proj4.png'

// import colorSharp2 from '..assets/img/colorSharp2'

const Projects = () => {
    const projects = [
        {
            title: 'Normal Checkers',
            description: 'Checkers game + board-game engine',
            imgUrl: projImg1,
            // imgUrl: 'https://www.freeiconspng.com/thumbs/project-icon/project-icon-30.png',
            deploy: 'https://badmeme.github.io/Corey-Neal-iceCodeTrucker-Project---Checkers/',
            repo: 'https://github.com/BadMeme/project1---Normal-Checkers',
        },
        {
            title: 'bandcampLite',
            description: 'Bandcamp redisign with audio file hosting functionality',
            imgUrl: projImg2,
            // imgUrl: 'https://www.freeiconspng.com/thumbs/project-icon/project-icon-30.png',
            deploy: 'https://bandcamplite.herokuapp.com/',
            repo: 'https://github.com/basementlivin/Bandcamp-Lite'
        },
        {
            title: 'val.halla',
            description: 'Player stat tracker + forum site for online fps game Valorant',
            imgUrl: projImg3,
            deploy: 'https://val-halla-ga-sei725.netlify.app/',
            //fix this
            // imgUrl: 'https://www.freeiconspng.com/thumbs/project-icon/project-icon-30.png',
            repo: 'https://github.com/BadMeme/val.halla-heroku',
        },
        {
            title: 'ttBestiary',
            description: 'Tabletop role-playing game companion app + document manager for players and DMs',
            imgUrl: projImg4,
            deploy: 'https://tt-bestiary.herokuapp.com/',
            // imgUrl: 'https://www.freeiconspng.com/thumbs/project-icon/project-icon-30.png',
            repo: 'https://github.com/BadMeme/TableTopBestiary'
        },
            
    ]

    return(
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Under Construction: Deployment links coming soon</p>
                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>    
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Projects
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        In Progress
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Repos
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((project, idx) => {
                                            
                                                return (
                                                <ProjectCard 
                                                    key={idx}
                                                    {...project}
                                                    
                                                />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    Under Construction
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    Under Construction
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img className='background-image-right' src={colorSharp2}/> */}
        </section>
    )
}

export default Projects 