import ContentLoader from "react-content-loader";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";

const SkeletonContainer = styled.div`
  display: flex;
  align-items: center;
`

const SkeletonOrder = () => {
    const isSmallScreen = useMediaQuery('(max-width: 800px)');
    const isMobileScreen = useMediaQuery('(max-width: 600px)');

    return(
        <SkeletonContainer>
            <ContentLoader
                speed={2}
                width={isMobileScreen ? 70 : (isSmallScreen ? 100 : 200)}
                height={isMobileScreen ? 70 : (isSmallScreen ? 100 : 150)}
                viewBox={isMobileScreen ? "0 0 70 70" : (isSmallScreen ? "0 0 100 100" : "0 0 150 150")}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="0" ry="0" width="150" height="150" />
            </ContentLoader>
            <ContentLoader
                speed={2}
                width={isMobileScreen ? 100 : (isSmallScreen ? 200 : 250)}
                height={isMobileScreen ? 15 : 20}
                viewBox={isMobileScreen ? "0 0 80 15" : (isSmallScreen ? "0 0 130 20" : "0 0 200 20")}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="5" ry="5" width="250" height="20" />
            </ContentLoader>
            <ContentLoader
                speed={2}
                width={isMobileScreen ? 80 : 150}
                height={isMobileScreen ? 15 : 20}
                viewBox={isMobileScreen ? "0 0 90 20" : "-20 0 150 20"}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="5" ry="5" width="150" height="150" />
            </ContentLoader>
            <ContentLoader
                speed={2}
                width={isMobileScreen ? 70 : 150}
                height={isMobileScreen ? 15 : 20}
                viewBox={isMobileScreen ? "0 0 90 20" : "-20 0 150 20"}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="5" ry="5" width="150" height="150" />
            </ContentLoader>
        </SkeletonContainer>
    )
}

export default SkeletonOrder