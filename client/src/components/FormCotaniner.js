import React from 'react';
import {Row,col ,Container, Col} from 'react-bootstrap'
const FormCotaniner = ({children}) => {
    return (
        <Container>
            <Row className='justify-content-md-center'>
            <Col xs={12} md={6}>
        {children}
            </Col>
            </Row>
            
        </Container>
    );
}

export default FormCotaniner;
