const nav = [
  ["Home", "#home"],
  ["Cleaning Services", "#cleaning"],
  ["Waste & Hygiene", "#waste"],
  ["Facilities Management", "#facilities"],
  ["Supplies", "#supplies"],
  ["About PPC", "#about"],
  ["Contact PPC", "#contact"],
];
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="bg-navy text-white text-xs sm:text-sm">
        <div className="container-page flex justify-between py-2">
          <span>+613 9908 3240</span>
          <span>clean@pureplatinumcleaning.com.au</span>
        </div>
      </div>
      <div className="container-page flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/logo.svg"
            alt="Pure Platinum Cleaning"
            className="h-12 w-auto object-contain"
          />
        </a>
        <nav className="hidden lg:flex gap-6 items-center">
          {nav.map(([n, h]) => (
            <a key={n} href={h} className="nav-link">
              {n}
            </a>
          ))}
        </nav>
        <a
          href="tel:+61399083240"
          className="hidden sm:inline-flex btn-primary py-2 px-5"
        >
          Call us
        </a>
      </div>
    </header>
  );
}
