import ContentLoader from "react-content-loader";

const SkeletonCardComponent = () => {
    return (
        <ContentLoader
            speed={0.8}
            width={250}
            height={350}
            viewBox="0 0 250 350"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="5" y="5" rx="5" ry="5" width="240" height="240" />
            <rect x="5" y="255" rx="5" ry="5" width="240" height="20" />
            <rect x="5" y="290" rx="5" ry="5" width="240" height="20" />
            <rect x="5" y="325" rx="5" ry="5" width="240" height="20" />
        </ContentLoader>
    )
}

export default SkeletonCardComponent