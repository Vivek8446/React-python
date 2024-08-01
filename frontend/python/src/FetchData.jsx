// FetchData.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/data')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            {data ? (
                <div>
                    <h1>{data.name}</h1>
                    <p>{data.role}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default FetchData;