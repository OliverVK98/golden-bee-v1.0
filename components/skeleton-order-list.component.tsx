import styled from "styled-components";
import SkeletonOrderComponent from "./skeleton-order.component";

const SkeletonContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`

const SkeletonOrderListComponent = () => {
    return (
        <SkeletonContainer>
            {
                new Array(4).fill(0).map((_, index) => <SkeletonOrderComponent key={index}/>)
            }
        </SkeletonContainer>
    )
}

export default SkeletonOrderListComponent