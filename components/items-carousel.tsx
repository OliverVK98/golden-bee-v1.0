import React, {useRef} from "react";
import FrontPageItemComponent from "./front-page-item.component";
import styled from "styled-components";
import {IDataItem} from "../data/data";
import Image from "next/legacy/image";
import CustomRoundButton from "./round-button";
import useCarousel from "../hooks/useCarousel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
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
  width: 1240px;
`

interface ITransition {
    transitionActive: boolean;
}

const SlidesContainer = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 700px;
  z-index: 3;
  transition: ${(props: ITransition)=> props.transitionActive ? "transform 450ms ease-in" : "none" };
`

const CarouselContainer = styled.div`
  padding: 0;
  margin: 0;
  position: relative;
  height: 430px;
  width: 1230px;
  display: block;
  overflow: hidden;
`

interface IItemsCarouselProps {
    title: string,
    data: IDataItem[]
}


const ItemsCarousel: React.FC<IItemsCarouselProps> = ( {data, title}) => {
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
           setCurrentSlideIndex} = useCarousel(elementRefs)

    let dataOne;
    let dataTwo;
    let dataThree;

    if (data) {
        dataOne = data.slice(0, 4);
        dataTwo = data.slice(4, 8);
        dataThree = data.slice(8, 12);
    }

    return (
        <Container>
            <h1>{title}</h1>
            <TrendingItemsContainer>
                <CarouselContainer >
                    <SlidesContainer transitionActive={transitionActive} ref={elementRefs[0]}>
                        {
                            dataThree?.map((item: IDataItem, key) => <FrontPageItemComponent key={key} {...item}/>)
                        }
                    </SlidesContainer>
                    <SlidesContainer transitionActive={transitionActive} ref={elementRefs[1]}>
                        {
                            dataOne?.map((item: IDataItem, key) => <FrontPageItemComponent key={key} {...item}/>)
                        }
                    </SlidesContainer>
                    <SlidesContainer transitionActive={transitionActive} ref={elementRefs[2]}>
                        {
                            dataTwo?.map((item: IDataItem, key) => <FrontPageItemComponent key={key} {...item}/>)
                        }
                    </SlidesContainer>
                    <SlidesContainer transitionActive={transitionActive} ref={elementRefs[3]}>
                        {
                            dataThree?.map((item: IDataItem, key) => <FrontPageItemComponent key={key} {...item}/>)
                        }
                    </SlidesContainer>
                    <SlidesContainer transitionActive={transitionActive} ref={elementRefs[4]}>
                        {
                            dataOne?.map((item: IDataItem, key) => <FrontPageItemComponent key={key} {...item}/>)
                        }
                    </SlidesContainer>
                </CarouselContainer>
            </TrendingItemsContainer>
            <NavContainer>
                <Image src="/icons/arrow-back.svg" alt="pointer-back" width={36} height={36}
                       onClick={handleBackwardButtonClick}/>
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
                        onClick={handleForwardButtonClick}/>
            </NavContainer>
        </Container>
    )
}

export default ItemsCarousel