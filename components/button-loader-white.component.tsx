import Image from "next/image";
import styles from "../styles/Loader.module.css"

const ButtonLoaderWhiteComponent = () => {
    return (
        <Image src="/icons/loader-white.svg" alt="loader-icon"
               height={24} width={24} className={styles.spin}/>
    )
}

export default ButtonLoaderWhiteComponent