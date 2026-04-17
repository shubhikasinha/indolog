import IndustriesSec from '../components/home/IndustriesSec';
import CtaBand from '../components/home/CtaBand';
import InnerPageHero from '../components/InnerPageHero';

export default function Industries() {
  return (
    <>
      <InnerPageHero 
        title="Tailored by Industry" 
        subtitle="Specialised supply chain solutions for fashion, electronics, pharma, and automotive sectors." 
        bgImage="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&auto=format&fit=crop" 
      />
      <IndustriesSec />
      <CtaBand />
    </>
  );
}
