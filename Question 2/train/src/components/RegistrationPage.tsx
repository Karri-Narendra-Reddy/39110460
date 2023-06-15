import React, { useState } from 'react';

const BASE_URL = 'http://104.211.219.98/train/register';

const RegistrationPage = () => {
  const [companyName, setCompanyName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [registrationResponse, setRegistrationResponse] = useState('');

  const handleRegister = async () => {
    const requestBody = {
      companyName: companyName,
      ownerName: ownerName,
      rollNo: rollNo,
      ownerEmail: ownerEmail,
      accessCode: accessCode
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
      setRegistrationResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      console.log(error);
      setRegistrationResponse('Error occurred while registering the company.');
    }
  };

  return (
    <div>
      <h1>Company Registration</h1>
      <label>
        Company Name:
        <input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} />
      </label>
      <label>
        Owner Name:
        <input type="text" value={ownerName} onChange={e => setOwnerName(e.target.value)} />
      </label>
      <label>
        Roll No:
        <input type="text" value={rollNo} onChange={e => setRollNo(e.target.value)} />
      </label>
      <label>
        Owner Email:
        <input type="text" value={ownerEmail} onChange={e => setOwnerEmail(e.target.value)} />
      </label>
      <label>
        Access Code:
        <input type="text" value={accessCode} onChange={e => setAccessCode(e.target.value)} />
      </label>
      <button onClick={handleRegister}>Register</button>
      <pre>{registrationResponse}</pre>
    </div>
  );
};

export default RegistrationPage;
