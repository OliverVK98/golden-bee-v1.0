import styled from "styled-components";
import SkeletonOrder from "../skeleton-order/skeleton-order";

const SkeletonContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`

const SkeletonOrderList = () => {
    return (
        <SkeletonContainer>
            {
                new Array(4).fill(0).map((_, index) => <SkeletonOrder key={index}/>)
            }
        </SkeletonContainer>
    )
}

export default SkeletonOrderList