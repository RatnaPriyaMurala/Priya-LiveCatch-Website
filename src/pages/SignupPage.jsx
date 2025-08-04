// SignupPage.jsx
import { useState } from 'react';
import axios from 'axios';

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', phone: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/auth/signup', form);
    localStorage.setItem('token', res.data.token);
    alert('Signup successful!');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input type="text" placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input type="text" placeholder="Phone" onChange={e => setForm({...form, phone: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
      <button type="submit">Sign Up</button>
    </form>
  );
}
