import styles from "@/styles/components/StandardPages.module.css"
import Container from "@/components/Container";
import ProductListTopTexts from "@/components/ProductListTopTexts";
import {useTranslation} from "next-i18next";
import {Parser} from "html-to-react";

export default function ReturnPolicyBlock({ data }){
    const htmlParser = new Parser()
    const { t } = useTranslation('common')

    return(
        <div className={styles.returnPolicyBlock}>
            <Container>
                <ProductListTopTexts title={t('static_pages.return')}/>

                <div className={`${styles.returnBlock} static-pages dark:!bg-panel-dark dark:text-light`}>
                    {data && htmlParser.parse(data)}
                </div>
            </Container>
        </div>
    )
}