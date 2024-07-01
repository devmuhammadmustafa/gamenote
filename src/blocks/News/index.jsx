import styles from "@/styles/components/News.module.css";
import ProductListTopTexts from "@/components/ProductListTopTexts";
import Container from "@/components/Container";
import { useState } from "react";
import Image1 from "@/assets/images/news/news-1.jpg";
import Image2 from "@/assets/images/news/news-2.jpg";
import Image3 from "@/assets/images/news/news-3.jpg";
import Image from "next/image";
import Link from "next/link";
import CalendarIcon from "@/components/Icons/CalendarIcon";
import Button from "@/components/Button";

export default function NewsBlock({ newsData }) {
  return (
    <div className={styles.newsBlock}>
      <Container>
        <ProductListTopTexts title="Aktual xəbərlər"></ProductListTopTexts>

        {/*<div className={styles.listHeader}>*/}
        {/*    {*/}
        {/*        data.map(item => (*/}
        {/*            <button key={item.id} onClick={() => setActive(item.id)} className={`${styles.button} ${item.id == active ? styles.active : ''}`}>*/}
        {/*                {item.name}*/}
        {/*            </button>*/}
        {/*        ))*/}
        {/*    }*/}
        {/*</div>*/}

        <div className={styles.listBody}>
          {newsData?.result?.map((item) => (
            <div key={item.id} className={styles.item}>
              <Link href={item.slug}>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={styles.image}
                  src={item.cover}
                  alt="test"
                />
              </Link>
              <Link className={`${styles.title} line-clamp-2`} href={item.slug}>
                {item.title}
              </Link>

              <div className={`${styles.description} line-clamp-3`}>
                {item.description}
              </div>

              <div className={styles.bottom}>
                <div className={styles.left}>
                  <CalendarIcon />
                  <span className={styles.text}>{item.created_at}</span>
                </div>
                <div className={styles.right}>
                  <Link className={styles.link} href={item.slug}>
                    Ətraflı bax
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*<div className={styles.morePart}>*/}
        {/*    <Button text='Daha çoxuna bax' backgroundBlack='true'/>*/}
        {/*</div>*/}
      </Container>
    </div>
  );
}
