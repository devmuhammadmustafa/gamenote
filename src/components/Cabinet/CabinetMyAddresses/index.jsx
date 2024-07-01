import styles from "@/styles/components/CabinetRightPart.module.css"
import CabinetTitlePart from "@/components/Cabinet/CabinetTitlePart";
import DeleteIcon from "@/components/Icons/DeleteIcon";
import NewAddressForm from "@/components/Cabinet/CabinetMyAddresses/NewAddressForm";
import {useAtom} from "jotai";
import {AddAddressSuccess, AddressReload} from "@/store/atoms";
import {AnimatePresence, motion} from "framer-motion";
import ErrorBlock from "@/components/Cabinet/ErrorBlock";
import React, {useEffect, useState} from "react";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import {getCityList} from "@/pages/api/getCityList";
import {getCountryList} from "@/pages/api/getCountryList";
import {deleteAddress} from "@/pages/api/cabinet/deleteAddress";
import EmptyPanel from "@/blocks/EmptyPanel";
export default function CabinetMyAddresses({ data, title, error }){
    const { t } = useTranslation('common')
    const [cityData, setCityData] = useState([]);
    const [countryData, setCountryData] = useState([]);
    const [addressReload, setAddressReload] = useAtom(AddressReload)
    const [addressSuccess, setAddressSuccess] = useAtom(AddAddressSuccess)
    const [addressSuccessComponent, setAddressSuccessComponent] = useState(false)

    const router = useRouter();
    let locale = router.locale;
    useEffect(() => {
        const handleGetCityList = async () => {
            const response = await getCityList(locale);
            setCityData(response?.responseStatus?.data);
        };
        handleGetCityList();
    }, []);

    useEffect(() => {
        const handleGetCountryList = async () => {
            const response = await getCountryList(locale);
            setCountryData(response?.responseStatus?.data);
        };
        handleGetCountryList();
    }, []);

    const handleClick = () => {
        setAddressSuccessComponent(true)
    };
    const handleChildClick = () => {
        setAddressSuccessComponent(false)
    };


    const handleDeleteAddress = async (id) => {
        const response = await deleteAddress(locale, id);
        if(response?.responseStatus?.ResponseCode === 200){
            setAddressReload(addressReload + 1)
        }
    };


    return(
        <div className={styles.cabinetMyAddresses}>
            <CabinetTitlePart
                title={t('cabinet.addresses')}
            />

            <AnimatePresence>
                {addressSuccessComponent ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='relative z-[22]'
                    >
                        <NewAddressForm handleClick={handleChildClick}/>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='relative z-[22]'
                    >
                        <div className={styles.oldAddress}>
                            {data && !error
                                ? <table className={styles.table}>
                                    <tbody>
                                    {
                                        data?.map((address, i) => (
                                            <tr key={i} className={styles.row}>
                                                <td>
                                                <span className={`${styles.label} dark:!text-light`}>
                                                    {t('cabinet.country')}
                                                </span>
                                                    <span className={styles.value}>
                                                    {countryData.find(country => country.id == address.country_id)?.name[locale]}
                                                </span>
                                                </td>
                                                <td>
                                                <span className={`${styles.label} dark:!text-light`}>
                                                    {t('cabinet.city')}
                                                </span>
                                                    <span className={styles.value}>
                                                    {cityData.find(city => city.id == address.city_id)?.name[locale]}
                                                </span>
                                                </td>
                                                <td>
                                                <span className={`${styles.label} dark:!text-light`}>
                                                    {t('cabinet.street')}
                                                </span>
                                                    <span className={styles.value}>{address.address}</span>
                                                </td>
                                                <td>
                                                <span className={`${styles.label} dark:!text-light`}>
                                                    {t('cabinet.phone')}
                                                </span>
                                                    <span className={styles.value}>{address.phone}</span>
                                                </td>
                                                <td>
                                                    <button
                                                        onClick={handleDeleteAddress.bind(
                                                            this,
                                                            address.address_id
                                                        )}
                                                        className={`${styles.button} hover:bg-green text-black dark:text-green dark:hover:text-black`}>
                                                        <DeleteIcon />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                                : error ? <EmptyPanel maxContent title={title}/>
                                : <>Loading</>
                            }

                            <button className={styles.addAddressButton} onClick={handleClick}>
                                {t('cabinet.add_address')}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}