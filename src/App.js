import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
import NavbarWithCTAButton from "./components/navbar";
import HorizontalCard from "./components/aboutme";
import DefaultTimeline from "./components/timline";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as per your requirements
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-start min-h-screen bg-primary pb-20">
        <div className="w-3/4 mt-6">
          <NavbarWithCTAButton></NavbarWithCTAButton>
        </div>

        <div
          className="relative w-full h-full items-center justify-center"
          style={{
            marginTop: "calc(100vh * 0.1)",
            width: isMobile ? "100%" : "100%",
            height: isMobile ? "auto" : "calc(100vh - (100vh * 0.1))",
          }}
        >
          <Spline scene="https://prod.spline.design/zkXRDXVktXSaQLT4/scene.splinecode" />
        </div>

        <div className="max-w-screen-lg mx-auto mt-8">
          <HorizontalCard />
        </div>

        {/* <div>
          <DefaultTimeline />
        </div> */}
      </div>
    </div>
  );
}

export default App;
