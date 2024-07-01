import styles from "@/styles/components/Footer.module.css";
import GameNoteLogoIcon from "@/components/Icons/GameNoteLogoIcon";
import Link from "next/link";
import DarkModeButton from "@/components/DarkModeButton";
import LanguageSelect from "@/components/Select/LanguageSelect";
import PhoneIcon from "@/components/Icons/PhoneIcon";
import EnvelopeIcon from "@/components/Icons/EnvelopeIcon";
import IconButton from "@/components/Button/iconButton";
import WhatsappIcon from "@/components/Icons/WhatsappIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import FacebookIcon from "@/components/Icons/FacebookIcon";
import { useTranslation } from "next-i18next";
import { useAtom } from "jotai";
import { MenuList } from "@/store/atoms";
import Image from "next/image";

export default function FooterTop({ siteData }) {
  const [menuList, setMenuList] = useAtom(MenuList);
  const { t } = useTranslation("common");

  const MobileNumber = `tel:${siteData?.Mobile}`;
  const EmailAddress = `mailto:${siteData?.Email}`;
  const Whatsapp = `https://api.whatsapp.com/send?phone=${siteData?.Whatsapp}`;
  return (
    <div className={styles.footerTop}>
      <div className={styles.left}>
        <Image
          width={0}
          height={0}
          sizes="100vw"
          className="dark:hidden w-[150px]"
          src={siteData?.Logo_Light}
          alt=""
        />
        <Image
          width={0}
          height={0}
          sizes="100vw"
          className="hidden dark:block w-[150px]"
          src={siteData?.Logo_Dark}
          alt=""
        />
        <div className={`${styles.description} text-black dark:text-light`}>
          <div className={`${styles.socialIcons} flex mb-[20px]`}>
            <Link
              className="mr-[10px] last:mr-0"
              href={`${`https://api.whatsapp.com/send?phone=${siteData?.Whatsapp}`}`}
            >
              <IconButton
                icon={<WhatsappIcon style={{ fontSize: "15px" }} dark="true" />}
              />
            </Link>
            <Link
              className="mr-[10px] last:mr-0"
              href={`${siteData?.instagram}`}
            >
              <IconButton
                icon={
                  <InstagramIcon style={{ fontSize: "15px" }} dark="true" />
                }
              />
            </Link>
            <Link
              className="mr-[10px] last:mr-0"
              href={`${siteData?.facebook}`}
            >
              <IconButton
                icon={<FacebookIcon style={{ fontSize: "15px" }} dark="true" />}
              />
            </Link>
          </div>
          <Link
            href="https://maps.app.goo.gl/kFuhN4TUd1Layxnh9"
            className="font-medium mb-[15px] text-[12px] dark:text-green dark:hover:text-green-hover block"
          >
            {siteData?.Address}
          </Link>
          <p className="mb-[5px] text-[12px] text-[#A5A5A5] block max-w-[200px]">
            {t("footer_phone_text")}
          </p>
          <Link
            href={`tel:${siteData?.Mobile}`}
            className="font-medium mb-[15px] text-[12px] dark:text-green dark:hover:text-green-hover"
          >
            {siteData?.Mobile}
          </Link>
        </div>
      </div>

      <div className={styles.center}>
        {menuList?.map((item) => (
          <div className={styles.list} key={item.id}>
            <Link
              target={item.targetBlank ? "_blank" : ""}
              className={`${styles.topLink} text-black dark:text-light`}
              href={`/${
                item.slug === "notebooks"
                  ? "notebooks?category=106"
                  : item.slug === "monitors"
                  ? "monitors?category=148"
                  : item.slug === "accesories"
                  ? "accesories?category=115"
                  : item.slug
              }`}
            >
              {item.name}
            </Link>

            {item.slug == "notebooks"
              ? item.child?.map((item) => (
                  <Link
                    className={styles.mainLink}
                    href={`/notebooks?category=${item.id}`}
                    key={item.id}
                  >
                    {item.name}
                  </Link>
                ))
              : item.slug == "accesories"
              ? item.child?.map((item) => (
                  <Link
                    className={styles.mainLink}
                    href={`/accesories?category=${item.id}`}
                    key={item.id}
                  >
                    {item.name}
                  </Link>
                ))
              : item.slug == "monitors"
              ? item.child?.map((item) => (
                  <Link
                    className={styles.mainLink}
                    href={`/monitors?category=${item.id}`}
                    key={item.id}
                  >
                    {item.name}
                  </Link>
                ))
              : item.child?.map((item) => (
                  <Link
                    className={styles.mainLink}
                    href={`/${item.slug}`}
                    key={item.id}
                  >
                    {item.name}
                  </Link>
                ))}
          </div>
        ))}
      </div>

      <div className={styles.right}>
        <DarkModeButton className="mr-5" />
        <LanguageSelect id="footer-lang-select" />
      </div>

      <div className={styles.contactBottom}>
        <div className={styles.contactItems}>
          <Link
            href={`tel:${siteData?.Mobile}`}
            className="flex after-divider items-center mr-[48px] max-[600px]:text-[12px] max-[600px]:mr-[20px] after:-right-7 dark:text-light"
          >
            <PhoneIcon />
            <span className="inline-block pl-[6px] font-medium">
              {siteData?.Mobile}
            </span>
          </Link>
          <Link
            href={`mailto:${siteData?.Email}`}
            className="flex items-center max-[600px]:text-[12px] dark:text-light"
          >
            <EnvelopeIcon />
            <span className="inline-block pl-[6px] font-medium">
              {siteData?.Email}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
