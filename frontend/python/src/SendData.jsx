// SendData.js
import React, { useState } from 'react';
import axios from 'axios';

const SendData = () => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/data', { name, role })
            .then(response => console.log('Data sent:', response.data))
            .catch(error => console.error('Error sending data:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Role"
            />
            <button type="submit">Send Data</button>
        </form>
    );
};

export default SendData;
