import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import moment from 'moment';

import dataRequestor from '../dataRequestor';

function AdminPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [blogList, setBlogList] = useState([]);
    const navigate = useNavigate();
    const handleBlogClick = (id) => {
        navigate(`/detail/${id}`);
    }
    const handleBlogEdit = (id) => {
        navigate(`/edit/${id}`);
    }
    const handleBlogDelete = (id) => {
        dataRequestor(`api/blog/del?id=${id}`, 'POST').then(() => {
            const newBlogList = blogList.filter(blog => blog._id !== id);
            setBlogList(newBlogList);
        })
    }

    useEffect(() => {
        dataRequestor('api/blog/list?isadmin=1', 'GET').then((data) => {
            setBlogList(data);
            setIsLoading(false);
        })
    }, []);

    return isLoading ? 'loading' : <div>
        {blogList.map(blog => {
            moment.locale('zh-cn')
            const createdTime = moment(blog.createdAt).format('LLL');
            return <div key={blog._id} >
                <h2>{blog.title}</h2>
                <label>{blog.author}</label> <label>创建于 {createdTime}</label>
                <p>{blog.content}</p>
                <button onClick={() => handleBlogClick(blog._id)}> Detail </button>
                <button onClick={() => handleBlogEdit(blog._id)}> Edit</button>
                <button onClick={() => handleBlogDelete(blog._id)} >Delete</button>
                <hr />
            </div>
        }
        )}
    </div>
}

export default AdminPage;