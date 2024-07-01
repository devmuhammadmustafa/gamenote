import Container from "../Container";
import GameNoteLogoIcon from "../Icons/GameNoteLogoIcon";
import Link from "next/link";
import PhoneIcon from "@/components/Icons/PhoneIcon";
import EnvelopeIcon from "@/components/Icons/EnvelopeIcon";
import IconButton from "@/components/Button/iconButton";
import CompareIcon from "@/components/Icons/CompareIcon";
import FavoriteIcon from "@/components/Icons/FavoriteIcon";
import ShopIcon from "@/components/Icons/ShopIcon";
import Button from "@/components/Button";
import { useAtom } from "jotai";
import {
  ModalVisibility,
  ModalType,
  MenuOpen,
  PersonalInfo,
} from "@/store/atoms";
import styles from "@/styles/components/Header.module.css";
import CloseIcon from "../Icons/CloseIcon";
import MobileMenuIcon from "../Icons/MobileMenuIcon";
import UserIcon from "../Icons/UserIcon";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import CabinetProfilePhotoIcon from "@/components/Icons/CabinetProfilePhotoIcon";
import { getCookie } from "cookies-next";
import ProfileButton from "@/components/Button/ProfileButton";
import { useEffect, useState } from "react";
import Image from "next/image";
import { atomWithStorage } from "jotai/utils";
import MapIcon from "../Icons/MapIcon";

export default function TopHeader({ siteData }) {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [storeData] = useAtom(PersonalInfo);
  const [modalType, setModalType] = useAtom(ModalType);
  const [modalVisibility, setModalVisibility] = useAtom(ModalVisibility);
  const [menuOpen, setMenuOpen] = useAtom(MenuOpen);
  const token = getCookie("AccessToken");

  const [token_, setToken_] = useState("");

  const handleOpenLoginModal = () => {
    setModalType("login");
    setModalVisibility(true);
  };

  const handleToggleMenu = (e) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setToken_(token);
  }, [token]);

  const dataButton = [
    {
      icon: <CompareIcon dark="true" style={{ fontSize: "24px" }} />,
      link: "/comparison",
    },
    {
      icon: <FavoriteIcon dark="true" style={{ fontSize: "18px" }} />,
      link: "/favorites",
    },
    {
      icon: <ShopIcon dark="true" style={{ fontSize: "18px" }} />,
      link: "/basket",
    },
  ];

  return (
    <div className={styles.topHeader}>
      <Container>
        <div className={`${styles.self} bg-white dark:bg-panel-dark`}>
          <div className={styles.left}>
            <Link href="/" className={styles.logo}>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                className="dark:hidden"
                src={siteData?.Logo_Light}
                alt=""
              />
              <Image
                width={0}
                height={0}
                sizes="100vw"
                className="hidden dark:block"
                src={siteData?.Logo_Dark}
                alt=""
              />
            </Link>
            <div className={styles.contactItems}>
              <Link
                href={`tel:${siteData?.Mobile}`}
                className={`${styles.link} after-divider dark:text-light`}
              >
                <PhoneIcon />
                <span className="inline-block pl-[6px] font-medium">
                  {siteData?.Mobile}
                </span>
              </Link>
              <Link
                target="_blank"
                href="https://maps.app.goo.gl/kFuhN4TUd1Layxnh9"
                className={`${styles.link} dark:text-light`}
              >
                <MapIcon />
                <span className="inline-block pl-[6px] font-medium">
                  {siteData?.Address}
                </span>
              </Link>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.buttons}>
              {dataButton.map((item, i) => (
                <div key={i}>
                  <Link
                    key={i}
                    href={item.link}
                    prefetch={false}
                    passHref
                    className={`${styles.link} ${
                      router.pathname == item.link
                        ? `${styles.active} active-header-button`
                        : ""
                    }`}
                  >
                    <IconButton icon={item.icon} />
                  </Link>
                </div>
              ))}
            </div>

            <div
              className={`${styles.loginButton} before-divider flex items-center`}
            >
              {token_ ? (
                <ProfileButton />
              ) : (
                <Button
                  icon={<UserIcon />}
                  text={t("header.signin")}
                  onClickFunction={handleOpenLoginModal}
                />
              )}
            </div>

            <div className={`${styles.mobileMenuButton} before-divider`}>
              <IconButton
                onClick={handleToggleMenu}
                icon={
                  menuOpen ? (
                    <CloseIcon dark="true" style={{ fontSize: "18px" }} />
                  ) : (
                    <MobileMenuIcon dark="true" style={{ fontSize: "18px" }} />
                  )
                }
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
