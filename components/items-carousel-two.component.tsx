import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import Image from "next/legacy/image";
import CustomRoundButton from "./round-button.component";
import {IFrontPageItem} from "../pages/all";
import PreviewItemsComponent from "./preview-items.component";
import arraySplit from "../utils/array-split";
import useCarouselTwo from "../hooks/useCarouselTwo";

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
  width: 520px;

  @media (max-width: 600px) {
    width: 320px;
  }
`

const CarouselContainer = styled.div`
  padding: 0;
  margin: 0;
  position: relative;
  height: 390px;
  width: 520px;
  display: flex;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 320px;
    height: 290px;
  }
  
`

interface IItemsCarouselProps {
    title: string,
    dataOne: IFrontPageItem[],
    dataTwo: IFrontPageItem[],
    dataThree: IFrontPageItem[]
}


const ItemsCarouselTwoComponent: React.FC<IItemsCarouselProps> = ({dataOne, dataTwo, dataThree, title}) => {
    const elementRefs = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
    ];

    const [dataOneSplitOne, dataOneSplitTwo] = arraySplit(dataOne);
    const [dataTwoSplitOne, dataTwoSplitTwo] = arraySplit(dataTwo);
    const [dataThreeSplitOne, dataThreeSplitTwo] = arraySplit(dataThree);

    const {handleForwardButtonClick,
        handleBackwardButtonClick,
        moveToSlide,
        transitionActive,
        currentSlideIndex,
        setCurrentSlideIndex} = useCarouselTwo(elementRefs)

    return (
        <Container>
            <h1>{title}</h1>
            <TrendingItemsContainer>
                <CarouselContainer >
                    <PreviewItemsComponent transitionActive={transitionActive} dataArr={dataThreeSplitTwo}
                                           ref={elementRefs[0]} left={-520} />
                    <PreviewItemsComponent isImageLoadPriority={true} transitionActive={transitionActive}
                                           dataArr={dataOneSplitOne} ref={elementRefs[1]} left={0} />
                    <PreviewItemsComponent transitionActive={transitionActive}
                                           dataArr={dataOneSplitTwo} ref={elementRefs[2]} left={520} />
                    <PreviewItemsComponent transitionActive={transitionActive} dataArr={dataTwoSplitOne}
                                           ref={elementRefs[3]} left={520*2} />
                    <PreviewItemsComponent transitionActive={transitionActive} dataArr={dataTwoSplitTwo}
                                           ref={elementRefs[4]} left={520*3} />
                    <PreviewItemsComponent transitionActive={transitionActive} dataArr={dataThreeSplitOne}
                                           ref={elementRefs[5]} left={520*4} />
                    <PreviewItemsComponent transitionActive={transitionActive} dataArr={dataThreeSplitTwo}
                                           ref={elementRefs[6]} left={520*5} />
                    <PreviewItemsComponent transitionActive={transitionActive} dataArr={dataOneSplitOne}
                                           ref={elementRefs[7]} left={520*6} />
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
                    <CustomRoundButton mainColor="green" secondaryColor="transparent"
                                       borderColor="green" isPrimary={currentSlideIndex===4}
                                       onClick={()=> {
                                           moveToSlide(4);
                                           setCurrentSlideIndex(4);
                                       }}/>
                    <CustomRoundButton mainColor="green" secondaryColor="transparent"
                                       borderColor="green" isPrimary={currentSlideIndex===5}
                                       onClick={()=> {
                                           moveToSlide(5);
                                           setCurrentSlideIndex(5);
                                       }}/>
                    <CustomRoundButton mainColor="green" secondaryColor="transparent"
                                       borderColor="green" isPrimary={currentSlideIndex===6}
                                       onClick={()=> {
                                           moveToSlide(6);
                                           setCurrentSlideIndex(6);
                                       }}/>

                </ButtonContainer>
                <Image src="/icons/arrow-forward.svg" alt="pointer-forward" width={36} height={36}
                       onClick={handleForwardButtonClick} style={{cursor: "pointer"}}/>
            </NavContainer>
        </Container>
    )
}

export default ItemsCarouselTwoComponent