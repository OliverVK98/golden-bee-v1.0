import styled from "styled-components";
import React, {useEffect} from "react";

const ButtonContainer = styled.div`
  display: flex;
  gap: 7px;
  margin-bottom: 120px;
  margin-top: -120px;
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
  font-weight: bold;
`

const ButtonArrowRight = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  width: 39px;
  height: 39px;
  border: 1px solid rgb(58,170,53);
  border-radius: 10px;
  cursor: pointer;
  background-color: transparent;

  :after {
    content: '';
    display: inline-block;
    width: 0.6em;
    height: 0.6em;
    border-top: 0.3em solid rgb(58, 170, 53);
    border-right: 0.3em solid rgb(58, 170, 53);
    transform: rotate(45deg);
    vertical-align: center;
  }
  :hover {
    background-color: rgb(58,170,53);
    :after {
      border-top: 0.3em solid white;
      border-right: 0.3em solid white;
      }
    }
`

const ButtonArrowLeft = styled(ButtonArrowRight)`
  padding-left: 12px;
  :after {
    transform: rotate(-135deg);
  }
`

interface IPaginationProps {
    totalPages: number | null,
    currentPage: number,
    setCurrentPage: (index: number) => void,
}

const Pagination: React.FC<IPaginationProps> = ({totalPages, setCurrentPage, currentPage}) => {
    const arrPages = new Array(totalPages).fill(0);

    const handleClick = (index: number) => {
        setCurrentPage(index+1);
    }

    const handleButtonClick = (increment: number) => {
        setCurrentPage(currentPage+increment);
    }

    useEffect(()=> {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [currentPage])

    if (totalPages===1) return null
    if (totalPages===null) return null

    return(
        <ButtonContainer>
            {currentPage!=1 && <ButtonArrowLeft onClick={()=>handleButtonClick(-1)}/>}
            {
                arrPages.map((_, index) => <CustomButton currentPage={currentPage} index={index+1}
                                                         onClick={()=>handleClick(index)} key={index}>{index+1}</CustomButton>)
            }
            {currentPage!=totalPages && <ButtonArrowRight onClick={()=>handleButtonClick(1)}/>}
        </ButtonContainer>

    )
}

export default Pagination