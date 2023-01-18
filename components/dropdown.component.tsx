import styled from "styled-components";
import React, {Dispatch, SetStateAction} from "react";
import {IFrontPageItem} from "./product-page.component";

interface IDropdownContainerProps {
    dropdownOpen: boolean
}

const DropDownContainer = styled.div`
  height: ${(props: IDropdownContainerProps) => props.dropdownOpen ? '245px' : '0'};
  overflow: hidden;
  width: 150px;
  background-color: lightgreen;
  position: absolute;
  z-index: 4;
  top: 40px;
  bottom: 0;
  left: 5px;
  display: flex;
  flex-direction: column;
  transition: height 0.4s ease-in-out;
`

const SelectButton = styled.button`
  height: 35px;
  border: none;
  cursor: pointer;
  content: "\\25b6";
  background-color: rgb(254,189,105);
`

interface IDropdownProps {
    setDropdownValue: Dispatch<SetStateAction<string>>,
    setDropdownOpen: Dispatch<SetStateAction<boolean>>,
    dropdownOpen: boolean,
    dropdownValue: string,
    setDisplayData?: React.Dispatch<React.SetStateAction<IFrontPageItem[]>>,
    setDisplayDataIndex?: React.Dispatch<React.SetStateAction<number>>
}

const DropdownComponent: React.FC<IDropdownProps> = ({setDropdownValue, setDisplayDataIndex, setDropdownOpen, dropdownOpen, dropdownValue}) => {
    const categories: {[key:string]:number} = {
        "All Products": 0,
        "Bracelets With Notes" : 1,
        "Silver Style Jewelry": 2,
        "Bee Theme": 3,
        "Sunflower Theme" : 4,
        "Modern Styles" : 5,
        "Nature Lovers" : 6,
        "Premium Jewelry" : 7
    }

    return (
        <DropDownContainer dropdownOpen={dropdownOpen}>
        {
            Object.keys(categories).map((category: string, index) =>
                    <SelectButton key={index} style={dropdownValue===category ? {border: "1px solid black"} : {}}
                                  onClick={()=> {
                        setDropdownValue(category);
                        setDropdownOpen(!dropdownOpen);
                        setDisplayDataIndex && setDisplayDataIndex(categories[category]);
                    }}>{category}</SelectButton>)
            }
        </DropDownContainer>
    )
}

export default DropdownComponent