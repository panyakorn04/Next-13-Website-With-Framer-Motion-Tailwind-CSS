import * as React from 'react';

import { Footer, Navbar } from '@/components';
import Layout from '@/components/layout/Layout';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from '@/components/sections';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <div className='bg-primary-black overflow-hidden'>
        <Navbar />
        <Hero />
        <div className='relative'>
          <About />
          <div className='gradient-03 z-0' />
          <Explore />
        </div>
        <div className='relative'>
          <GetStarted />
          <div className='gradient-04 z-0' />
          <WhatsNew />
        </div>
        <World />
        <div className='relative'>
          <Insights />
          <div className='gradient-04 z-0' />
          <Feedback />
        </div>
        <Footer />
      </div>
    </Layout>
  );
}
