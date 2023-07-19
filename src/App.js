//import React, { useState } from 'react';
import React, { useState } from 'https://unpkg.com/react@18/umd/react.development.js';
const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  //const [Token, setToken] = useState('');
  const [htmlContent, setHtmlContent] = useState('');
  const [ColorContent,setColorContent] =  useState('');
  const [DisplayState,setDisplayState] =  useState('');

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

      if (response.ok) 
      {
        const data = await response.json();
        if(data.statusCode === 200)
        {
          const authToken = data.token; // Assuming the token property name is "token"
      
          setResult('Authentication successful');
          //setToken(authToken); // Store the token in state for further use
          setColorContent('green');
          setDisplayState('none');
          // Make a new request with the token
          const htmlResponse = await fetch(url , {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: authToken }),
          });
          if (htmlResponse.ok) 
          {
            const htmlData = await htmlResponse.json();
            setHtmlContent(htmlData.body);
          } 
          else 
          {
            setHtmlContent('Failed to load HTML content');
          }
      } 
      else 
      {
        setResult('Authentication failed');
        setColorContent('red');
        setHtmlContent('');
      }
    } 
  }
    catch (error) {
      console.error('Error:', error);
      setResult('An error occurred.'+ error);
      setHtmlContent('');
      setColorContent('red');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{textAlign: "center"}}>
      <h2 style={{color:'cyan'}}>Welcome to Y.D's experimental site</h2>
      <h2 style={{color:'darkgoldenrod'}}>built on GitHub(React-client side) and AWS(python-server side)</h2>
      </div>
        <div  style={{textAlign: "center",color:ColorContent ,display: DisplayState}}>
        <h3 style={{color:'green',display: DisplayState}}>Please enter your login details to get randomize picture:</h3>
        <div>
          <label htmlFor="username">User Name:</label>
          <input type="text"  id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div>
          <label htmlFor="password">Password:</label>
         <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
         </div>
         <button type="login">Login</button>
        </div>
      </form>
      <div  style={{textAlign: "center", color: ColorContent }}>{result}</div>
      {htmlContent && <div  style={{textAlign: "center"}} dangerouslySetInnerHTML={{ __html: htmlContent }} />}
    </div>
  );
};

export default App;
