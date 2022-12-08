import { useState } from 'react'

import Container from '../components/Container';

import Row from '../components/Row';

function Modal () {
    
    const [modal, setModal] = useState(false);

    function toggle () {
        setModal(!modal)
    }

    return (
        <>
           <Row className="modal-container">
                <button onClick={toggle} className='btn btn-modal btn-outline-dark'>Open Modal</button>
                {modal && (<Container className="modal-m">
                    <Container className="overlay-m">
                        <Container className="modal-content-m">
                            <h1>Hello Modal</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reiciendis fugit eum quas nihil quibusdam illo reprehenderit sint ex quia facilis vero eaque a quo, commodi nesciunt repudiandae rerum. Quis.</p>
                            <button onClick={toggle} className='btn close-modal'>X</button>
                        </Container>
                    </Container>
                </Container>)}
           </Row>
        </>
    )
}

export default Modal