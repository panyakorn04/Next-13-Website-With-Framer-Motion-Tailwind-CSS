import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

// const links = [
//   { href: '/', label: 'Route 1' },
//   { href: '/', label: 'Route 2' },
// ];

export default function Header() {
  return (
    <header className='flex gap-2 md:gap-5 w-full mt-5 pb-7'>
      <div className='flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
        <input
          type='text'
          placeholder='Search'
          className='p-2 w-full bg-white outline-none'
        />
      </div>
      <div className='flex gap-3 '>
        <Link href='user-profile/' className='hidden md:block'>
          <Image src='' alt='user-pic' className='w-14 h-12 rounded-lg ' />
        </Link>
        <Link
          href='/create-pin'
          className='bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M12 4.5v15m7.5-7.5h-15'
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}
