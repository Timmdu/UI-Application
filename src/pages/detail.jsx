import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import dataRequestor from '../dataRequestor';
import moment from 'moment';

function BlogDetail() {

    const [isLoading, setIsLoading] = useState(true);
    const [blogDetail, setBlogDetail] = useState({});
    const location = useLocation();

    useEffect(() => {
        const id = location.pathname.replace('/detail/', '');
        dataRequestor(`api/blog/detail?id=${id}`, 'GET').then((blogDetail) => {
            setBlogDetail(blogDetail);
            setIsLoading(false);
        })
    }, [])

    moment.locale('zh-cn')
    const createdTime = moment(blogDetail.createdAt).format('LLL');

    return isLoading ? 'loading' :
        <div>
            <div>
                <h1>{blogDetail.author}</h1>
                <h1>{blogDetail.title}</h1>
                <p> {blogDetail.content}</p>
                <p> {createdTime}</p>
            </div>
        </div>
}

export default BlogDetail;