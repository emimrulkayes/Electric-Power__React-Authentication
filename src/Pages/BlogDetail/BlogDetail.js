import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
    const {blogId} = useParams();
    return (
        <Container className='container-height'>
            <Row>
            <h2 className='text-center'> Welcom to blog details {blogId} </h2>
            </Row>
        </Container>
    );
};

export default BlogDetail;