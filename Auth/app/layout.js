'use client'


import { useState } from 'react';
import './globals.css';
import Login from '../pages/login';
import SignUp from '../pages/sign-up';


export const metadata = {
  title: 'Login',
  description: 'Next Auth',
};

export default function RootLayout() {
const [ che, setche]=useState(false);
  return (
che ? <Login/> :<SignUp/>
  );
}
