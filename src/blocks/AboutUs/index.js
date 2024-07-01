import styles from '@/styles/components/AboutUs.module.css'
import Container from "@/components/Container";
import LargeLogoIcon from "@/components/Icons/LargeLogoIcon";
import Info from "@/components/Info";
import InfoBlock from "@/blocks/InfoPanel";
import {useTranslation} from "next-i18next";
import {Parser} from "html-to-react";
export default function AboutUs({ data }){
    const htmlParser = new Parser()
    const { t } = useTranslation('common')
    return(
        <>
            <Container>
                <div className={`${styles.aboutUs} bg-white dark:bg-panel-dark`}>
                    <div className={styles.logo}>
                        <LargeLogoIcon dark='true'/>
                    </div>
                    <h1 className={`${styles.mainTitle} text-dark-white dark:text-light`}>
                        {t('about_large_title')}
                    </h1>
                    <p className={styles.title}>
                        {t('about_small_title')}
                    </p>
                    <p className={`${styles.description} text-black dark:text-light`}>
                        {data && htmlParser.parse(data)}
                    </p>

                    <div className={`${styles.aboutInfoBlock} border-gray dark:border-[#7d7d7d]`}>
                        <InfoBlock/>
                    </div>
                </div>
            </Container>
        </>
    )
}