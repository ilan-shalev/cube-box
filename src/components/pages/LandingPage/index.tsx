import React from "react";
import { MainSection } from "./MainSection";
import { AboutUsSection } from "./AboutUsSection";
import { HowDoesItWorksSection } from "./HowDoesItWorksSection";
import { PageWrapper } from "../../ui";
import ReactPlayer from "react-player";
export default function LandingPage() {
  return (
    <PageWrapper>
      <MainSection />
      <AboutUsSection />
      <HowDoesItWorksSection />
      <ReactPlayer
        controls
        width={"100vw"}
        height={"100vh"}
        url={"https://www.youtube.com/watch?v=K4TOrB7at0Y"}
      />
    </PageWrapper>
  );
}
