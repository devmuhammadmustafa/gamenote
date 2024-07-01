import styles from "@/styles/components/EmptyPanel.module.css";
import Container from "@/components/Container";
import Empty_Image from "@/assets/images/empty.svg";
import Image from "next/image";
export default function EmptyPanel({ title, children, maxContent }) {
  return (
    <div className={`${styles.emptyPanel} dark:bg-panel-dark`}>
      <Container>
        <div className={styles.emptySelf}>
          <div className={styles.left}>
            <Image src={Empty_Image} alt="test" />
          </div>
          <div className={styles.right}>
            <div
              className={`${styles.title} ${
                maxContent ? "w-max" : ""
              } dark:!text-light`}
            >
              {title}
            </div>
            <div className={styles.description}>{children}</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
