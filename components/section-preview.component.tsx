import styled from "styled-components";
import React from "react";
import Image from "next/image";
import styles from "../styles/FrontImage.module.css"

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
  font-size: 22px;
  transform: translate(-50%, -50%)
`

interface ISectionProps {
    title: string,
    height: number,
    width: number,
    imageUrl: string
}

interface IWrapperProps {
    height: number,
    width: number
}

const SectionPreviewComponent: React.FC<ISectionProps> = ({title, width, height, imageUrl}) => {
    return (
        <ImageWrapper height={height} width={width}>
            <TextContainer>{title}</TextContainer>
            <Image src={imageUrl} alt="section-preview" height={height} width={width} className={styles.imageDark}/>
        </ImageWrapper>
    )
}

export default SectionPreviewComponent