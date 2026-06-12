import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import About         from "@/components/About";
import Services      from "@/components/Services";
import HaircutStyles from "@/components/HaircutStyles";
import Process       from "@/components/Process";
import WhyUs         from "@/components/WhyUs";
import Team          from "@/components/Team";
import Testimonials  from "@/components/Testimonials";
import Gallery       from "@/components/Gallery";
import CTABanner     from "@/components/CTABanner";
import FAQ           from "@/components/FAQ";
import Booking       from "@/components/Booking";
import Footer        from "@/components/Footer";
import AosInit       from "@/components/AosInit";
import Loader        from "@/components/Loader";

export default function Home() {
  return (
    <>
      <Loader />
      <AosInit />
      <a href="#main" className="skip-to-main">Aller au contenu principal</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <HaircutStyles />
        <Process />
        <WhyUs />
        <Team />
        <Gallery />
        <Testimonials />
        <CTABanner />
        <FAQ />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
