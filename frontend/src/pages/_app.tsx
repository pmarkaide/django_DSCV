import { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './global.css';
import { User } from '@/types/type_User';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps)
{
	const [user, setUser] = useState<User | null>(null);

	console.log(user)

  return (
    <SessionProvider session={session}>
      <div className="flex flex-col min-h-screen">
				<Header user={user} setUser={setUser} />
        <main className="flex-grow">
					<Component {...pageProps} user={user} setUser={setUser} />
        </main>
        <Footer />
				<ToastContainer />
			</div>
    </SessionProvider>
  );
}

export default MyApp;
