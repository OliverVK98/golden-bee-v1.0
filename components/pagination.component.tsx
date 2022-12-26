import styled from "styled-components";
import React, {useState} from "react";
import {IFrontPageItem} from "../pages/collections/all";

const ButtonContainer = styled.div`
  display: flex;
  gap: 7px;
`

interface IButtonProps {
    currentPage: number,
    index: number
}

const CustomButton = styled.button`
  width: 39px;
  height: 39px;
  background-color: ${(props: IButtonProps) => props.currentPage===props.index ? "rgb(58,170,53)" : "transparent"};
  color: ${(props: IButtonProps) => props.currentPage===props.index ? "white" : "rgb(58,170,53)"};
  border: 1px solid rgb(58,170,53);
  border-radius: 10px;
  cursor: pointer;
`

interface IPaginationProps {
    totalPages: number,
    dataArr: IFrontPageItem[],
    currentPage: number,
    setCurrentPage: (index: number) => void,
}

const PaginationComponent: React.FC<IPaginationProps> = ({totalPages, setCurrentPage, currentPage}) => {
    const arrPages = new Array(totalPages).fill("page");

    const handleClick = (index: number) => {
        setCurrentPage(index+1);
    }

    return(
        <ButtonContainer>
            {
                arrPages.map((_, index) => <CustomButton currentPage={currentPage} index={index+1}
                                                         onClick={()=>handleClick(index)} key={index}>{index+1}</CustomButton>)
            }
        </ButtonContainer>
    )
}

export default PaginationComponent