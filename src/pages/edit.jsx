import React, { useCallback, useState } from 'react';
import { useNavigate } from "react-router-dom";
import dataRequestor from '../dataRequestor';

function EditBlog() {
    let style = {
        marginBottom: "20px"
    }
    let textAreaStyle = {
        width: '300px',
        height: '200px'
    }

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleCreateHandler = useCallback(() => {
        if (title && content) {
            const id = location.pathname.replace('/edit/', '')
            dataRequestor(`api/blog/update?id=${id}`, 'POST', {
                title: title,
                content: content
            }).then(() => navigate('/admin'))
        } else {
            alert('please input title and content');
        }
    });
    const handleTitleHandler = useCallback((e) => {
        setTitle(e.target.value);
    });
    const handleContentHanlder = useCallback((e) => {
        setContent(e.target.value);
    })

    return <div>
        <div style={style}>
            <label>Blog Name</label>
            <div><input onChange={handleTitleHandler}></input></div>
        </div>
        <div style={style}>
            <label>Blog content</label>
            <div><textarea onChange={handleContentHanlder} style={textAreaStyle}></textarea></div>
        </div>
        <hr />
        <button onClick={handleCreateHandler}>Edit</button>
    </div>
}

export default EditBlog;