import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const services = [
  [
    "Cleaning Services",
    "Commercial, industrial, medical, apartment, education and food processing cleaning delivered to high professional standards.",
    "#cleaning",
  ],
  [
    "Waste & Hygiene Services",
    "Waste management and washroom hygiene services that help facilities stay clean, compliant and presentable.",
    "#waste",
  ],
  [
    "Facilities Management",
    "Trade maintenance, building support, gardening and grounds maintenance for managed sites.",
    "#facilities",
  ],
  [
    "Supplies & Equipment",
    "Cleaning products, consumables and equipment supply to keep your operation running smoothly.",
    "#supplies",
  ],
];
const cleaning = [
  "Commercial Cleaning",
  "Industrial Cleaning",
  "Health & Medical",
  "Apartment & Housekeeping",
  "Childcare, School and Tertiary Cleaning",
  "Food Processing",
];
const facilities = [
  "Trade Maintenance Services",
  "Building Management",
  "Gardening And Ground Maintenance Services",
];

function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="container-page section-shell p-8 sm:p-10 lg:p-12">
        <p className="section-kicker">{kicker}</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy mt-3 mb-8">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="pb-6">
      <Header />
      <section
        id="home"
        className="pt-44 min-h-[760px] bg-[linear-gradient(120deg,#0f1d30_0%,#19314f_45%,#20aeea_100%)] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_15%_15%,white,transparent_22%),radial-gradient(circle_at_85%_8%,#8bdaf2,transparent_26%),radial-gradient(circle_at_80%_85%,white,transparent_24%)]" />
        <div className="container-page relative grid lg:grid-cols-2 gap-12 items-center py-20 sm:py-24">
          <div>
            <p className="uppercase tracking-[.35em] text-skysoft font-bold text-xs sm:text-sm">
              PPC · Pure Platinum Cleaning
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mt-5">
              Pure Clean.
              <br />
              Pure Platinum.
            </h1>
            <p className="text-lg sm:text-xl text-white/85 mt-7 max-w-2xl leading-8">
              A multi-disciplined facility management provider delivering
              commercial cleaning, waste management, hygiene solutions, trade
              services, gardening, building management and supplies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur">
                Commercial Specialists
              </span>
              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur">
                24/7 Responsive Team
              </span>
              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur">
                Victoria Coverage
              </span>
            </div>
            <div className="flex flex-wrap gap-4 mt-10">
              <a href="#contact" className="btn-primary">
                Contact Us
              </a>
              <a href="#services" className="btn-outline">
                Our Services
              </a>
            </div>
          </div>
          <div className="card bg-white/90 text-ink border-white/80 rounded-[2rem]">
            <img
              src="/pure_platinum_cleaning_logo_2.png"
              alt="Pure Platinum Cleaning"
              className="w-full max-w-md mx-auto"
            />
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <b className="text-2xl sm:text-3xl text-platinum">24/7</b>
                <p className="text-sm">Support</p>
              </div>
              <div>
                <b className="text-2xl sm:text-3xl text-platinum">PPC</b>
                <p className="text-sm">Managed</p>
              </div>
              <div>
                <b className="text-2xl sm:text-3xl text-platinum">VIC</b>
                <p className="text-sm">Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section
        id="services"
        kicker="Pure Platinum Cleaning"
        title="Our Services"
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-[2rem] overflow-hidden shadow-soft bg-slate-100 min-h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
              className="w-full h-full object-cover"
              alt="Professional cleaning"
            />
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-600">
              Pure Platinum Cleaning offers a comprehensive facility management
              solution, leveraging years of experience to deliver tailored
              services with exceptional value. Our approach centres on
              understanding client needs, staying updated with industry
              advancements, and delivering innovative, effective solutions.
            </p>
            <div className="grid sm:grid-cols-2 gap-5 mt-8">
              {services.map(([t, d, h]) => (
                <a
                  href={h}
                  key={t}
                  className="card hover:-translate-y-1 transition"
                >
                  <h3 className="font-bold text-xl text-navy">{t}</h3>
                  <p className="text-slate-600 mt-3">{d}</p>
                  <span className="text-platinum font-bold mt-4 inline-block">
                    Learn More →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section
        id="cleaning"
        kicker="Cleaning Services"
        title="Specialist cleaning for every environment"
      >
        <div className="grid md:grid-cols-3 gap-5">
          {cleaning.map((x) => (
            <div className="card" key={x}>
              <h3 className="text-xl font-bold text-navy">{x}</h3>
              <p className="mt-3 text-slate-600">
                Reliable, detailed and professionally managed cleaning programs
                tailored to your facility, operating hours and compliance needs.
              </p>
            </div>
          ))}
        </div>
      </Section>
      <section id="waste" className="py-16 sm:py-20">
        <div className="container-page section-shell p-8 sm:p-10 lg:p-12 grid md:grid-cols-2 gap-8">
          <div className="card bg-gradient-to-b from-white to-slate-50">
            <p className="section-kicker">Waste and Hygiene Services</p>
            <h2 className="text-4xl font-black text-navy mt-3">
              Waste Management
            </h2>
            <p className="text-slate-600 mt-5 leading-8">
              Structured waste services for offices, commercial premises,
              industrial locations and managed facilities.
            </p>
          </div>
          <div className="card bg-gradient-to-b from-white to-slate-50">
            <p className="section-kicker">Washroom & Site Care</p>
            <h2 className="text-4xl font-black text-navy mt-3">
              Hygiene Services
            </h2>
            <p className="text-slate-600 mt-5 leading-8">
              Hygiene programs designed to keep bathrooms, shared spaces and
              public-facing facilities clean, stocked and professional.
            </p>
          </div>
        </div>
      </section>
      <Section
        id="facilities"
        kicker="Facilities Management"
        title="Integrated facility support"
      >
        <div className="grid md:grid-cols-3 gap-5">
          {facilities.map((x) => (
            <div className="card" key={x}>
              <h3 className="text-xl font-bold text-navy">{x}</h3>
              <p className="mt-3 text-slate-600">
                Dependable support services delivered with responsive management
                and attention to presentation.
              </p>
            </div>
          ))}
        </div>
      </Section>
      <section id="supplies" className="py-16 sm:py-20">
        <div className="container-page rounded-[2rem] p-8 sm:p-10 lg:p-12 grid md:grid-cols-2 gap-8 bg-gradient-to-br from-platinum to-skysoft text-white shadow-soft">
          <div>
            <p className="uppercase tracking-[.25em] font-bold">Supplies</p>
            <h2 className="text-5xl font-black mt-3">Products and Equipment</h2>
            <p className="text-white/90 mt-6 leading-8">
              Cleaning products, consumables and equipment for commercial sites,
              managed properties and operational teams.
            </p>
          </div>
          <div className="grid gap-5">
            <div className="bg-white/20 rounded-3xl p-7 backdrop-blur border border-white/30">
              <h3 className="text-2xl font-bold">
                Cleaning Products and Supplies
              </h3>
            </div>
            <div className="bg-white/20 rounded-3xl p-7 backdrop-blur border border-white/30">
              <h3 className="text-2xl font-bold">Cleaning Equipment</h3>
            </div>
          </div>
        </div>
      </section>
      <Section
        id="about"
        kicker="About PPC"
        title="Experience, reliability and client focus"
      >
        <p className="max-w-4xl text-xl text-slate-600 leading-9">
          As a multi-disciplined service provider, PPC is known for expertise,
          reliability and commitment to exceeding client expectations. We
          deliver competitive services while maintaining high standards of
          client satisfaction.
        </p>
      </Section>
      <section id="contact" className="py-16 sm:py-20">
        <div className="container-page section-shell p-8 sm:p-10 lg:p-12 grid lg:grid-cols-2 gap-10">
          <div>
            <p className="section-kicker">Contact Us</p>
            <h2 className="text-5xl font-black text-navy mt-3">
              Talk to Pure Platinum Cleaning
            </h2>
            <p className="text-slate-600 mt-6">
              Call <b>+613 9908 3240</b> or email{" "}
              <b>clean@pureplatinumcleaning.com.au</b>.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
