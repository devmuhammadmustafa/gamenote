import LeftTopBanner from "@/components/Banners/LeftTopBanner";
import styles from "@/styles/components/Banners.module.css"
import Container from "@/components/Container";
import RightTopBannerSlider from "@/components/Banners/RightTopBannerSlider";

export default function Banners(){
    return(
        <div className={styles.bannersBlock}>
            <Container>
                <div className={styles.bannersBlockSelf}>
                    <LeftTopBanner/>
                    <RightTopBannerSlider/>
                </div>
            </Container>
        </div>
    )
}