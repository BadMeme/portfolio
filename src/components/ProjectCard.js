import {Col} from 'react-bootstrap'

const ProjectCard = (props) => {
    return (
        <Col sm={6} md={4}>
            <div className='proj-imgbx'>
                <img src={props.imgUrl} />
                <h4>{props.title}</h4>
                <span>{props.description}</span>
                <p>add link to deploy l8r</p>
            </div>
        </Col>
    )
}


export default ProjectCard