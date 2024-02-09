
import React, { useState } from 'react';
import './index.css';

const CreateAccount = ({ onContinue }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    onContinue({ name, email });
  };

  return (
    <div className='create-account-container'>
      <div className='create-account'>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/001/504/957/small/rocket-icon-free-vector.jpg"
          alt="create-account-logo"
          className='logo-create-acccount'
        />
        <h1 className='heading'>Create Your Account</h1>
        <input
          className='name'
          type='text'
          placeholder='Enter Your Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className='email'
          type='text'
          placeholder='Enter Email ID'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className='buttons'>
          <button className='custom-button' onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;






// import './index.css'

// const CreateAccount=()=>{
//     return(
//         <div className='create-account-container'>
//         <div className='create-account'>
//             <img src="https://static.vecteezy.com/system/resources/thumbnails/001/504/957/small/rocket-icon-free-vector.jpg" alt="create-account-logo" className='logo-create-acccount'/>
//             <h1 className='heading'>Create Your Account</h1>
//             <input className='email' type='text' placeholder='Enter Your Name'/>
//             <input className='email' type='text' placeholder='Enter Email ID'/> 
//             <div className='buttons'>
//                 <button className='custom-button'>Continue </button>
//             </div>
//         </div>
//         </div>
//     )
// }
// export default CreateAccount
