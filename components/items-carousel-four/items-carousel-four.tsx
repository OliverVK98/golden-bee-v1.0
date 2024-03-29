import React, {useRef} from "react";
import styled from "styled-components";
import Image from "next/legacy/image";
import CustomRoundButton from "../round-button/round-button";
import useCarouselFour from "../../hooks/useCarouselFour";
import {IFrontPageItem} from "../../pages/all";
import PreviewItems from "../preview-items/preview-items";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const TrendingItemsContainer = styled.div`
  display: block;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 3px;
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1060px;
`

const CarouselContainer = styled.div`
  padding: 0;
  margin: 0;
  position: relative;
  height: 390px;
  width: 1060px;
  display: flex;
  overflow: hidden;
`

interface IItemsCarouselProps {
    title: string,
    dataOne: IFrontPageItem[],
    dataTwo: IFrontPageItem[],
    dataThree: IFrontPageItem[]
}


const ItemsCarouselFour: React.FC<IItemsCarouselProps> = ({dataOne, dataTwo, dataThree, title}) => {
    const elementRefs = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
    ];

    const {handleForwardButtonClick,
           handleBackwardButtonClick,
           moveToSlide,
           transitionActive,
           currentSlideIndex,
           setCurrentSlideIndex} = useCarouselFour(elementRefs)

    return (
        <Container>
            <h1>{title}</h1>
            <TrendingItemsContainer>
                <CarouselContainer >
                    <PreviewItems transitionActive={transitionActive} dataArr={dataThree}
                                  ref={elementRefs[0]} left={-1060} />
                    <PreviewItems isImageLoadPriority={true} transitionActive={transitionActive}
                                  dataArr={dataOne} ref={elementRefs[1]} left={0} />
                    <PreviewItems transitionActive={transitionActive}
                                  dataArr={dataTwo} ref={elementRefs[2]} left={1060} />
                    <PreviewItems transitionActive={transitionActive} dataArr={dataThree}
                                  ref={elementRefs[3]} left={1060*2} />
                    <PreviewItems transitionActive={transitionActive} dataArr={dataOne}
                                  ref={elementRefs[4]} left={1060*3} />
                </CarouselContainer>
            </TrendingItemsContainer>
            <NavContainer>
                <Image src="/icons/arrow-back.svg" alt="pointer-back" width={36} height={36}
                       onClick={handleBackwardButtonClick} priority={true}style={{cursor: "pointer"}} />
                <ButtonContainer>
                    <CustomRoundButton mainColor="green" secondaryColor="transparent"
                                       borderColor="green" isPrimary={currentSlideIndex===1}
                                       onClick={()=> {
                                           moveToSlide(1);
                                           setCurrentSlideIndex(1);
                                       }} />
                    <CustomRoundButton mainColor="green" secondaryColor="transparent"
                                       borderColor="green" isPrimary={currentSlideIndex===2}
                                       onClick={()=> {
                                           moveToSlide(2);
                                           setCurrentSlideIndex(2);
                                       }}/>
                    <CustomRoundButton mainColor="green" secondaryColor="transparent"
                                       borderColor="green" isPrimary={currentSlideIndex===3}
                                       onClick={()=> {
                                           moveToSlide(3);
                                           setCurrentSlideIndex(3);
                                       }}/>
                </ButtonContainer>
                <Image src="/icons/arrow-forward.svg" alt="pointer-forward" width={36} height={36}
                        onClick={handleForwardButtonClick} style={{cursor: "pointer"}}/>
            </NavContainer>
        </Container>
    )
}

export default ItemsCarouselFour