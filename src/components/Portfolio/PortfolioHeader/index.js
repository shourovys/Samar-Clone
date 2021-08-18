import React from "react";
import { Option, OptionWrapper } from "./PortfolioHeader.styles";

const PortfolioHeader = ({currentOption, setCurrentOption }) => {
  const options = [
    { name: "All" },
    { name: "Web Design" },
    { name: "Web Development" },
    { name: "Branding" },
    { name: "Mobile App" },
    { name: "SCO" },
  ];
  return (
    <OptionWrapper>
      {options.map((option) => (
        <Option key={option.name} onClick={(()=>setCurrentOption(option))}
          selected={currentOption.name===option.name}
        >{option.name}</Option>
      ))}
    </OptionWrapper>
  );
};

export default PortfolioHeader;
