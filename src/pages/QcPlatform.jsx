import QcPlatformComponent from '../components/home/QcPlatform';
import CtaBand from '../components/home/CtaBand';
import InnerPageHero from '../components/InnerPageHero';

export default function QcPlatform() {
  return (
    <>
      <InnerPageHero 
        title="Quality Inspection Platform" 
        subtitle="India's most advanced pre-shipment inspection facility with zero factory influence." 
        bgImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&auto=format&fit=crop" 
      />
      <QcPlatformComponent />
      <CtaBand />
    </>
  );
}
