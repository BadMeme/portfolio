import {Col} from 'react-bootstrap'

const ProjectCard = (props) => {
    return (
        <Col sm={6} md={4}>
            <div className='proj-imgbx'>
                <img src={props.imgUrl} />
                <div className='proj-txtx'>
                    <h4>{props.title}</h4>
                    <span>{props.description}</span>
                    <p>add link to deploy l8r</p>
                </div>
            </div>
        </Col>
    )
}


export default ProjectCard