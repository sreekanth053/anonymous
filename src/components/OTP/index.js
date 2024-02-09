import React, { useState } from 'react';
import './index.css';

const OTP = ({ onOtpSubmit }) => {
  const [otp, setOtp] = useState('');

  const handleOtpSubmit = () => {
    onOtpSubmit(otp);
  };

  return (
    <div className='otp-container'>
      <div className='otp-details'>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/001/504/957/small/rocket-icon-free-vector.jpg"
          alt="create-account-logo"
          className='logo-create-acccount'
        />
        <h1 className='heading'>Create Your Account</h1>
        <p className='otp-description'>
          Please verify your email ID to continue.
          <br />
          We have sent an OTP to this email ID
        </p>
        <input
          className='otp'
          type='text'
          placeholder='Enter OTP'
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <div className='buttons'>
          <button className='custom-button' onClick={handleOtpSubmit}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTP;
