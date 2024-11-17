// Memorials.js
import React, { useState, useEffect } from 'react';


const Memorials = () => {
    const [memorials, setMemorials] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch memorials (simulate fetch)
        setMemorials([
            { id: 1, name: 'John Doe', description: 'A beloved father.' },
            { id: 2, name: 'Jane Smith', description: 'A caring friend.' },
        ]);
    }, []);

    const filteredMemorials = memorials.filter(memorial =>
        memorial.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="memorials">
            <h1>Memorials</h1>
            <input
                type="text"
                placeholder="Search memorials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredMemorials.map(memorial => (
                    <li key={memorial.id}>
                        <h2>{memorial.name}</h2>
                        <p>{memorial.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Memorials;