import ServicesSec from '../components/home/ServicesSec';
import CtaBand from '../components/home/CtaBand';
import InnerPageHero from '../components/InnerPageHero';

export default function Services() {
  return (
    <>
      <InnerPageHero 
        title="Global Logistics Solutions" 
        subtitle="Comprehensive freight forwarding across sea, air, and road — designed for precision and speed." 
        bgImage="https://images.unsplash.com/photo-1586528116311-ad8ae7c8c4a4?q=80&auto=format&fit=crop" 
      />
      <ServicesSec />
      <CtaBand />
    </>
  );
}
