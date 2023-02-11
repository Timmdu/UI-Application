import axios from 'axios';

function dataRequestor(path, method, postData) {
    axios.defaults.withCredentials = true
    const promise = new Promise((resolve, reject) => {
        const url = 'http://localhost:8080/' + path;
        if (method === 'GET') {
            axios.get(url, {withCredentials: true}).then(result => {
                const data = result.data;
                if (data.errno < 0) {
                    alert(data.message);
                } else {
                    resolve(data.data);
                }
            }).catch(function (error) {
                console.log(error);
                reject(error);
            })
        } else if (method === 'POST') {
            postData = postData || {};
            axios.post(url, postData, {withCredentials: true}).then(result => {
                const data = result.data;
                if (data.errno < 0) {
                    alert(data.message);
                } else {
                    resolve(data.data);
                }
            }).catch(function (error) {
                console.log(error);
                reject(error);
            })
        }
    });

    return promise;
}

export default dataRequestor; 