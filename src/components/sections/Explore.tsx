'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

import { TitleText, TypingText } from '@/components/CustomTexts';
import ExploreCard from '@/components/ExploreCard';

import { exploreWorlds } from '@/constant';
import styles from '@/styles';
import { staggerContainer } from '@/utils/motion';

const Explore = () => {
  const [active, setActive] = React.useState<string>('world-2');

  return (
    <section className={`${styles.paddings}`} id='explore'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title='| The World' textStyles='text-center' />
        <TitleText
          title={
            <>
              Choose the world you want <br className='md:block hidden' /> to
              explore
            </>
          }
          textStyles='text-center'
        />
        <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={index}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;