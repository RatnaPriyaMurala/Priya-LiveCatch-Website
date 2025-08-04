import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState('');

  const sendOtp = async () => {
    try {
      await axios.post('http://localhost:5000/send-otp', { phone });
      setOtpSent(true);
      setError('');
    } catch (err) {
      setError('Failed to send OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post('http://localhost:5000/verify-otp', { phone, otp });
      if (res.data.success) {
        setVerified(true);
        setError('');
      }
    } catch (err) {
      setError('Invalid OTP');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🔐 Login with WhatsApp</h2>

      {!otpSent ? (
        <>
          <input
            type="text"
            placeholder="Enter 10-digit mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      ) : !verified ? (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      ) : (
        <div>✅ Logged in successfully!</div>
      )}

      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default LoginPage;
