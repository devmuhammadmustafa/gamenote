import styles from '@/styles/components/Catalog.module.css'
import Button from "@/components/Button";
import CatalogIcon from "@/components/Icons/CatalogIcon";
import CatalogInside from "@/components/CatalogButton/CatalogInside";
import {useAtom} from "jotai";
import {CatalogOpen, MenuOpen} from "@/store/atoms";
import CloseIcon from "@/components/Icons/CloseIcon";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import {ReactSVG} from "react-svg";
import {useState} from "react";
import { useTranslation } from 'next-i18next';

export default function CatalogButton({ data }){
    const { t } = useTranslation("common")
    const [open, setOpen] = useAtom(CatalogOpen)
    const [menuOpen, setMenuOpen] = useAtom(MenuOpen)

    const ToggleMenu = () => {
        setOpen(!open)

        !open ? setMenuOpen(false) : ''
    }

    const CloseMenu = () => {
        setOpen(false)
    }

    return(
        <div className={`${open ? styles.catalogOpen : ''} ${styles.catalog}`}>
            <div onClick={CloseMenu} className={styles.closeBar}></div>

            <div onClick={ToggleMenu} className={`bg-white dark:bg-panel-dark ${styles.catalogButton}`}>
                <Button icon={open ? <CloseIcon style={{ fontSize: '20px', background: 'transparent' }}/> : <CatalogIcon style={{ fontSize: '16px' }}/>} text={t('header.catalog')}/>
            </div>

            <style jsx>{`
                body *{
                  filter: 'blur(10px)';
                }
            `}</style>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: "linear",
                            duration: 0.1
                        }}
                        exit={{ opacity: 0 }}
                    >
                        <CatalogInside data={data}/>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}