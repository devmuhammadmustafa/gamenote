import Container from "@/components/Container";
import styles from '@/styles/components/Footer.module.css'
import FooterComponent from "@/components/Footer";

export default function Footer({ siteData }){
    return(
        <div className={styles.footer}>
            <Container>
                <FooterComponent siteData={siteData}/>
            </Container>
        </div>
    )
}