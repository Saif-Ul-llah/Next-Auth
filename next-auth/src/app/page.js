"use client"

import Login from '../../pages/login';
import './globals.css'
import { SessionProvider } from 'next-auth/react';
    
    export default function Home({ Component, pageProps }) {
   
      return (
       <div>
         <SessionProvider >
          <Login/>
        </SessionProvider>
     
       </div>
      );
    }
    
