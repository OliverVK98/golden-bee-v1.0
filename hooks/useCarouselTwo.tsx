import {RefObject, useEffect, useState} from "react";

const useCarouselTwo = ([containerZero, containerOne, containerTwo, containerThree, containerFour, containerFive, containerSix, containerSeven]: RefObject<HTMLDivElement>[]) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(1);
    const [slides, setSlides] = useState<HTMLDivElement[]>([]);
    const [transitionActive, setTransitionActive] = useState<boolean>(true);

    const setContainerPosition = (slide: HTMLDivElement, index: number) => {
        const slideWidth = slides[1].getBoundingClientRect().width;
        slide.style.left = `${slideWidth * (index-1)}px`;
    }

    const moveToSlide = (targetSlideIndex: number) => {
        const targetSlide = slides[targetSlideIndex];
        slides.forEach(slide => {
            const parseProp = parseInt(targetSlide.style.left, 10);
            slide.style.transform =
                `translateX(${-parseProp}px)`;
        })
    }

    useEffect(()=> {
        if (containerZero.current && containerOne.current
            && containerTwo.current && containerThree.current
            && containerFour.current && containerFive.current
            && containerSix.current && containerSeven.current)
        {
            setSlides([containerZero.current, containerOne.current,
                containerTwo.current, containerThree.current,
                containerFour.current, containerFive.current,
                containerSix.current, containerSeven.current]);
        }
    }, [containerZero, containerOne, containerTwo, containerThree, containerFour, containerFive, containerSix, containerSeven]);

    useEffect(()=>{
        if (slides.length) {
            slides.forEach(setContainerPosition);
        }
    }, [slides])

    useEffect(() => {
        if (!transitionActive) setTransitionActive(true);
    }, [transitionActive]);

    const handleForwardButtonClick = () => {
        if (currentSlideIndex==6) {
            moveToSlide(7);
            setCurrentSlideIndex(1);
            setTimeout(()=>{
                setTransitionActive(false);
                moveToSlide(1);
            }, 450)

        } else {
            moveToSlide(currentSlideIndex+1);
            setCurrentSlideIndex(currentSlideIndex+1);
        }
    }

    const handleBackwardButtonClick = () => {
        if (currentSlideIndex===1) {
            moveToSlide(0);
            setCurrentSlideIndex(6);
            setTimeout(()=>{
                setTransitionActive(false);
                moveToSlide(6);
            }, 450)

        } else {
            moveToSlide(currentSlideIndex-1);
            setCurrentSlideIndex(currentSlideIndex-1);
        }
    }

    return {
        handleForwardButtonClick,
        handleBackwardButtonClick,
        moveToSlide,
        transitionActive,
        currentSlideIndex,
        setCurrentSlideIndex
    }
}

export default useCarouselTwo;