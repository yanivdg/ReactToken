const { useState } = React;
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
          const fullName = data.fullname;
          setResult('Authentication successful' + '\n' + 'Hello ' + fullName + '\n' +  'Please wait for the Image to be loaded');
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
    React.createElement('div', null,
      React.createElement('form', { onSubmit: handleSubmit },
        React.createElement('div', { style: { textAlign: 'center' } },
          React.createElement('h2', { style: { color: 'cyan' } }, "Welcome to Y.D's experimental site"),
          React.createElement('h2', { style: { color: 'darkgoldenrod' } }, "built on GitHub(React-client side) and AWS(python-server side)")
        ),
        React.createElement('div', { style: { textAlign: 'center', color: ColorContent, display: DisplayState } },
          React.createElement('h3', { style: { color: 'green', display: DisplayState } }, "Please enter your login details to get randomize picture:"),
          React.createElement('div', null,
            React.createElement('label', { style: { color: 'white' }, htmlFor: 'username' }, "User Name:"),
            React.createElement('input', { type: 'text', id: 'username', value: username, onChange: (e) => setUsername(e.target.value) })
          ),
          React.createElement('div', null,
            React.createElement('label', { style: { color: 'white' }, htmlFor: 'password' }, "Password:"),
            React.createElement('input', { type: 'password', id: 'password', value: password, onChange: (e) => setPassword(e.target.value) })
          ),
          React.createElement('button', { type: 'submit' }, "Login")
        )
      ),
      React.createElement('div', { style: { textAlign: 'center', color: ColorContent } }, result),
      htmlContent && React.createElement('div', { style: { textAlign: 'center' }, dangerouslySetInnerHTML: { __html: htmlContent } })
    )
   );
};

// Use ReactDOM.render to render the App component to the root element
ReactDOM.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App, null)
  ),
  document.getElementById('root')
);
export default App;
