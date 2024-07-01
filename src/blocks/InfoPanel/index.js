import styles from '@/styles/components/InfoBlock.module.css'
import Container from "@/components/Container";
import Info from "@/components/Info";
export default function InfoBlock() {
    return(
        <div className={`${styles.infoBlock} max-[550px]:hidden`}>
            <Container>
                <Info/>
            </Container>
        </div>
    )
}