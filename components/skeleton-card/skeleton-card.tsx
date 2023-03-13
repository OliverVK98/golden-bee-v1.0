import ContentLoader from "react-content-loader";
import useMediaQuery from "@mui/material/useMediaQuery";

const SkeletonCard = () => {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');

    return (
        <ContentLoader
            speed={0.8}
            width={isSmallScreen ? 150 : 250}
            height={isSmallScreen ? 270: 350}
            viewBox={isSmallScreen ? "0 0 150 270" : "0 0 250 350"}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="5" y="5" rx="5" ry="5" width={isSmallScreen ? "140" : "240"} height={isSmallScreen ? "140" : "240"} />
            <rect x="5" y={isSmallScreen ? "155" : "255"} rx="5" ry="5" width={isSmallScreen ? "140" : "240"} height="20" />
            <rect x="5" y={isSmallScreen ? "185" : "290"} rx="5" ry="5" width={isSmallScreen ? "140" : "240"} height="20" />
            <rect x="5" y={isSmallScreen ? "215" : "325"} rx="5" ry="5" width={isSmallScreen ? "140" : "240"} height="20" />
        </ContentLoader>
    )
}

export default SkeletonCard