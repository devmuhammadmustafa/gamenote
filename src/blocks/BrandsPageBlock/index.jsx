import Container from "@/components/Container";
import styles from "@/styles/components/BrandsPageBlock.module.css"
import ProductListTopTexts from "@/components/ProductListTopTexts";
import Image1 from "@/assets/images/brands-page/brands-p-1.png"
import Image2 from "@/assets/images/brands-page/brands-p-2.png"
import Image3 from "@/assets/images/brands-page/brands-p-3.png"
import Image4 from "@/assets/images/brands-page/brands-p-4.png"
import Image5 from "@/assets/images/brands-page/brands-p-5.png"
import Image6 from "@/assets/images/brands-page/brands-p-6.png"
import Image7 from "@/assets/images/brands-page/brands-p-7.png"
import Link from "next/link";
import Image from "next/image";
import {useTranslation} from "next-i18next";
export default function BrandsPageBlock({ data }){
    const { t } = useTranslation('common')
    return(
        <div className={styles.brandsPageBlock}>
            <Container>
                <ProductListTopTexts title={t('static_pages.brands')}/>

                <div className={`${styles.brandsList} dark:!bg-panel-dark`}>
                    {
                        data.map(item => (
                            <Link className={`${styles.item}`} key={item.id} href={item.link}>
                                <div className={styles.image}>
                                    <Image width={0} height={0} sizes='100vw' src={item.logo} alt='test'/>
                                </div>
                                <div className={styles.name}>
                                    {item.text}
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}