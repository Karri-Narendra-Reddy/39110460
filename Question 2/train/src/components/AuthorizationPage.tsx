import React, { useState } from 'react';
const BASE_URL = 'http://104.211.219.98/train/auth';

const AuthorizationPage = () => {
  const [companyName, setCompanyName] = useState('');
  const [clientID, setClientID] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [authorizationResponse, setAuthorizationResponse] = useState('');

 

  const handleAuthorize = async () => {
    const requestBody = {
      companyName: companyName,
      clientID: clientID,
      ownerName: ownerName,
      ownerEmail: ownerEmail,
      rollNo: rollNo,
      clientSecret: clientSecret
    };

    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();
      setAuthorizationResponse(JSON.stringify(data, null, 2));

      // Redirect to the home page after successful authorization
      if (response.ok) {
        history.push('/');
      }
    } catch (error) {
      console.log(error);
      setAuthorizationResponse('Error occurred while authorizing the company.');
    }
  };

  return (
    <div>
      <h1>Company Authorization</h1>
      <label>
        Company Name:
        <input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} />
      </label>
      <label>
        Client ID:
        <input type="text" value={clientID} onChange={e => setClientID(e.target.value)} />
      </label>
      <label>
        Owner Name:
        <input type="text" value={ownerName} onChange={e => setOwnerName(e.target.value)} />
      </label>
      <label>
        Owner Email:
        <input type="text" value={ownerEmail} onChange={e => setOwnerEmail(e.target.value)} />
      </label>
      <label>
        Roll No:
        <input type="text" value={rollNo} onChange={e => setRollNo(e.target.value)} />
      </label>
      <label>
        Client Secret:
        <input type="text" value={clientSecret} onChange={e => setClientSecret(e.target.value)} />
      </label>
      <button onClick={handleAuthorize}>Authorize</button>
      <pre>{authorizationResponse}</pre>
    </div>
  );
};

export default AuthorizationPage;
