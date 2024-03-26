import { Box } from "@mui/material";
import LandingTitle from "../../ui/LandingTitle";
import styled from "styled-components";
import landingStep1 from "../../../assets/landingStep1.png";
import landingStep2 from "../../../assets/landingStep2.png";
import landingStep3 from "../../../assets/landingStep3.png";
import landingStep4 from "../../../assets/landingStep4.png";
import landingStep5 from "../../../assets/landingStep5.png";

export function HowDoesItWorksSection() {
  return (
    <SectionWrapper>
      <LandingTitle title="איך זה עובד" minHeight={"250px"} />
      <Box
        width={"100%"}
        display={"grid"}
        gridTemplateColumns={"2fr 1fr 2fr"}
        gridAutoRows={"minmax(300px, 500px)"}
        justifyItems={"center"}
        alignItems={"center"}
        rowGap={"1rem"}
      >
        <ExampleText />
        <StepNumberTypography>01</StepNumberTypography>
        <StepImage src={landingStep1} alt="landing step 1 image" />
        <StepImage src={landingStep2} alt="landing step 2 image" />
        <StepNumberTypography>02</StepNumberTypography>
        <ExampleText />
        <ExampleText />
        <StepNumberTypography>03</StepNumberTypography>
        <StepImage src={landingStep3} alt="landing step 3 image" />
        <StepImage src={landingStep4} alt="landing step 4 image" />
        <StepNumberTypography>04</StepNumberTypography>
        <ExampleText />
        <ExampleText />
        <StepNumberTypography>05</StepNumberTypography>
        <StepImage src={landingStep5} alt="landing step 5 image" />
      </Box>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0px 5rem;
`;

const TextTypography = styled.p`
  font: Fredoka;
  font-size: 20px;
  font-weight: 300;
  line-height: 34.4px;
  letter-spacing: 0.15em;
  text-align: right;
`;
const StepNumberTypography = styled.h4`
  font-family: Kaushan Script;
  font-size: 40px;
  font-weight: 400;
  line-height: 58.04px;
  letter-spacing: 0.08em;
`;
const StepImage = styled.img`
  max-height: -webkit-fill-available;
  width: 100%;
`;
const ExampleText = () => (
  <TextTypography>
    לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום
    סילקוף, מרגשי ומרגשח. עמחליף להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי
    מנורךגולר
  </TextTypography>
);
