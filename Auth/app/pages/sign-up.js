import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '', // Add this state
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // Make a POST request to your API route for data insertion
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle successful response
      console.log('User signed up successfully');
    } else {
      // Handle error
      console.error('Error signing up');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* ... your form inputs */}
        <div className='flex flex-col m-auto mt-20 rounded-2xl w-96 h-1/2 bg-white border-blue-800 border-4 items-center'>
      <div className="font-bold text-2xl text-blue-900 mb-10 mt-11"> Sign Up</div>
      <input
        type="text"
        className="h-10 rounded-xl w-60 bg-gray-300 text-center"
        placeholder="User Name"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        className="h-10 mt-3 w-60 rounded-xl bg-gray-300 text-center"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
      />
     <input
          type="password"
          className="h-10 mt-3 w-60 rounded-xl bg-gray-300 text-center"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        <div>
        <button type="submit" className='bg-blue-700 text-lg text-white w-28 mt-7 rounded-full h-7'> Sign in</button>
        <button className='bg-blue-700 text-lg text-white ml-3 w-28 mt-7 rounded-full h-7' onClick={() => signIn('google')}>Google</button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default SignUp;
