
'use client'

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    
      <div>
        {!session ? (
            <div className="h-full">
              <div className='flex flex-col m-auto mt-20 rounded-2xl w-96 h-1/2 bg-white border-blue-800 border-4 items-center'>
                <div className="font-bold text-2xl text-blue-900 mb-10 mt-11"> Sign Up</div>
                
                <input
                      type="text"
                      className="h-10 rounded-xl w-60 bg-gray-300 text-center"
                      placeholder="User Name"
                      name="email"
                    />
                    <input
                      type="password"
                      className="h-10 mt-3 w-60 rounded-xl bg-gray-300 text-center"
                      placeholder="Password"
                      name="password"
                    />
               
                <div className="mb-10">
                  <button type="submit" className='bg-blue-700 text-lg text-white w-28 mt-7 rounded-full h-7'> Sign Up </button>
                  <button className='bg-blue-700 text-lg text-white ml-3 w-28 mt-7 rounded-full h-7' onClick={() => signIn('google')}>Google</button>
                </div>
              </div> 
            </div>
          ) : (
            router.push("/home")
          )} 
      </div>
 
 );
}

{/* <div className="h-full">
  <div className='flex flex-col m-auto mt-20 rounded-2xl w-96 h-1/2 bg-white border-blue-800 border-4 items-center'>
    <div className="font-bold text-2xl text-blue-900 mb-10 mt-11"> Home Page{session?.user?.name}</div>
    <div  className="mb-10">
     
      <button className='bg-blue-700 text-lg text-white ml-3 w-28 mt-7 rounded-full h-7'onClick={() => signOut('google')}>Sign out</button>
    </div>
  </div> 
</div> */}

//   <div className="h-full">
//   <div className='flex flex-col m-auto mt-20 rounded-2xl w-96 h-1/2 bg-white border-blue-800 border-4 items-center'>
//     <div className="font-bold text-2xl text-blue-900 mb-10 mt-11"> Sign Up</div>
//     <div>
//       <button type="submit" className='bg-blue-700 text-lg text-white w-28 mt-7 rounded-full h-7' onClick={() => signOut()}> Sign Up </button>
//       <button className='bg-blue-700 text-lg text-white ml-3 w-28 mt-7 rounded-full h-7' onClick={() => signIn()}>Google</button>
//     </div>
//   </div> 
// </div>