import styles from "@/styles/components/StandardPages.module.css"
import Container from "@/components/Container";
import ProductListTopTexts from "@/components/ProductListTopTexts";
import {useTranslation} from "next-i18next";
import {Parser} from "html-to-react";

export default function WarrantConditionsBlock({ data }){
    const { t } = useTranslation('common')
    const htmlParser = new Parser()
    return(
        <div className={styles.warrantyConditions}>
            <Container>
                <ProductListTopTexts title={t('static_pages.warranty')}/>

                <div className={`${styles.warrantyBlock} static-pages dark:!bg-panel-dark`}>
                    {data && htmlParser.parse(data)}
                </div>
            </Container>
        </div>
    )
}