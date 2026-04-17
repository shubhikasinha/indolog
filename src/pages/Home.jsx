import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import HomeTeasers from '../components/home/HomeTeasers';
import QcPlatform from '../components/home/QcPlatform';
import WhyUs from '../components/home/WhyUs';
import OfficesSec from '../components/home/OfficesSec';
import CtaBand from '../components/home/CtaBand';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <HomeTeasers />
      <QcPlatform />
      <WhyUs />
      <OfficesSec />
      <CtaBand />
    </>
  );
}
