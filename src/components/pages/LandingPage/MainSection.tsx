import styled from "styled-components";
import Navbar from "../../features/Navbar";
import { Box } from "@mui/material";
import funAndSimple from "../../../assets/funAndSimple.svg";
import { MainSearch } from "../../ui";

export function MainSection() {
  return (
    <Wrapper>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flex: 0.8,
          width: "80%",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap:"nowrap"
        }}
      >
        <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} gap={"30px"} alignSelf={"center"}>
          <Box>
            <img
              width={"100%"}
              height={"100%"}
              src={funAndSimple}
              alt="fun and simple real estate"
            />
          </Box>
          <MainSearch  onSearched={() => {}}/>
        </Box>
        {/* <Box width={"21.7%"} height={"100%"}>
          <img
            src={cubeBoxShapeOuter}
            alt="cube box shape"
            style={{ top: "0", left: "0" }}
          />
          <img
            src={cubeBoxShapeInner}
            style={{ top: "50%", left: "50%" }}
            alt="cube box shape"
          />
        </Box> */}
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  background: linear-gradient(
    103.84deg,
    #0bdbe9 2.62%,
    #4abed8 29.24%,
    #51d7f0 60.13%,
    #33c8d1 97.68%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: calc(100vh - 2 * 30px);
  padding: 50px 20px 0px 20px;
`;
