'use client';

import { motion } from 'framer-motion';

import { textContainer, textVariant2 } from '@/utils/motion';

interface TypingTextProps {
  title: string | JSX.Element;
  textStyles?: string;
}

export const TypingText = ({ title, textStyles }: TypingTextProps) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title as string).map((char, index) => {
      return (
        <motion.span
          key={index}
          variants={textVariant2}
          className='inline-block'
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      );
    })}
  </motion.p>
);

export const TitleText = ({ title, textStyles }: TypingTextProps) => (
  <motion.h2
    variants={textVariant2}
    initial='hidden'
    whileInView='show'
    className={`${textStyles} mt-[8px] font-bold md:text-[64px] text-[40px] text-white`}
  >
    {title}
  </motion.h2>
);
