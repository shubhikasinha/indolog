import InnerPageHero from '../components/InnerPageHero';

export default function About() {
  return (
    <>
      <InnerPageHero 
        title="Our Story" 
        subtitle="From a single office in New Delhi to a global logistics powerhouse." 
        bgImage="https://images.unsplash.com/photo-1590496794008-383c2cdcd75c?q=80&auto=format&fit=crop" 
      />
      <div className="bg-white min-h-screen pb-16">
        <section className="py-24 px-6 md:px-12 max-w-[900px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 mb-16 items-center">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-gold font-semibold mb-3.5">
              <span className="w-7 h-[2px] bg-gold block"></span>
              WHO WE ARE
            </div>
            <h2 className="font-lora text-[clamp(2rem,3vw,2.8rem)] tracking-tight text-text leading-tight mb-6">
              About <em className="italic text-navy font-medium">Indolog Logistics</em>
            </h2>
            <p className="text-[15px] text-text-soft font-light leading-[1.85] mb-4">
              Indolog Logistics Pvt Ltd was incorporated in 2012 under the Companies Act, 1956. Since then, we have tailored logistics to meet unique business needs across India and beyond. From a single office in New Delhi, we have grown to 7 offices across India's major commercial cities, serving clients in 50+ countries.
            </p>
          </div>
          <div className="md:w-1/2 relative min-h-[400px] w-full">
            <img src="https://images.unsplash.com/photo-1586528116311-ad8ae7c8c4a4?q=80&w=2070&auto=format&fit=crop" alt="Indolog Team and Logistics" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]" />
            <div className="absolute inset-0 bg-navy/10" />
            <div className="absolute bottom-4 -left-6 bg-white p-6 shadow-xl hidden md:block">
               <div className="text-4xl font-lora text-gold mb-1">10+</div>
               <div className="text-[10px] tracking-[0.1em] text-navy font-bold uppercase">Years of Excellence</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border pt-12 mb-16">
          <div>
            <h3 className="font-lora text-[1.4rem] text-navy mb-4 font-medium">Vision Statement</h3>
            <p className="text-[14px] text-text-soft font-light leading-[1.85]">
              To be India's most trusted logistics partner — setting the standard for excellence, driving innovation at the heart of everything we do, delivering every package with unwavering reliability, and putting customers first by tailoring services to their exact needs.
            </p>
          </div>
          <div>
            <h3 className="font-lora text-[1.4rem] text-navy mb-4 font-medium">Mission Statement</h3>
            <p className="text-[14px] text-text-soft font-light leading-[1.85]">
              To provide fast, efficient logistics powered by cutting-edge technology. To offer seamless door-to-door delivery with smart solutions. To rely on a skilled, passionate team dedicated to operational excellence. To use strategic infrastructure to guarantee smooth, timely deliveries every time.
            </p>
          </div>
        </div>

        <div className="mb-16 border-t border-border pt-12">
           <h3 className="font-lora text-[1.8rem] text-text mb-8 tracking-tight">Core <em className="text-navy italic font-medium">Values</em></h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border border border-border">
             <div className="bg-white p-8 hover:bg-slate transition-colors">
               <h4 className="font-bold text-navy mb-2 tracking-[0.05em] text-[15px]">1. Reliability</h4>
               <p className="text-[13px] text-text-mid font-light leading-[1.6]">We consistently keep our promises, building unwavering trust in every logistics service we provide.</p>
             </div>
             <div className="bg-white p-8 hover:bg-slate transition-colors">
               <h4 className="font-bold text-navy mb-2 tracking-[0.05em] text-[15px]">2. Innovation</h4>
               <p className="text-[13px] text-text-mid font-light leading-[1.6]">We harness cutting-edge technology to streamline operations and boost service speed and quality.</p>
             </div>
             <div className="bg-white p-8 hover:bg-slate transition-colors">
               <h4 className="font-bold text-navy mb-2 tracking-[0.05em] text-[15px]">3. Customer Commitment</h4>
               <p className="text-[13px] text-text-mid font-light leading-[1.6]">Our service is personalised to your unique needs, creating strong, lasting partnerships through quick response and genuine care.</p>
             </div>
             <div className="bg-white p-8 hover:bg-slate transition-colors">
               <h4 className="font-bold text-navy mb-2 tracking-[0.05em] text-[15px]">4. Accountability</h4>
               <p className="text-[13px] text-text-mid font-light leading-[1.6]">We fully own our results, ensuring top-quality outcomes and swift resolution of any challenges.</p>
             </div>
             <div className="bg-white p-8 hover:bg-slate transition-colors">
               <h4 className="font-bold text-navy mb-2 tracking-[0.05em] text-[15px]">5. Collaboration</h4>
               <p className="text-[13px] text-text-mid font-light leading-[1.6]">We believe in teamwork and shared success, working closely with clients, partners and our team to achieve outstanding results.</p>
             </div>
           </div>
        </div>

        <div className="border-t border-border pt-12">
            <h3 className="font-lora text-[1.8rem] text-text mb-8 tracking-tight font-medium">Milestones</h3>
            <div className="flex flex-col gap-5 max-w-[600px] text-[14px]">
              <div className="flex gap-4">
                <div className="font-bold tracking-[0.1em] text-navy w-16 shrink-0 pt-0.5">2012</div>
                <div className="text-text-soft font-light leading-relaxed">Indolog Logistics Pvt Ltd incorporated in New Delhi</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold tracking-[0.1em] text-navy w-16 shrink-0 pt-0.5">2015</div>
                <div className="text-text-soft font-light leading-relaxed">Mobile app launched for shipment tracking</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold tracking-[0.1em] text-navy w-16 shrink-0 pt-0.5">2018</div>
                <div className="text-text-soft font-light leading-relaxed">Import Console service launched, operating Milan and Frankfurt to India</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold tracking-[0.1em] text-navy w-16 shrink-0 pt-0.5">2019</div>
                <div className="text-text-soft font-light leading-relaxed">Reached 10 weekly PMC shipments from Europe</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold tracking-[0.1em] text-navy w-16 shrink-0 pt-0.5">2021</div>
                <div className="text-text-soft font-light leading-relaxed">Consolidation team recognised for excellence in complex air freight</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold tracking-[0.1em] text-navy w-16 shrink-0 pt-0.5">2023</div>
                <div className="text-text-soft font-light leading-relaxed">Supply chain optimisation and new service models launched</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold tracking-[0.1em] text-navy w-16 shrink-0 pt-0.5">2024</div>
                <div className="text-text-soft font-light leading-relaxed">7 offices across India, 50+ countries served</div>
              </div>
            </div>
        </div>
      </section>
      </div>
    </>
  );
}
