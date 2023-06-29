import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
import NavbarWithCTAButton from "./components/navbar";
import AboutCode from "./components/aboutcode";
import GithubCard from "./components/githubcard";
import AnimatedCursor from "react-animated-cursor";
import FootCode from "./components/foot";

function ResizeHandler({ setIsMobile }) {
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as per your requirements
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMobile]);

  return null;
}

function App() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div>
      <div className="App">
        <AnimatedCursor />
      </div>

      <div className="flex flex-col items-center justify-start min-h-screen bg-primary pb-20">
        <div className="w-11/12 mt-4">
          <NavbarWithCTAButton></NavbarWithCTAButton>
        </div>

        <ResizeHandler setIsMobile={setIsMobile} />

        <div
          className="relative w-full h-full items-center justify-center"
          style={{
            marginTop: "calc(100vh * 0.1)",
            width: isMobile ? "100%" : "100%",
            height: isMobile ? "auto" : "calc(100vh - (100vh * 0.1))",
          }}
        >
          <Spline scene="https://draft.spline.design/qsvYhuKccbhtisLS/scene.splinecode" />
        </div>

        <div className="min-w-screen min-h-screen flex items-center justify-center m-4">
          <AboutCode />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-7">
          <div className={isMobile ? "w-full" : ""}>
            <GithubCard
              title="Project Title"
              description="This is a description of the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque scelerisque sagittis."
              htmlText="HTML"
              cssText="CSS"
              jsText="JS"
            />
          </div>
          <div className={isMobile ? "w-full" : ""}>
            <GithubCard />
          </div>
          <div className={isMobile ? "w-full" : ""}>
            <GithubCard />
          </div>
          <div>
            <div className={isMobile ? "w-full" : ""}>
              <GithubCard />
            </div>
          </div>
          <div>
            <div className={isMobile ? "w-full" : ""}>
              <GithubCard />
            </div>
          </div>
          <div>
            <div className={isMobile ? "w-full" : ""}>
              <GithubCard />
            </div>
          </div>
        </div>
      </div>
      {/* <FootCode /> */}
    </div>
  );
}

export default App;
