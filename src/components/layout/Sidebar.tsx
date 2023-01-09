import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logo from '@/assets/logo.png';
import { categories } from '@/utils/data';

const isNotActiveStyle =
  'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
const isActiveStyle =
  'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize';

type Props = {
  user: {
    _id: string;
    name: string;
    image: string;
  };
  isActive: string;
};

const Sidebar = ({ user, isActive }: Props) => {
  return (
    <div className='flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar'>
      <div className='flex flex-col'>
        <Link href='/' className='flex px-5 gap-2 my-6 pt-1 w-190 items-center'>
          <Image src={logo} alt='logo' className='w-full' />
        </Link>
        <div className='flex flex-col gap-5'>
          <Link
            href='/'
            className='flex px-5 gap-2 my-6 pt-1 w-190 items-center'
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
                d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
              />
            </svg>
            <span className='text-sm font-medium'>Home</span>
          </Link>
          <h3 className='mt-2 px-5 text-base 2xl:text-xl'>
            Discover cateogries
          </h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <Link
              href={`/category/${category.name}`}
              className={
                isNotActiveStyle + ' ' + (isActive ? isActiveStyle : '')
              }
              key={category.name}
            >
              <Image
                src={category.image}
                width={8}
                height={8}
                className=' w-8 h-8 rounded-full shadow-sm'
                alt='cat'
              />
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      {user && (
        <Link
          href={`user-profile/${user?._id}`}
          className='flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3'
        >
          <Image
            src={user?.image}
            width={10}
            height={10}
            className='w-10 h-10 rounded-full'
            alt='user-profile'
          />
          <p>{user.name}</p>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
