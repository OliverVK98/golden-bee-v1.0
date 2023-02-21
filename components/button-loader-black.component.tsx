import Image from "next/image";
import styles from "../styles/Loader.module.css"

const ButtonLoaderBlackComponent = () => {
    return (
        <Image src="/icons/loader-black.svg" alt="loader-icon"
               height={24} width={24} className={styles.spin}/>
    )
}

export default ButtonLoaderBlackComponent