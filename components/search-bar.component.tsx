import styled from "styled-components";
import Image from "next/image";
import DropdownComponent from "./dropdown.component";
import React, {
    createRef,
    forwardRef,
    useEffect,
    useImperativeHandle,
    useState
} from "react";
import styles from "../styles/SearchBar.module.css"
import {IFrontPageItem} from "./product-page-with-searchbar.component";

const SearchBarContainer = styled.div`
  width: 1170px;
  display: flex;
  position: relative;
`

const SearchInput = styled.input`
  width: 990px;
  border: none;
  height: 40px;
  background-color: rgb(247,247,247);
  text-align: left;
  padding-left: 10px;
  outline: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`

const SelectInput = styled.input`
  width: 150px;
  border: none;
  height: 40px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: rgb(82,170,90);
  text-align: center;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  color: white;
  z-index: 5;
`

const ExpandButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  background-color: rgb(82,170,90);
  cursor: pointer;
  z-index: 5;
`

interface ISearchBarProps {
    setDisplayDataIndex: React.Dispatch<React.SetStateAction<number>>,
    renderData: IFrontPageItem[],
    setFilteredData: React.Dispatch<React.SetStateAction<IFrontPageItem[] | null>>,
    userInput: string,
    setUserInput: React.Dispatch<React.SetStateAction<string>>,
    dropdownOpen: boolean,
    setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>,
    ref: any
}



const SearchBarComponent: React.FC<ISearchBarProps> = forwardRef((props, ref) => {
    const {setDropdownOpen, dropdownOpen, userInput, setUserInput, setDisplayDataIndex, setFilteredData, renderData } = props;
    const [dropdownValue, setDropdownValue] = useState("All Products");
    const searchBarRef = createRef<HTMLDivElement>();
    const selectInputRef = createRef<HTMLInputElement>();
    const imageRef = createRef<HTMLImageElement>();
    useImperativeHandle(ref, () => ({
        searchBarRef: searchBarRef,
        selectInputRef: selectInputRef,
        imageRef: imageRef
    }))

    useEffect(()=>{
        const filteredData = renderData.filter((value) => {
            return value.itemName.toLowerCase().includes(userInput.toLowerCase());
        });

        if (userInput === "") {
            setFilteredData([] as IFrontPageItem[]);
        } else {
            if (filteredData.length===0) {
                setFilteredData(null);
            } else setFilteredData(filteredData);
        }
    }, [renderData])

    const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputWord = event.target.value;
        setUserInput(inputWord);
        const filteredData = renderData.filter((value) => {
            return value.itemName.toLowerCase().includes(inputWord.toLowerCase());
        })
        if (inputWord === "") {
            setFilteredData([] as IFrontPageItem[]);
        } else {
            if (filteredData.length===0) {
                setFilteredData(null);
            } else setFilteredData(filteredData);
        }

    }

    return (
        <SearchBarContainer>
            {
                <DropdownComponent ref={searchBarRef} setDisplayDataIndex={setDisplayDataIndex} dropdownValue={dropdownValue} setDropdownValue={setDropdownValue} dropdownOpen={dropdownOpen}
                                                   setDropdownOpen={setDropdownOpen}/>
            }
            <SelectInput ref={selectInputRef} value={dropdownValue} type="text" readOnly={true} onClick={()=>setDropdownOpen(!dropdownOpen)}/>
            <ExpandButtonContainer onClick={()=>setDropdownOpen(!dropdownOpen)}>
                <Image ref={imageRef} src="/icons/expand.png" alt="expand-arrow" height={24} width={24}
                       className={dropdownOpen ? styles.isOpen : styles.isClosed}/>
            </ExpandButtonContainer>
            <SearchInput onChange={handleUserInput} type="search"/>
        </SearchBarContainer>
    )
})

export default SearchBarComponent