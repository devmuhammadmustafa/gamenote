import CabinetTitlePart from "@/components/Cabinet/CabinetTitlePart";
import styles from "@/styles/components/CabinetRightPart.module.css"
import Link from "next/link";
import {useRouter} from "next/router";
import {format} from "date-fns";
import {useEffect, useState} from "react";
import CabinetProfileIcon from "@/components/Icons/CabinetProfile";
import CabinetProfilePhotoIcon from "@/components/Icons/CabinetProfilePhotoIcon";
import DeliveryIcon from "@/components/Icons/DeliveryIcon";
import {useTranslation} from "next-i18next";
export default function CabinetMyOrdersDetail({ data }){
    const { t } = useTranslation('common')
    const router = useRouter()
    const orderNumber = router.query.slug

    return(
        <>
            <CabinetTitlePart
                title={t('cabinet.orders_details')}
                backButtonText={t('cabinet.all_orders')}
            />

            <div className={styles.detailContainer}>
                <div className={`${styles.titleBar} bg-[#F5F5F5] dark:!bg-transparent dark:border-b dark:border-light max-[500px]:flex-col`}>
                    <div className={styles.part}>
                        <span className={styles.label}>
                            {t('cabinet.order_number')}
                        </span>
                        <span className={`${styles.text} dark:!text-light`}>{orderNumber}</span>
                    </div>
                    <div className={styles.part}>
                        <span className={styles.label}>
                            {t('cabinet.deliver_date')}
                        </span>
                        <span className={`${styles.text} dark:!text-light`}>{format(new Date(data?.shipping_details?.date), "dd.MM.yyyy")}</span>
                    </div>
                </div>

                <div className={`${styles.products} max-[767px]:overflow-auto`}>
                    <table className='max-[767px]:!w-[640px]'>
                        <tbody>
                        {
                            data?.products?.map((item,i) => (
                                <tr key={i} className={styles.row}>
                                    <td>
                                        <p className={`${styles.key} dark:!text-light`}>
                                            {t('cabinet.product_name')}
                                        </p>
                                        <p className={`${styles.value} dark:!text-white`}>{item.name}</p>
                                    </td>
                                    <td>
                                        <p className={`${styles.key} dark:!text-light`}>
                                            {t('cabinet.product_count')}
                                        </p>
                                        <p className={`${styles.value} dark:!text-white`}>{item.quantity}</p>
                                    </td>
                                    <td>
                                        <p className={`${styles.key} dark:!text-light`}>
                                            {t('cabinet.product_price')}
                                        </p>
                                        <p className={`${styles.value} dark:!text-white`}>{item.price}</p>
                                    </td>
                                    <td>
                                        <p className={`${styles.key} dark:!text-light`}>
                                            {t('cabinet.general')}
                                        </p>
                                        <p className={`${styles.value} dark:!text-white`}>{item.total_price}</p>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>

                {/*<div className={styles.customerInfo}>*/}
                {/*    <div className={styles.title}>*/}
                {/*        <CabinetProfilePhotoIcon/>*/}
                {/*        <span className={styles.text }>Alıcı məlumatları</span>*/}
                {/*    </div>*/}
                {/*    <table className={styles.table}>*/}
                {/*        <tr>*/}
                {/*            <td>*/}
                {/*                <span className={styles.key}>*/}
                {/*                    Ad, soyad:*/}
                {/*                </span>*/}
                {/*            </td>*/}
                {/*            <td>*/}
                {/*                <span className={styles.key}>*/}
                {/*                    Email:*/}
                {/*                </span>*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*        <tr>*/}
                {/*            <td>*/}
                {/*                <span className={styles.key}>*/}
                {/*                   Telefon nömrəsi:*/}
                {/*                </span>*/}
                {/*            </td>*/}
                {/*            <td>*/}
                {/*                <span className={styles.key}>*/}
                {/*                    Əlavə qeyd:*/}
                {/*                </span>*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*    </table>*/}
                {/*</div>*/}

                <div className={`${styles.otherInfo} max-[500px]:flex-col`}>
                    <div className={styles.part}>
                        <div className={styles.title}>
                            <DeliveryIcon/>
                            <span className={styles.text}>
                                {t('cabinet.deliver_address')}
                            </span>
                        </div>
                        <p className={`${styles.key} dark:!text-light`}>
                            {data?.shipping_details.address}
                        </p>
                    </div>
                    <div className={`${styles.part} max-[500px]:flex max-[500px]:items-center`}>
                            <div className={`${styles.title} max-[500px]:!mb-[5px]`}>
                            <span className={styles.text}>{t('cabinet.general')}</span>
                        </div>
                        <p className={`${styles.key} dark:!text-light`}>
                            {data?.shipping_details.grand_total}  ₼
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}