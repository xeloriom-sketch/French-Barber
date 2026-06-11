import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import Marquee      from "@/components/Marquee";
import About        from "@/components/About";
import Services     from "@/components/Services";
import Gallery      from "@/components/Gallery";
import Team         from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Booking      from "@/components/Booking";
import Footer       from "@/components/Footer";
import AosInit      from "@/components/AosInit";

const Divider = () => (
  <div style={{ height: "1px", background: "linear-gradient(90deg,transparent,rgba(207,145,82,.35),transparent)", margin: "0 1.5rem" }} />
);

export default function Home() {
  return (
    <>
      <AosInit />
      <a href="#main" className="skip-to-main">Aller au contenu principal</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Divider />
        <Services />
        <Divider />
        <Gallery />
        <Divider />
        <Team />
        <Divider />
        <Testimonials />
        <Divider />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
