import styles from "@/styles/components/BasketList.module.css";
import Button from "@/components/Button";
import {useTranslation} from "next-i18next";
import InfoIcon from "@/components/Icons/InfoIcon";
import {useAtom} from "jotai";
import {CompleteOrderAction} from "@/store/atoms";

export default function CompleteRight({ data }){
    const { t } = useTranslation("common");
    const [completeOrder, setCompleteOrder] = useAtom(CompleteOrderAction)

    const handleCompleteOrderAction = () => {
        setCompleteOrder(completeOrder + 1)
    }

    return(
        <div className={`${styles.basketRight}`}>
            <div className={`${styles.rightBar} bg-[#404040] dark:bg-[#292D32]`}>
                <div className={styles.row}>
                    <span className={styles.left}>{t('labels.products_price')}</span>
                    <span className={styles.right}>{data?.total_price}  ₼</span>
                </div>
                <div className={styles.row}>
                    <span className={styles.left}>{t('labels.discount')}</span>
                    <span className={styles.right}>0  ₼</span>
                </div>

                <div className={styles.totalRow}>
                    <span className={styles.left}>{t('labels.total')}</span>
                    <span className={styles.right}>{data?.total_price}  ₼</span>
                </div>

                <Button
                    text={t('labels.complete_button')}
                    full
                    onClickFunction={handleCompleteOrderAction}
                />
            </div>
        </div>
    )
}
