import styles from '@/styles/components/CabinetLeftSide.module.css'
import Link from 'next/link'
import MapIcon from '../../Icons/MapIcon'
import CabinetProfileIcon from '../../Icons/CabinetProfile'
import { useRouter } from 'next/router'
import CabinetPasswordIcon from '../../Icons/CabinetPasswordIcon'
import CabinetOrdersIcon from '../../Icons/CabinetOrdersIcon'
import CabinetCouponIcon from '../../Icons/CabinetCouponIcon'
import CabinetAddressesIcon from '../../Icons/CabinetAddressesIcon'
import CabinetLogoutIcon from '../../Icons/CabinetLogoutIcon'
import CabinetProfilePhotoIcon from '../../Icons/CabinetProfilePhotoIcon'
import { deleteCookie } from "cookies-next";
import { getCookie } from 'cookies-next';
import {useTranslation} from "next-i18next";
import {getCouponsList} from "@/pages/api/cabinet/getCouponsList";
import {logoutService} from "@/pages/api/cabinet/logoutService";

export default function CabinetLeftSidePanel({ personalData }) {
    const { t } = useTranslation('common')
    const router = useRouter();
    const locale = router.locale

    const data = [
        {
            id: 1,
            icon: <CabinetProfileIcon/>,
            text: t('cabinet.personal_info'),
            link: '/cabinet/personal-info'
        },
        {
            id: 2,
            icon: <CabinetPasswordIcon/>,
            text: t('cabinet.reset_password'),
            link: '/cabinet/reset-password'
        },
        {
            id: 3,
            icon: <CabinetOrdersIcon/>,
            text: t('cabinet.orders'),
            link: '/cabinet/my-orders'
        },
        {
            id: 4,
            icon: <CabinetCouponIcon/>,
            text: t('cabinet.coupons'),
            link: '/cabinet/my-coupons'
        },
        {
            id: 5,
            icon: <CabinetAddressesIcon/>, 
            text: t('cabinet.addresses'),
            link: '/cabinet/delivery-addresses'
        }
    ]

    const handleLogout = async () => {
        const response = await logoutService(locale);
        if(response?.responseStatus?.ResponseCode === 200){
            deleteCookie('AccessToken');
            router.push('/')
        }

    };
    return(
        <div className={`cabinet-left-side-panel ${styles.cabinetLeftSide} `}>
            <div className={styles.title}>
                {t('cabinet.title')}
            </div>

            <div className={styles.profilePart}>
                <div className={styles.image}>
                    <CabinetProfilePhotoIcon/>
                </div>
                <div className={`${styles.name} text-black dark:!text-light`}>
                    {personalData?.fullname}
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.list}>
                    {
                        data?.map(item => (
                            <Link key={item.id} href={item.link} className={`${styles.link} ${router.pathname == item.link ? styles.active : ''}`}>
                                <div className={`${styles.icon} text-black dark:!text-light`}>
                                    {item.icon}
                                </div>
                                <span className={`${styles.text} text-black dark:!text-light`}>
                                    {item.text}
                                </span>
                            </Link>
                        ))
                    }
                </div>
                <button className={styles.exit} onClick={handleLogout}>
                    <div className={`${styles.icon} text-black dark:!text-light`}>
                        <CabinetLogoutIcon/>
                    </div>
                    <span className={`${styles.text} text-black dark:!text-light`}>
                         {t('cabinet.logout')}
                    </span>
                </button>
            </div>
        </div>
    )
}