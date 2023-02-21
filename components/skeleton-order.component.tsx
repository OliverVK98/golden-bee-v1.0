import ContentLoader from "react-content-loader";
import styled from "styled-components";

const SkeletonContainer = styled.div`
  display: flex;
  align-items: center;
`

const SkeletonOrderComponent = () => {
    return(
        <SkeletonContainer>
            <ContentLoader
                speed={2}
                width={200}
                height={150}
                viewBox="0 0 150 150"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="0" ry="0" width="150" height="150" />
            </ContentLoader>
            <ContentLoader
                speed={2}
                width={250}
                height={20}
                viewBox="0 0 200 20"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="5" ry="5" width="250" height="20" />
            </ContentLoader>
            <ContentLoader
                speed={2}
                width={150}
                height={20}
                viewBox="-20 0 150 20"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="5" ry="5" width="150" height="150" />
            </ContentLoader>
            <ContentLoader
                speed={2}
                width={150}
                height={20}
                viewBox="-20 0 150 20"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="5" ry="5" width="150" height="150" />
            </ContentLoader>
        </SkeletonContainer>
    )
}

export default SkeletonOrderComponent