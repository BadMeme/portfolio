import {Col} from 'react-bootstrap'

const ProjectCard = (props) => {
    return (
        <Col sm={6} md={4}>
                <div className='proj-imgbx'>
                        <img src={props.imgUrl} />
                    <div className='proj-txtx'>
                        <h4>{props.title}</h4>
                        <span>{props.description}</span>
                        <a href={props.repo} target='_blank'>
                            <p>Go and see</p>
                        </a>
                    </div>
                </div>
        </Col>
    )
}


export default ProjectCard