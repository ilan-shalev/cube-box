import styled from "styled-components";
import Navbar from "../../features/Navbar";
import { Box } from "@mui/material";
import funAndSimple from "../../../assets/funAndSimple.svg";
import cubeBoxShape from "../../../assets/cubeBoxShape.png";
import { MainSearch } from "../../ui";

export function MainSection() {
  return (
    <Wrapper>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flex: 1,
          width: "80%",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          gap:"5rem"
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          gap={"30px"}
          alignSelf={"center"}
          flex={1}
        >
          <Box>
            <img
              width={"100%"}
              height={"100%"}
              src={funAndSimple}
              alt="fun and simple real estate"
            />
          </Box>
          <MainSearch onSearched={console.log} />
        </Box>
        <Box flex={0.3} alignSelf={"stretch"}>
          <img
            style={{ objectFit: "cover" }}
            width={"100%"}
            height={"100%"}
            src={cubeBoxShape}
            alt="cube box shape"
          />
        </Box>
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
