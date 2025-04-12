import AboutUs from "@/ui/components/AboutUs";
import Faqs from "@/ui/components/Faqs";
import Footer from "@/ui/components/Footer";
import HeroBanner from "@/ui/components/HeroBanner";
import OurServices from "@/ui/components/OurServices";
import WhyUs from "@/ui/components/WhyUs";

export default function Home() {
  return (
    <div className="home">
      <main>
        <HeroBanner />
        <AboutUs />
        <OurServices />
        <WhyUs />
        <Faqs />
        <Footer />
      </main>
    </div>
  );
}
