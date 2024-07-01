import styles from '@/styles/components/CabinetRightPart.module.css'
import Link from "next/link";
import BackIcon from "@/components/Icons/BackIcon";

export default function CabinetTitlePart({ title, description, backButtonText }) {
    return(
        <div className={`${styles.titlePart} max-[600px]:flex max-[600px]:flex-col`}>
            <div className={`${styles.title} text-black dark:!text-light`}>{title}</div>
            <div className={`${styles.description} text-black dark:!text-white`}>{description}</div>

            {
                backButtonText &&
                <Link href='/cabinet/my-orders' className={`${styles.backlink} dark:hover:!text-white`}>
                    <BackIcon/>
                    <span className={styles.text}>{backButtonText}</span>
                </Link>
            }
        </div>
    )
}