import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const TryItOutSection = () => {
  return (
    <Wrapper>
      <TitleTypography component={"h1"}>צרו חוויה משלכם</TitleTypography>
      <TextTypograpy>
        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדוםלורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום 
      </TextTypograpy>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 10rem;
  align-items: center;
  height: 100vh;

`;

const TitleTypography = styled(Box)`
  font-family: Fredoka;
  font-size: 50px;
  font-weight: 400;
  line-height: 71px;
  letter-spacing: 0.12em;
`;

const TextTypograpy = styled(Box)`
  font-family: Fredoka;
  font-size: 30px;
  font-weight: 400;
  line-height: 51.6px;
  letter-spacing: 0.15em;
`;
