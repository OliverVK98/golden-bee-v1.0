import Image from "next/image";
import styles from "../../styles/Loader.module.css"
import useMediaQuery from "@mui/material/useMediaQuery";

const ButtonLoaderWhite = () => {
    const isSmallScreen = useMediaQuery('(max-width: 576px)');

    return (
        <Image src="/icons/loader-white.svg" alt="loader-icon"
               height={isSmallScreen ? 16 : 24} width={isSmallScreen ? 16 : 24} className={styles.spin}/>
    )
}

export default ButtonLoaderWhite