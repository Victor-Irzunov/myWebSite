import CarouselComp from '@/components/CarouselComp/CarouselComp';
import MainSection1 from '@/components/mainSection/mainSection1/MainSection1';
import MainSection2 from '@/components/mainSection/mainSection1/MainSection2';



export default function Home() {
  return (
    <main className="pb-24">

      <CarouselComp main />

        <MainSection1 />

        <MainSection2 />
    </main>
  )
}
