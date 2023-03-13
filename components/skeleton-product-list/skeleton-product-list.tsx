import styled from "styled-components";
import SkeletonCard from "../skeleton-card/skeleton-card";
import useMediaQuery from "@mui/material/useMediaQuery";

const SkeletonContainer = styled.div`
  display: flex;
  gap: 20px;
`

const SkeletonProductList = () => {
    const isLaptopScreen = useMediaQuery('(max-width: 1200px)');
    const isSmallScreen = useMediaQuery('(max-width: 800px)');
    const numberToRender = isLaptopScreen ? (isSmallScreen ? 2 : 3) : 4;

    return (
        <SkeletonContainer>
            {
                new Array(numberToRender).fill(0).map((_, index) => <SkeletonCard key={index}/>)
            }
        </SkeletonContainer>
    )
}

export default SkeletonProductList