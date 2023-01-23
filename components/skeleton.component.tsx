import styled from "styled-components";
import SkeletonCardComponent from "./skeleton-card.component";

const SkeletonContainer = styled.div`
  display: flex;
  gap: 20px;
`

const SkeletonComponent = () => {
    return (
        <SkeletonContainer>
            {
                new Array(4).fill(0).map((_, index) => <SkeletonCardComponent key={index}/>)
            }
        </SkeletonContainer>
    )
}

export default SkeletonComponent