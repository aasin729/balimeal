import Main from "./components/Main";
import Features from "./components/Features";
import Services from "./components/Services";
import Applications from "./components/Applications";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Main />
      <Features />
      <Services />
      <Applications />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
