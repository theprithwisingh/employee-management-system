import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler=(e)=>{
       e.preventDefault();
       console.log("email",email);
       console.log("password",password);
       setEmail("");
       setPassword("");
    }
 
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border border-gray-300 shadow-lg rounded-lg p-10 bg-white'>
        <h1 className='text-2xl font-bold text-gray-700 mb-6'>Login</h1>
        <form 
        onSubmit={(e)=>{
            submitHandler(e);
        }} 
         className='flex flex-col items-center'>
          
          <input
            value={email} 
            onChange={(e)=>{
                setEmail(e.target.value);  
            }}
            required
            className='border border-gray-300 rounded-full outline-none text-black bg-gray-50 text-lg py-3 px-6 mb-4 w-full transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 placeholder:text-gray-700'
            type="email" 
            placeholder='Enter your email' 
          />
          
          <input
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
             required
            className='border border-gray-300 rounded-full outline-none text-black bg-gray-50 text-lg py-3 px-6 mb-4 w-full transition focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 placeholder:text-gray-700' 
            type="password"  
            placeholder='Enter your password' 
          />
          
          <button 
            className='text-white bg-green-600 rounded-full py-3 px-8 mt-4 w-full transition hover:bg-green-700 focus:ring-4 focus:ring-green-300'>
            Login
          </button>
          
        </form>
      </div> 
    </div>
  )
}

export default Login;

