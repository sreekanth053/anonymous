
import React, { useState } from 'react';
import CreateAccount from '../CreateAccount';
import OTP from '../OTP';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handleSignUp = (userData) => {
    const { name, email } = userData;

    const generatedOtp = generateOTP();
    console.log('Generated OTP:', generatedOtp);

    sendOTPEmail(email, generatedOtp);

    setIsOtpVerified(true);

    setName(name);
    setEmail(email);
    setOtp(generatedOtp);
  };

  // Function to generate a random 6-digit OTP
  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const sendOTPEmail = (toEmail, otp) => {
    console.log(`Sending OTP ${otp} to ${toEmail}`);
  };

  // Handle OTP verification
  const handleOtpVerification = (enteredOtp) => {
    if (enteredOtp === otp) {
      setIsOtpVerified(true);
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div>
      {isOtpVerified ? (
        <CreateAccount name={name} email={email} />
      ) : (
        // Render the OTP component
        <OTP onOtpSubmit={handleOtpVerification} />
      )}
    </div>
  );
};

export default SignUp;
