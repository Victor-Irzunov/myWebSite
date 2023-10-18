import CarouselComp from '@/components/CarouselComp/CarouselComp';
import dynamic from 'next/dynamic';
// import LazyLoad from 'react-lazy-load';

const MainSection1 = dynamic(() => import('@/components/mainSection/mainSection1/MainSection1'));
const MainSection2 = dynamic(() => import('@/components/mainSection/mainSection1/MainSection2'));

export default function Home() {
  return (
    <main className="pb-24 overflow-x-hidden">
      <CarouselComp main />
      <div className='h-[9vh]' />
      <MainSection1 />


      <MainSection2 />

    </main>
  );
}

