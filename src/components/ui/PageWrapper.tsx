import styled from "styled-components";
import { Container } from "@mui/material";

export const PageWrapper = styled(Container).attrs({
  fixed: true,
  disableGutters: true,
})`
  min-height: 100vh;
  min-width:100vw;
  max-width:100vw;
  overflow: hidden;
  overflow-wrap: "break-word";
  overflow-y: scroll;
`;
