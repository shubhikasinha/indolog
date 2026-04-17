const cards = [
  {
    num: '01',
    title: 'Global Partner Network',
    desc: 'Extensive network of overseas agents including WWPC World, 5Star Network, WTC Alliance, Innovative Freight Network and JCTrans (Authorised Channel Partner) — ensuring point-to-point shipping convenience globally.'
  },
  {
    num: '02',
    title: 'Industry-Specialised Teams',
    desc: 'Deep expertise in RMG, pharma, auto and marble. Our QC teams, packers and logisticians are trained to the exact standards of major global fashion and manufacturing brands.'
  },
  {
    num: '03',
    title: 'Zero Factory Influence QC',
    desc: 'Our inspection platform is completely independent. No contact between inspectors and suppliers. No pressure, no bribery risk. Clients consistently save 20-25% on returns and rework.'
  },
  {
    num: '04',
    title: 'Technology-Driven Visibility',
    desc: 'Real-time shipment tracking via our digital portal. Live webcam access to QC inspections. Digital documentation and milestone alerts keep you in control at every step.'
  },
  {
    num: '05',
    title: 'Door-to-Door Excellence',
    desc: 'Full FCL and LCL solutions with competitive rates. From factory floor to consignee doorstep — across air, sea and road — under a single contract with one point of contact.'
  },
  {
    num: '06',
    title: 'IATA · FIATA · AMTOI · MTO',
    desc: 'Certified and accredited by leading international logistics bodies. Compliant with the highest global standards for freight forwarding, multimodal transport and quality assurance.'
  }
];

export default function WhyUs() {
  return (
    <section id="why" className="py-24 bg-white px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-navy font-semibold mb-3.5 mx-auto">
            <span className="w-7 h-[2px] bg-gold block"></span>
            WHY CHOOSE INDOLOG
            <span className="w-7 h-[2px] bg-gold block"></span>
          </div>
          <h2 className="font-lora text-[clamp(2rem,3vw,2.8rem)] tracking-tight text-text leading-tight mx-auto">
            Built on <em className="italic text-navy">Reliability</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5px] bg-border mt-12">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white p-10 transition-colors hover:bg-slate group">
              <div className="font-outfit font-mono text-[11px] font-bold text-gold tracking-[0.15em] mb-4">
                {card.num}
              </div>
              <h3 className="font-outfit font-semibold text-[1.05rem] text-navy mb-2 relative">
                {card.title}
              </h3>
              <p className="text-[13px] text-text-soft leading-[1.8] font-light">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
