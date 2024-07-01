import Link from "next/link";
import styles from "@/styles/components/Breadcrumb.module.css";
import Container from "@/components/Container";

export default function BreadCrumb({ data }) {
  return (
    <div className={styles.breadcrumb}>
      <Container>
        <ul className={styles.list}>
          {data?.map(
            (item, index) =>
              item.link && (
                <li key={index} className={styles.item}>
                  <Link href={`${item.link}`} className={styles.link}>
                    {item.text}
                  </Link>
                </li>
              )
          )}
        </ul>
      </Container>
    </div>
  );
}
