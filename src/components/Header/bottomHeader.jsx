import Search from "@/components/Search";
import Container from "@/components/Container";
import CatalogButton from "@/components/CatalogButton";
import styles from '@/styles/components/Header.module.css'

export default function BottomHeader({ data, siteData }){
    return(
        <div className={styles.bottomHeader}>
            <Container>
                <div className={styles.self}>
                    <CatalogButton data={data}/>
                    <Search siteData={siteData}/>
                </div>
            </Container>
        </div>
    )
}