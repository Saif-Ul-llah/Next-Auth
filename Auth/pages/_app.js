import connectDB from '@/lib/db';
import React, { useEffect } from 'react';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    connectDB(); // Connect to MongoDB
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
