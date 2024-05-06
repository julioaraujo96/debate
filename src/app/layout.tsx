import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Debate',
  description: 'Talk about your favourite topics with the community',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <div className='container mx-auto px-4 max-w-6xl'>
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
