import React, { useState } from 'react';

const MyComponent = () => {
  const [token, setMessage] = useState('');
  
  const generateToken = async (event) => {
    event.preventDefault();

    const url = 'http://localhost:3000/api/token'; // Replace with your API endpoint
    
	//const requestBody = { value: 'blabla' }; // Replace with your request body
	const sk = document.getElementById("txtSecretKey");
	var element = document.getElementsByTagName("div")[0];
	if (sk) 
	{
		const requestBody = {value: sk.value};
		try 
		{
		let response = 
			await fetch(url, {
								method: 'POST',
								headers: {
											'Content-Type': 'application/json',
										 },
										body: JSON.stringify(requestBody)
							  });
		  const data = await response.json();
          setMessage(data.token); // Assuming the response returns a message field
      } 
	catch (error) 
	{
	  setMessage(error);
      console.error('Error:', error);
    }

	}
  }
  return (
      <form>
		<label id="lblSecretKey">Secret Key:</label>
		<input type="text" id="txtSecretKey"/><br></br><br></br>
	  	<button onClick={generateToken}>Generate Token with React</button>
		<div>{token}</div>
	  </form>
  );
};

export default MyComponent;

/*
try {
    let response = await fetch(url, {
      method: "POST",
								headers: {
											'Content-Type': 'application/json',
										 },
										body: JSON.stringify(requestBody)
							  });
} catch(error) {
    // Error handling here!
}
*/