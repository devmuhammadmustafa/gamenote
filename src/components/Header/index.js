import TopHeader from "./topHeader";
import MiddleHeader from "@/components/Header/middleHeader";
import BottomHeader from "@/components/Header/bottomHeader";
import { useAtom } from "jotai";
import { MenuList, MenuOpen, ModalVisibility } from "@/store/atoms";
import { AnimatePresence, motion } from "framer-motion";
import styles from "@/styles/components/Header.module.css";
import ModalBlock from "@/blocks/Modal";
import MobileMenu from "./mobileMenu";
import MobileNavbar from "@/components/Header/mobileNavbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getBanners } from "@/pages/api/getBanners";
import { getMenuList } from "@/pages/api/getMenuList";

export default function Header({ siteData }) {
  const [modalVisibility] = useAtom(ModalVisibility);
  const [menuList, setMenuList] = useAtom(MenuList);
  const [menuOpen] = useAtom(MenuOpen);
  const [data, setData] = useState([]);
  const router = useRouter();
  let locale = router.locale;
  useEffect(() => {
    const handleGetMenuList = async () => {
      const response = await getMenuList(locale);
      setData(response?.result);
      setMenuList(response?.result);
    };
    handleGetMenuList();
  }, [locale]);

  return (
    <header className={styles.header}>
      <TopHeader siteData={siteData} />
      <MiddleHeader data={data} siteData={siteData} />
      <BottomHeader data={data} siteData={siteData} />
      <AnimatePresence>
        {modalVisibility && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-[23]"
          >
            <ModalBlock />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-[22]"
          >
            <MobileMenu data={data} />
          </motion.div>
        )}
      </AnimatePresence>
      <MobileNavbar siteData={siteData} />
    </header>
  );
}
