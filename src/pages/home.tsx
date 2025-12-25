import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Hero from "../components/hero";
import InstagramFeed from "../components/instagram-feed";
import Navbar from "../components/navbar";
import Services from "../components/services";
import TermsAndConditions from "../components/TermsAndCondition";


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <InstagramFeed />
      <Contact />
      <TermsAndConditions/>
      <Footer />
    </div>
  );
}