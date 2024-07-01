import styles from "@/styles/components/FullBanner.module.css";
import FullImage from "@/assets/images/fullimage.png";
import Image from "next/image";
import { useAtom } from "jotai";
import { SiteDataStore } from "@/store/atoms";
import Link from "next/link";
export default function FullBanner() {
  const [data] = useAtom(SiteDataStore);

  return (
    <Link
      href={data?.main_page_banner_link || "/"}
      className={styles.fullBanner}
    >
      <Image
        src={data?.main_page_banner}
        width={0}
        height={0}
        sizes="100vw"
        quality={100}
        alt="test"
      />
    </Link>
  );
}
