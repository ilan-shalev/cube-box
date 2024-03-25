import React from "react";
import { MainSection } from "./MainSection";
import { AboutUsSection } from "./AboutUsSection";
import { HowDoesItWorksSection } from "./HowDoesItWorksSection";
import { PageWrapper } from "../../ui";

export default function LandingPage() {
  return (
    <PageWrapper>
      <MainSection />
      <AboutUsSection />
      <HowDoesItWorksSection />
    </PageWrapper>
  );
}
