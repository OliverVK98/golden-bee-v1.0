import styled from "styled-components";
import Image from "next/image";
import DropdownComponent from "./dropdown.component";
import React, {useState} from "react";
import styles from "../styles/SearchBar.module.css"
import {IFrontPageItem} from "./product-page.component";

const SearchBarContainer = styled.div`
  width: 1170px;
  display: flex;
  position: relative;
`

const SearchInput = styled.input`
  width: 1015px;
  border: none;
  height: 40px;
  background-color: rgb(247,247,247);
  text-align: center;
  outline: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`

const SelectInput = styled.input`
  width: 125px;
  border: none;
  height: 40px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: rgb(254,189,105);
  text-align: center;
  outline: none;
  cursor: pointer;
`

const ExpandButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  background-color: rgb(254,189,105);
  cursor: pointer;
`

interface ISearchBarProps {
    setDisplayData?: React.Dispatch<React.SetStateAction<IFrontPageItem[]>>,
    setDisplayDataIndex?: React.Dispatch<React.SetStateAction<number>>
}

const SearchBarComponent: React.FC<ISearchBarProps> = ({setDisplayData, setDisplayDataIndex}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownValue, setDropdownValue] = useState("All Products");

    return (
        <SearchBarContainer>
            {
                <DropdownComponent setDisplayDataIndex={setDisplayDataIndex} dropdownValue={dropdownValue} setDropdownValue={setDropdownValue} dropdownOpen={dropdownOpen}
                                                   setDropdownOpen={setDropdownOpen} setDisplayData={setDisplayData}/>
            }
            <SelectInput value={dropdownValue} type="text" readOnly={true} onClick={()=>setDropdownOpen(!dropdownOpen)}/>
            <ExpandButtonContainer onClick={()=>setDropdownOpen(!dropdownOpen)}>
                <Image src="/icons/expand.png" alt="expand-arrow" height={24} width={24}
                       className={dropdownOpen ? styles.isOpen : styles.isClosed}/>
            </ExpandButtonContainer>
            <SearchInput type="search"/>
        </SearchBarContainer>
    )
}

export default SearchBarComponent