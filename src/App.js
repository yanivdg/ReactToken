import React, { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  const [token, setToken] = useState('');
  const [htmlContent, setHtmlContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
 const url = 'https://slnyr83a29.execute-api.us-west-1.amazonaws.com/default/subscribers';
    try {
      const response = await fetch(url , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const authToken = data.token; // Assuming the token property name is "token"
        setResult('Authentication successful');
        setToken(authToken); // Store the token in state for further use

        // Make a new request with the token
        const htmlResponse = await fetch(url , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: authToken }),
        });

        if (htmlResponse.ok) {
          const htmlData = await htmlResponse.json();
          setHtmlContent(htmlData.body);
        } else {
          setHtmlContent('Failed to load HTML content');
        }
      } else {
        setResult('Authentication failed');
        setHtmlContent('');
      }
    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred.');
      setHtmlContent('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>{result}</div>
      {htmlContent && <div dangerouslySetInnerHTML={{ __html: htmlContent }} />}
    </div>
  );
};

export default App;