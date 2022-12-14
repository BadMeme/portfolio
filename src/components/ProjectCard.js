import {Col} from 'react-bootstrap'

const ProjectCard = (props) => {
    console.log(props)
    return (
        <Col sm={6} md={4}>
                <div className='proj-imgbx'>
                        <img src={props.imgUrl} />
                    <div className='proj-txtx'>
                        <h4>{props.title}</h4>
                        <span>{props.description}</span>
                        <br></br><br></br>
                        <span>Tech Stack: {props.tech}</span>
                        <a href={props.deploy} target='_blank'>
                            <p>Deploy</p>
                        </a>
                        <a href={props.repo} target='_blank'>
                            <p>Code</p>
                        </a>
                    </div>
                </div>
        </Col>
    )
}


export default ProjectCard