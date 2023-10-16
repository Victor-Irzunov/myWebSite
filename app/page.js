"use client"
import CarouselComp from '@/components/CarouselComp/CarouselComp';
import dynamic from 'next/dynamic';
import LazyLoad from 'react-lazy-load';

const MainSection1 = dynamic(() => import('@/components/mainSection/mainSection1/MainSection1'));
const MainSection2 = dynamic(() => import('@/components/mainSection/mainSection1/MainSection2'));

export default function Home() {
  return (
    <main className="pb-24">
      <CarouselComp main />
      <div className='h-[13vh]' />
      <LazyLoad offset={0}>
        <MainSection1 />
      </LazyLoad>
      <LazyLoad offset={0}>
        <MainSection2 />
      </LazyLoad>
    </main>
  );
}

