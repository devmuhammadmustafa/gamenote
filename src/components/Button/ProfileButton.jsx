import styles from "@/styles/components/Header.module.css";
import CabinetProfilePhotoIcon from "@/components/Icons/CabinetProfilePhotoIcon";
import Link from "next/link";
import { useAtom } from "jotai";
import { PersonalInfo } from "@/store/atoms";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";

export default function ProfileButton() {
  const [storeData] = useAtom(PersonalInfo);
  const router = useRouter();
  const orderNumber = router.query.slug;

  return (
    <Link
      href="/cabinet/personal-info/"
      className={styles.profilePart}
    >
      <div className={styles.image}>
        <CabinetProfilePhotoIcon />
      </div>
      <span className={`${styles.name} text-black dark:text-white`}>
        {storeData?.fullname}
      </span>
    </Link>
  );
}
