import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './BlogDetail.css';

const BlogDetail = () => {
    const {blogId} = useParams();
    return (
        <Container className='blog-container'>
            <Row>
                <h2 className='text-center'> Welcom to blog details {blogId} </h2>
            </Row>
        </Container>
    );
};

export default BlogDetail;