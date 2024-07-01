import CabinetTitlePart from "@/components/Cabinet/CabinetTitlePart";
import styles from "@/styles/components/CabinetRightPart.module.css"
import {useTranslation} from "next-i18next";
import EmptyPanel from "@/blocks/EmptyPanel";

export default function CabinetMyCoupons({ data }){
    const { t } = useTranslation('common')
    const datas = [
        {
            title: 'Noutbooklar üçün',
            discountPercent: '20',
            couponCode: '23412342112'
        },
        {
            title: 'Aksesuarlar üçün',
            discountPercent: '35',
            couponCode: '23412342112'
        },
        {
            title: 'Noutbooklar üçün',
            discountPercent: '50',
            couponCode: '23412342112'
        },
        {
            title: 'Aksesuarlar üçün',
            discountPercent: '70',
            couponCode: '23412342112'
        },
        {
            title: 'Noutbooklar üçün',
            discountPercent: '15',
            couponCode: '23412342112'
        },
        {
            title: 'Aksesuarlar üçün',
            discountPercent: '40',
            couponCode: '23412342112'
        }
    ]
    return(
        <>
            <CabinetTitlePart
                title={t('cabinet.coupons')}
            />

            <div className={styles.couponsList}>
                {
                    data?.promos?.length > 0
                    ?
                    data?.promos?.map((item,i) => (
                        <div key={i} className={`${styles.item} coupon-item`}>
                            <div className={`${styles.title} dark:before:!bg-panel-dark dark:after:!bg-panel-dark`}>{item.title}</div>

                            <div className={styles.description}>
                                <div className={styles.discount}>{item.promo_value} <span>{item.promo_type_str}</span></div>

                                <div className={styles.couponPart}>
                                    <span className={styles.label}>{t('cabinet.coupon_code')}</span>
                                    <p className={styles.value}>{item.promo_code}</p>
                                </div>
                                <button className={`${styles.button} ${item.promo_used == '1' ? '!bg-[#9c9c9c] pointer-events-none' : ''}`}>
                                    {item.promo_used_str}
                                </button>
                            </div>
                        </div>
                    ))
                    : <EmptyPanel/>
                }
            </div>
        </>
    )
}