import FrontPageItem from "../front-page-item/front-page-item";
import React, {forwardRef, Ref} from "react";
import styled from "styled-components";
import {IFrontPageItem} from "../../pages/all";

const SlidesContainer = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props: ITransition)=>props.left}px;
  right: 0;
  height: 700px;
  z-index: 3;
  transition: ${(props: ITransition)=> props.transitionActive ? "transform 450ms ease-in" : "none" };
`

interface ITransition {
    transitionActive: boolean,
    left: number
}

interface IPreviewComponentProps {
    transitionActive: boolean
    dataArr: IFrontPageItem[] | undefined,
    ref?: Ref<HTMLDivElement>,
    isImageLoadPriority?: boolean,
    left: number
}

const PreviewItems: React.FC<IPreviewComponentProps> = forwardRef(({left, transitionActive, dataArr, isImageLoadPriority=false}, ref, ) => {
    return (
        <SlidesContainer left={left} transitionActive={transitionActive} ref={ref}>
            {
                dataArr?.map((item, key) => <FrontPageItem isImageLoadPriority={isImageLoadPriority} key={key} {...item}/>)
            }
        </SlidesContainer>
    )
})

export default PreviewItems