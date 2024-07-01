import styles from "@/styles/components/Header.module.css";
import CompareIcon from "@/components/Icons/CompareIcon";
import ShopIcon from "@/components/Icons/ShopIcon";
import FavoriteIcon from "@/components/Icons/FavoriteIcon";
import Link from "next/link";
import IconButton from "@/components/Button/iconButton";
import FilterIcon from "@/components/Icons/FilterIcon";
import { useAtom } from "jotai";
import { FilterModalVisibility, ModalVisibility } from "@/store/atoms";
import { useRouter } from "next/router";
import CallIcon from "@/components/Icons/CallIcon";
import HomeIcon from "@/components/Icons/HomeIcon";
import { useTranslation } from "next-i18next";
import WhatsappBorderIcon from "../Icons/WhatsappBorderIcon";

export default function MobileNavbar({ siteData }) {
  const { t } = useTranslation("common");
  const [modalVisibility, setModalVisibility] = useAtom(FilterModalVisibility);

  const router = useRouter();

  const handleOpenModal = () => {
    setModalVisibility(true);
  };

  const data = [
    {
      id: 1,
      link: "/",
      icon: <HomeIcon dark="true" style={{ fontSize: "18px" }} />,
      text: t("general.mobile_navbar.home"),
    },
    {
      id: 2,
      link: "/comparison",
      icon: <CompareIcon dark="true" style={{ fontSize: "24px" }} />,
      text: t("general.mobile_navbar.comparison"),
    },
    {
      id: 3,
      link: "/favorites",
      icon: <FavoriteIcon dark="true" style={{ fontSize: "18px" }} />,
      text: t("general.mobile_navbar.favorite"),
    },
    {
      id: 4,
      link: "/basket",
      icon: <ShopIcon dark="true" style={{ fontSize: "18px" }} />,
      text: t("general.mobile_navbar.basket"),
    },
  ];
  const whatsapp = `https://api.whatsapp.com/send?phone=${siteData?.Whatsapp}`;

  const filterRoutes = ["/notebooks", "/monitors", "/accesories"];

  console.log(filterRoutes?.find((item) => item === router.pathname));

  return (
    <>
      <div className={`${styles.mobileNavbar} bg-white dark:bg-panel-dark`}>
        {data.map((item) => (
          <Link className={styles.link} key={item.id} href={item.link}>
            <IconButton icon={item.icon} />
            <span className={`${styles.text} text-black dark:text-light`}>
              {item.text}
            </span>
          </Link>
        ))}
      </div>

      <div className={styles.mobileNavbarButtons}>
        <Link className={styles.callButton} href={whatsapp}>
          <WhatsappBorderIcon style={{ fontSize: "28px" }} />
        </Link>
        {filterRoutes?.find((item) => item == router.pathname) && (
          <IconButton
            onClick={handleOpenModal}
            darkBackground="true"
            icon={<FilterIcon style={{ color: "#fff" }} />}
          />
        )}
      </div>
    </>
  );
}
