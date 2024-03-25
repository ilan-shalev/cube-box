import { Box, Input } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import arrowDown from "../../assets/arrowDown.svg";
import search from "../../assets/search.svg";

type PropertySize = "S" | "M" | "L" | "XL";
type SearchResult = { size: PropertySize; budget: number };
type MainSearchProps = {
  onSearched: (result: SearchResult) => void;
};

export const MainSearch = (props: MainSearchProps) => {
  const [propertySize, setPropertySize] = useState<PropertySize>("M");
  const [budget, setBudget] = useState<number>(2_500_000);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "30px",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <SearchInput>
        <span>גודל</span>
        {/* <span className="Input">{propertySize}</span>
        <img className="Input" src={arrowDown} alt="arrow down" />
        <div></div> */}
        <SelectPropertySize
          propertySize={propertySize}
          onSelected={setPropertySize}
        />
        <Box sx={{ borderLeft: "1.49px solid white", height: "100%" }} />
        <SelectBudget budget={budget} onSelected={setBudget} />
      </SearchInput>
      <SearchButton >
        <img style={{maxWidth:"100%", maxHeight:"100%"}} src={search} alt="search" onClick={() => console.log({
            propertySize, budget
        })} />
      </SearchButton>
    </Box>
  );
};

const SearchInput = styled(Box)`
  .Input {
    color: #616161;
    background-color: transparent;
    appearance: none;
    border: none;
  }
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1.49px solid #ffffff;
  border-end-start-radius: 50px;
  border-start-start-radius: 50px;
  padding: 0px 60px;
  height: 96px;
  width: 75%;
  box-shadow: 0px 3.9751033782958984px 3.9751033782958984px 0px #00000040;

  font-size: 39.75px;
  font-weight: 300;
  line-height: 56.45px;
  letter-spacing: 0.12em;
  text-align: right;
  color: #ffffff;
`;

const SearchButton = styled(Box)`
  border: 1.49px solid #ffffff;
  border-start-end-radius: 50px;
  border-end-end-radius: 50px;
  padding: 0px 30px;
  height: 96px;
  width: 75%;
  box-shadow: 0px 3.9751033782958984px 3.9751033782958984px 0px #00000040;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover{
    cursor: pointer;
    scale: 1.1;
  }
`;

const SelectPropertySize = (props: {
  propertySize: PropertySize;
  onSelected: (PropertySize: PropertySize) => void;
}) => {
  const [open, setOpen] = useState(false);
  const Wrapper = styled.div`
    position: relative;
    display: flex;
    gap: 20px;
  `;
  return (
    <Wrapper>
      <Box
        onClick={() => setOpen((prev) => !prev)}
        display={"flex"}
        gap={"20px"}
        className="Input"
        sx={{
          ":hover": {
            cursor: "pointer",
            transform: "scale(1.1)",
          },
        }}
      >
        <span>{props.propertySize}</span>
        <img src={arrowDown} alt="arrow down" />
      </Box>
      <div
        style={{
          position: "absolute",
          top: "150%",
          left: "0",
          width: "200%",
          display: open ? "block" : "none",
        }}
      >
        {["S", "M", "L", "XL"]
          .filter((x) => x != props.propertySize)
          .map((size) => (
            <Box border={"2px solid white"}>
              <Box
                onClick={() => {
                  setOpen(false);
                  props.onSelected(size as PropertySize);
                }}
                component={"div"}
                className="Input"
                sx={{
                  paddingInlineStart: "20px",
                  ":hover": {
                    cursor: "pointer",
                    transform: "scale(1.1)",
                  },
                }}
              >
                {size}
              </Box>
            </Box>
          ))}
      </div>
    </Wrapper>
  );
};

const SelectBudget = (props: {
  budget: number;
  onSelected: (budget: number) => void;
}) => {
  return (
    <>
      <span>תקציב</span>
      <input
        style={{
          lineHeight: "62px",        
          fontSize: "39.75px",
          fontWeight: "300",
          lineHeightStep: "56.45px",
          letterSpacing: "0.12em",
          outline: "none",
        }}
        className="Input"
        value={props.budget}
        onChange={(e) =>
          props.onSelected(
            isNaN(Number(e.target.value)) ? 0 : Number(e.target.value)
          )
        }
      />
    </>
  );
};
