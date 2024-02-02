import React, { useState } from 'react';

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState([]);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const sendFetchRequest = () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ inputVal: inputValue })
        };

        fetch("http://localhost:3001/test", options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response not ok');
                }
                return response.json();
            })
            .then(data => {
                setResult(data.data.map(element => element.node.title));
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Find Anime"
            />
            <button onClick={sendFetchRequest}>Send Fetch Request</button>
            <div>
                {result.map((title, index) => (
                    <p key={index}>{title}</p>
                ))}
            </div>
        </div>
    );
};

export default Search;
