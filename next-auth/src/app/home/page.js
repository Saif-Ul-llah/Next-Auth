'use client'
import React from 'react'
import { signOut,useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import Menubar from '../components/Menubar';

const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    
      <div>
        {session ? (
          <div>
         <Menubar/>
<div class="p-4 sm:ml-64">
   <div class="p-4 border-2 border-black border-dashed rounded-lg dark:border-gray-700">
      <div class="grid grid-cols-1 gap-4 mb-4">
         <div class="flex items-center justify-center h-96 rounded bg-gray-50 dark:bg-gray-800">
            </div>
      </div>
   </div>
</div>
</div>
                  ):
                  (
                  router.push("/")
                   )}

    </div>
  )
}

export default Home
