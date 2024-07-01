import styles from "@/styles/components/StandardPages.module.css"
import Container from "@/components/Container";
import ProductListTopTexts from "@/components/ProductListTopTexts";
import {useTranslation} from "next-i18next";
import {Parser} from "html-to-react";

export default function PrivacyTermsBlock({ data }){
    const { t } = useTranslation('common')
    const htmlParser = new Parser()

    return(
        <div className={styles.privacyTerms}>
            <Container>
                <ProductListTopTexts title={t('static_pages.privacy')}/>

                <div className={`${styles.privacyBlock} static-pages dark:!bg-panel-dark dark:!text-light`}>
                    {data && htmlParser.parse(data)}
                </div>
            </Container>
        </div>
    )
}