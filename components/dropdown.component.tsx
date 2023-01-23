import styled from "styled-components";
import React, {Dispatch, ForwardedRef, forwardRef, SetStateAction} from "react";

interface IDropdownContainerProps {
    dropdownOpen: boolean
}

const DropDownContainer = styled.div`
  height: ${(props: IDropdownContainerProps) => props.dropdownOpen ? '245px' : '0'};
  overflow: hidden;
  width: 175px;
  position: absolute;
  z-index: 4;
  top: 40px;
  bottom: 0;
  left: 5px;
  display: flex;
  flex-direction: column;
  transition: height 0.3s ease-in-out;
`

const SelectButton = styled.button`
  height: 35px;
  border: none;
  cursor: pointer;
  content: "\\25b6";
  background-color: rgb(82,170,90);
  color: white;
  font-weight: bold;
`

interface IDropdownProps {
    setDropdownValue: Dispatch<SetStateAction<string>>,
    setDropdownOpen: Dispatch<SetStateAction<boolean>>,
    dropdownOpen: boolean,
    dropdownValue: string,
    setDisplayDataIndex: React.Dispatch<React.SetStateAction<number>>,
    ref: any
}

const DropdownComponent: React.FC<IDropdownProps> = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
    const {setDropdownValue, setDisplayDataIndex, setDropdownOpen, dropdownOpen, dropdownValue} = props;
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
        <DropDownContainer ref={ref} dropdownOpen={dropdownOpen}>
        {
            Object.keys(categories).map((category: string, index) =>
                    <SelectButton key={index} style={dropdownValue===category ? {border: "1px solid white"} : {}}
                                  onClick={()=> {
                        setDropdownValue(category);
                        setDropdownOpen(false);
                        setDisplayDataIndex(categories[category]);
                    }}>{category}</SelectButton>)
            }
        </DropDownContainer>
    )
})

export default DropdownComponent