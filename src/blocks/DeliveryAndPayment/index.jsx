import styles from "@/styles/components/StandardPages.module.css"
import Container from "@/components/Container";
import ProductListTopTexts from "@/components/ProductListTopTexts";
import {useTranslation} from "next-i18next";
import {Parser} from "html-to-react";
export default function DeliveryAndPaymentPageBlock({ data }){
    const { t } = useTranslation('common')
    const htmlParser = new Parser()

    return(
        <div className={styles.deliveryAndPayment}>
            <Container>
                <ProductListTopTexts title={t('static_pages.delivery')}/>

                <div className={`${styles.deliveryBlock} static-pages dark:!bg-panel-dark dark:!text-light`}>
                    {data && htmlParser.parse(data)}
                </div>
            </Container>
        </div>
    )
}