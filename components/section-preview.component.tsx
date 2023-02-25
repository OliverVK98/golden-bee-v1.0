import styled from "styled-components";
import React from "react";
import Image from "next/legacy/image";
import styles from "../styles/FrontImage.module.css"
import useMediaQuery from "@mui/material/useMediaQuery";

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 10px;
  height: ${(props: IWrapperProps)=>props.height}px;
  width: ${(props: IWrapperProps)=>props.width}px;
  position: relative;
`

const TextContainer= styled.p`
  position: absolute;
  z-index: 2;
  color: white;
  top: 50%; 
  left: 50%; 
  font-weight: bold;
  font-size: 18px;
  transform: translate(-50%, -50%)
`

interface ISectionProps {
    title: string,
    height: number,
    isStyle: boolean,
    imageUrl: string
}

interface IWrapperProps {
    height: number,
    width: number
}

const SectionPreviewComponent: React.FC<ISectionProps> = ({title, isStyle, height, imageUrl}) => {
    const isSmallScreen = useMediaQuery('(max-width: 1040px)');
    const isMobileScreen = useMediaQuery('(max-width: 650px)');
    const width = isMobileScreen ? 300 : (isSmallScreen ? (600) : (isStyle ? 330 : 450));
    const finalHeight = isMobileScreen ? 250 : (isSmallScreen ? (350) : height);

    return (
        <ImageWrapper height={finalHeight} width={width}>
            <TextContainer>{title}</TextContainer>
            <Image src={imageUrl} alt="section-preview" height={finalHeight} width={width} className={styles.imageDark}/>
        </ImageWrapper>
    )
}

export default SectionPreviewComponent