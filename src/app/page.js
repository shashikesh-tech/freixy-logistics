import HeroBanner from "@/ui/components/HeroBanner";
import OurServices from "@/ui/components/OurServices";

export default function Home() {
  return (
    <div className="home">
      <main>
        <HeroBanner />
        <OurServices />
      </main>
    </div>
  );
}
