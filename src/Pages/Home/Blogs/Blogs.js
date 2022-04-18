import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);


    return (
        <Container className='pt-5'>
            <Row className='text-center mt-5 mb-4'>
                <h2 className='section-title mb-2'> Latest <span>News</span> </h2>
                <p>Services that I offers for my great customer</p>
            </Row>
            <Row>
                {
                    blogs.map(blog => 
                        <Blog
                            key={blog.id}
                            blog = {blog}
                        ></Blog>
                    )
                }
            </Row>
        </Container>
    );
};

export default Blogs;