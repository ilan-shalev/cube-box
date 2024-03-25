import { Input, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import styled from "styled-components";

type PropertySize = "S" | "M" | "L" | "XL";
type SearchResult = { size: PropertySize; budget: number };
type MainSearchProps = {
  onSearched: (result: SearchResult) => void;
};

export const MainSearch = (props: MainSearchProps) => {
  const [propertySize, setPropertySize] = useState<PropertySize>("M");
  const [budget, setBudget] = useState<number>(2_500_000);

  return (
    <div>
      <SelectLabel
        value={propertySize}
        defaultValue={"M"}
        onChange={(e) => setPropertySize(e.target.value as PropertySize)}
        style={{
          height: "64.5px",
          borderColor: "#f1f1f1",
          borderStartStartRadius: "50px",
          borderEndStartRadius: "50px",
          width: "200px",
          textAlign: "center",
        }}
      >
        <SelectOption value={"S"}>גודל S</SelectOption>
        <SelectOption value={"M"}>
          גודל <span>M</span>
        </SelectOption>
        <SelectOption value={"L"}>גודל L</SelectOption>
        <SelectOption value={"XL"}>גודל XL</SelectOption>
      </SelectLabel>
      <SearchInput       

        value={isNaN(budget) ? 0 : budget}
        onChange={(e) => setBudget(Number(e.target.value))}
      />
    </div>
  );
};

const SelectLabel = styled.select`
  font-family: "fredoka";
  font-size: 40px;
  font-weight: 300;
  line-height: 56.8px;
  letter-spacing: 0.12em;
`;
const SelectOption = styled.option`
  font-family: "fredoka";
  font-size: 20px;
  font-weight: 200;
  line-height: 26.8px;
  letter-spacing: 0.12em;
`;
const SearchInput = styled(TextField)`
  font-family: "fredoka";
  font-size: 40px;
  font-weight: 300;
  line-height: 56.8px;
  letter-spacing: 0.12em;
  background: transparent;
  outline: none;
  &.input{
    border-color: white;
  }
  padding-inline-start: 10px;
  width: 600px;
  height: 64px;
`;
