import CabinetTitlePart from "@/components/Cabinet/CabinetTitlePart";
import styles from "@/styles/components/CabinetRightPart.module.css"
import Link from "next/link";
import {useTranslation} from "next-i18next";
export default function CabinetMyOrders({ data }){
    const { t } = useTranslation('common')
    return(
        <>
            <CabinetTitlePart
                title={t('cabinet.orders')}
            />

            <div className={styles.orderList}>
                <table className='w-full'>
                    <tbody>
                        {
                            data?.map((item,i) => (
                                <tr key={i} className={styles.row}>
                                    <td>
                                        <p className={`${styles.label} text-black dark:!text-light`}>
                                            {t('cabinet.order_number')}
                                        </p>
                                        <p className={styles.value}>{item.id}</p>
                                    </td>
                                    <td>
                                        <p className={`${styles.label} text-black dark:!text-light`}>
                                            {t('cabinet.status')}
                                        </p>
                                        <p className={`${styles.value} ${item.status == 'pending' ? styles.pending : ''}`}>
                                            {item.status == 'pending' && t('cabinet.pending')}
                                        </p>
                                    </td>
                                    <td>
                                        <p className={`${styles.label} text-black dark:!text-light`}>
                                            {t('cabinet.general')}
                                        </p>
                                        <p className={styles.value}>{item.price}  ₼</p>
                                    </td>
                                    <td>
                                        <Link href={'/cabinet/my-orders/' + (item.id)} className={`${styles.button} text-black dark:!text-light`}>
                                            {t('cabinet.more')}
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}