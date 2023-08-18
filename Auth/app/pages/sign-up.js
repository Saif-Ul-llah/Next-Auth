import React from 'react'
import Link from 'next/link'

const SignUp = () => {
  return (
    <div >
    <div className='flex flex-col m-auto mt-20 rounded-2xl w-96 h-1/2 bg-white border-blue-800 border-4 items-center'>
      <div className="font-bold text-2xl text-blue-900 mb-10 mt-11"> Sign Up</div>
      <input
        type="text"
        className="h-10 rounded-xl w-60 bg-gray-300 text-center"
        placeholder="User Name"
      />
      <input
        type="password"
        className="h-10 mt-3 w-60 rounded-xl bg-gray-300 text-center"
        placeholder="Password"
      />
     <input
        type="password"
        className="h-10 mt-3 w-60 rounded-xl bg-gray-300 text-center"
        placeholder="Confirm Password"
      />
        <div>
        <button className='bg-blue-700 text-lg text-white w-28 mt-7 rounded-full h-7'onClick={() => signIn('GithubProvider')} > Sign in</button>
        <button className='bg-blue-700 text-lg text-white ml-3 w-28 mt-7 rounded-full h-7' onClick={() => signIn('google')}>Google</button>
        </div>
      </div>
  </div>
  )
}

export default SignUp
