import { Box, BoxProps } from "@mui/material";
import React from "react";
import styled from "styled-components";
import obyStyle from "../../assets/obyStyle.png";

type LandingTitleProps = {title:string} & BoxProps;
export default function LandingTitle(props: LandingTitleProps) {
  return (
    <Box {...props} display="flex" gap="1rem" alignItems={"center"}>
      <TitleTypography>{props.title}</TitleTypography>
      <img width={"40px"} src={obyStyle} alt="oby" />
    </Box>
  );
}

const TitleTypography = styled.span`
  font: Fredoka;
  font-size: 40px;
  font-weight: 300;
  line-height: 48.4px;
  letter-spacing: 0.08em;
  text-align: right;
`;
