import * as React from 'react';

// import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='flex flex-col min-h-screen'>
      {/* <Header /> */}
      <main className='flex-grow'>{children}</main>
    </div>
  );
}
