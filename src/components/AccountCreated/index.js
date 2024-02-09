import React from 'react';
import './index.css'; 

const AccountCreated = () => {
  return (
    <div className='account-created-container'>
      <div className='account-created'>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-IgCCNi-7xDotGRlXo2tC5nUmTe6vVdwoddwDQVoT4YDoqy-X2_agxhNJL4aLyR4dRY&usqp=CAU"
          alt="create-account-logo"
          className='logo-create-account'
        />
        <h1 className='heading'>Account Created <br/> Successfully</h1>
        <div className='buttons'>
          <button className='custom-button'>Continue Your First Post</button>
        </div>
      </div>
    </div>
  );
};

export default AccountCreated;

