import styles from '@/styles/components/Footer.module.css'
import FooterTop from "@/components/Footer/FooterTop";
import Copyright from "@/components/Footer/Copyright";

export default function FooterComponent({ siteData }){
    return(
        <div className={`${styles.footerComponent} bg-white dark:bg-panel-dark`}>
            <FooterTop siteData={siteData}/>
            <Copyright siteData={siteData}/>
        </div>
    )
}