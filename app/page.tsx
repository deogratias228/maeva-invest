import Confidence from "@/components/Confidence";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Steps from "@/components/Steps";
import StarsBackground from "@/components/StarsBackground";
import Testimonials from "@/components/Testimonials";
import TopBar from "@/components/TopBar";

export default function Home() {

  return (
    <div className="font-sans min-h-screen">
      <StarsBackground /> {/* ← fond étoilé partout */}
      <TopBar />
      <Header />
      <div className="px-2 md:px-32">
        <div className="px-0 md:px-8">
          <Steps />
          <Confidence />
          <Testimonials />
          <Cta />
          <Faq />
          <Footer />
        </div>
      </div>
    </div>
  );
}
