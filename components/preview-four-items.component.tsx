import FrontPageItemComponent from "./front-page-item.component";
import React, {forwardRef, Ref, RefObject} from "react";
import styled from "styled-components";
import {IFrontPageItem} from "../pages/all";

const SlidesContainer = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 700px;
  z-index: 3;
  transition: ${(props: ITransition)=> props.transitionActive ? "transform 450ms ease-in" : "none" };
`

interface ITransition {
    transitionActive: boolean;
}

interface IPreviewComponentProps {
    transitionActive: boolean
    dataArr: IFrontPageItem[] | undefined,
    ref?: Ref<HTMLDivElement>,
    isImageLoadPriority?: boolean
}

const PreviewFourItemsComponent: React.FC<IPreviewComponentProps> = forwardRef(({transitionActive, dataArr, isImageLoadPriority=false}, ref, ) => {
    return (
        <SlidesContainer transitionActive={transitionActive} ref={ref}>
            {
                dataArr?.map((item, key) => <FrontPageItemComponent isImageLoadPriority={isImageLoadPriority} key={key} {...item}/>)
            }
        </SlidesContainer>
    )
})

export default PreviewFourItemsComponent