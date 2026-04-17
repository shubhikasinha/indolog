import OfficesSec from '../components/home/OfficesSec';
import CtaBand from '../components/home/CtaBand';
import InnerPageHero from '../components/InnerPageHero';

export default function Offices() {
  return (
    <>
      <InnerPageHero 
        title="Our Offices" 
        subtitle="7 strategic locations across India's major commercial hubs, connecting you to 50+ countries." 
        bgImage="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&auto=format&fit=crop" 
      />
      <OfficesSec />
      <CtaBand />
    </>
  );
}
