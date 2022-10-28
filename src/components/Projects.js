import { Container, Row, Col, Tab } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'

// import colorSharp2 from '..assets/img/colorSharp2'

const Projects = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'Checkers game + board-game engine',
            imgUrl: projImg1,
        },
        {
            title: 'Project 2',
            description: 'Bandcamp redisign with audio file hosting functionality',
            imgUrl: projImg2,
        },
        {
            title: 'Project 3',
            description: 'Player metadata and stat tracker + social media site for online fps game Valorant',
            imgUrl: projImg3,
        },
        {
            title: 'Project 4',
            description: 'Tabletop role-playing game companion app + document manager for players and DMs',
            imgUrl: projImg4,
        },
    ]

    return(
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Lorum Ipsum once again text text hahaha i just have to type stuff to test spacing i should really get a copy pasta or something</p>
                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>    
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Active
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        Option 2
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Third
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