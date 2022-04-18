import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
    const {blogId} = useParams();
    return (
        <div>
            <h2>Blog Detail {blogId} </h2>
        </div>
    );
};

export default BlogDetail;