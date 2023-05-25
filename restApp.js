import React, { useState } from 'react';

const MyComponent = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = 'http://example.com/api/token'; // Replace with your API endpoint
    const requestBody = { key: 'value' }; // Replace with your request body

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      setMessage(data.message); // Assuming the response returns a message field
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Post REST API Example</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default MyComponent;
