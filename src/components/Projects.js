import { Container, Row, Col, Tab } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
// import projImg1 from '..assets/img/project-img1.png'
// import projImg2 from '..assets/img/project-img2.png'
// import projImg3 from '..assets/img/project-img3.png'
// import projImg4 from '..assets/img/project-img4.png'

// import colorSharp2 from '..assets/img/colorSharp2'

const Projects = () => {
    const projects = [
        {
            title: 'Normal Checkers',
            description: 'Checkers game + board-game engine',
            // imgUrl: projImg1,
            imgUrl: 'https://www.freeiconspng.com/thumbs/project-icon/project-icon-30.png',
            repo: 'https://github.com/BadMeme/project1---Normal-Checkers',
        },
        {
            title: 'bandcampLite',
            description: 'Bandcamp redisign with audio file hosting functionality',
            // imgUrl: projImg2,
            imgUrl: 'https://www.freeiconspng.com/thumbs/project-icon/project-icon-30.png'
        },
        {
            title: 'val.halla',
            description: 'Player stat tracker + forum site for online fps game Valorant',
            // imgUrl: projImg3,
            imgUrl: 'https://www.freeiconspng.com/thumbs/project-icon/project-icon-30.png',
            repo: 'https://github.com/BadMeme/val.halla-heroku',
        },
        {
            title: 'ttBestiary',
            description: 'Tabletop role-playing game companion app + document manager for players and DMs',
            // imgUrl: projImg4,
            imgUrl: 'https://www.freeiconspng.com/thumbs/project-icon/project-icon-30.png',
            repo: 'https://github.com/BadMeme/TableTopBestiary'
        },
            
    ]

    return(
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Lorum Ipsum once again text text hahaha i just have to type stuff to test spacing i should really get a copy pasta or something</p>
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
                                    Lorem Ipsum
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    Lorem Ipsum
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