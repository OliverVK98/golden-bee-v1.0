import styled from "styled-components";
import SkeletonCardComponent from "./skeleton-card.component";
import useMediaQuery from "@mui/material/useMediaQuery";

const SkeletonContainer = styled.div`
  display: flex;
  gap: 20px;
`

const SkeletonProductListComponent = () => {
    const isLaptopScreen = useMediaQuery('(max-width: 1200px)');
    const isSmallScreen = useMediaQuery('(max-width: 800px)');
    const numberToRender = isLaptopScreen ? (isSmallScreen ? 2 : 3) : 4;

    return (
        <SkeletonContainer>
            {
                new Array(numberToRender).fill(0).map((_, index) => <SkeletonCardComponent key={index}/>)
            }
        </SkeletonContainer>
    )
}

export default SkeletonProductListComponent