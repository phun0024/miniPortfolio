import { Link } from 'react-router-dom'

import Row from '../components/Row'
import Col from '../components/Col'

function Projects () {
    
    return (
        <>
            <Col className="projectList d-flex flex-column">
                <Row>
                    <Link className='btn' to={'/countdown/'}>&gt;&gt; COUNT DOWN</Link>
                </Row>
                <Row>
                    <Link className='btn' to={'/modal/'}>&gt;&gt; MODAL</Link>
                </Row>
                <Row>
                    <Link className='btn' to={'/imageslider/'}>&gt;&gt; IMAGE SLIDER</Link>
                </Row>
            </Col>
        </>
    )
}

export default Projects