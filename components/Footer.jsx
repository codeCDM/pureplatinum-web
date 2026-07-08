export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_15%_15%,#20aeea,transparent_35%),radial-gradient(circle_at_90%_85%,#8bdaf2,transparent_30%)]" />
      <div className="container-page relative py-16 grid md:grid-cols-3 gap-10">
        <div>
          <img
            src="/pure_platinum_cleaning_logo_2.png"
            className="h-20 w-auto mb-5"
            alt="PPC"
          />
          <p className="text-white/75 leading-7">
            Pure Platinum Cleaning offers comprehensive facility management
            solutions with reliable cleaning, hygiene, waste and maintenance
            services.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <p>+613 9908 3240</p>
          <p>clean@pureplatinumcleaning.com.au</p>
          <p className="mt-4">
            Suite 105 / 75 Tulip Street,
            <br />
            Cheltenham. Vic. 3192
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Hours</h3>
          <p>Monday to Sunday</p>
          <p className="text-platinum font-bold text-2xl mt-1">24/7 Support</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5 text-center text-sm text-white/60">
        Copyright - Pure Platinum Cleaning 2020-2024. All rights reserved.
      </div>
    </footer>
  );
}
