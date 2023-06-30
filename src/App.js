import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
import NavbarWithCTAButton from "./components/navbar";
import AboutCode from "./components/aboutcode";
import GithubCard from "./components/githubcard";
import AnimatedCursor from "react-animated-cursor";
import Footer from "./components/footnew";
import DefaultTimeline from "./components/timeline";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  return (
    <div>
      <div className="App">
        <AnimatedCursor />
      </div>

      <div
        id="homee"
        className="flex flex-col items-center justify-start min-h-screen bg-primary pb-20"
      >
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

        <div id="aboutt">
          <div
            className="min-w-screen min-h-screen items-center justify-center mt-52"
            data-aos="flip-down"
          >
            <AboutCode />
          </div>
        </div>

        <h1
          class="text-3xl text-white font-semibold pb-4"
          id="timelinee"
          data-aos="fade-down"
        >
          Experience
        </h1>
        <div className="m-20" data-aos="fade-down">
          <DefaultTimeline />
        </div>

        <h1
          class="text-3xl text-white font-semibold pb-5 pt-20"
          id="projectss"
          data-aos="flip-down"
        >
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-7">
          <div className={isMobile ? "w-full" : ""} data-aos="flip-down">
            <GithubCard
              title="Shorto: URL Shortener"
              imageUrl="https://lh3.googleusercontent.com/1PPLFL4RkCAIYIOLH33y5sXCaDFb2maG0mwhazeDNCYZ3N18ZVWZU7o6Gg5D6-V1sEE7jsdCuibfXOn7h7wqfCuoPw=w640-h400-e365-rj-sc0x00ffffff"
              htmlText="HTML"
              cssText="CSS"
              jsText="JS"
              githubLink="https://github.com/vinyashegde/shorto_url_shorter"
            />
          </div>
          <div className={isMobile ? "w-full" : ""} data-aos="flip-down">
            <GithubCard
              title="Interlace CSS Library"
              imageUrl="https://raw.githubusercontent.com/vinyashegde/dump/main/Untitled%20design.png"
              htmlText=""
              cssText="CSS"
              jsText=""
              githubLink="https://github.com/vinyashegde/interlace.css"
            />
          </div>
          <div className={isMobile ? "w-full" : ""} data-aos="flip-down">
            <GithubCard
              title="Project Floramis"
              imageUrl="https://raw.githubusercontent.com/vinyashegde/dump/main/Untitled%20design%20(1).png"
              htmlText="C#"
              cssText="Unity"
              jsText="REST API"
              githubLink="https://github.com/vinyashegde/Project-Floramis/blob/main/INTRODUCTION.md"
            />
          </div>
          <div>
            <div className={isMobile ? "w-full" : ""} data-aos="flip-down">
              <GithubCard
                title="The Food Bridge"
                imageUrl="https://raw.githubusercontent.com/vinyashegde/dump/main/Untitled%20design%20(2).png"
                htmlText="HTML"
                cssText="CSS"
                jsText="Firebase"
                githubLink="https://github.com/vinyashegde/foodbridge-firebase"
              />
            </div>
          </div>
          <div>
            <div className={isMobile ? "w-full" : ""} data-aos="flip-down">
              <GithubCard
                title="Roll the Rooms"
                imageUrl="https://img.itch.zone/aW1hZ2UvMTYyMzcyOS85NTE2NzY3LnBuZw==/original/ySbybu.png"
                htmlText="Unity"
                cssText="C#"
                jsText=""
                githubLink="https://github.com/vinyashegde/Rolll-the-Dice-Gamejam"
              />
            </div>
          </div>
          <div>
            <div className={isMobile ? "w-full" : ""} data-aos="flip-down">
              <GithubCard
                title="Roll the Rooms"
                imageUrl="https://raw.githubusercontent.com/vinyashegde/dump/main/github.PNG"
                htmlText="Unity"
                cssText="C#"
                jsText=""
                githubLink="https://github.com/vinyashegde/github-fetch-without-token"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="contactuss">
        <Footer />
      </div>
    </div>
  );
}

export default App;
