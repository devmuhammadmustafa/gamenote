import Button from "@/components/Button";
import styles from '@/styles/components/Products.module.css'

export default function MoreButton(){
    return(
        <div className={styles.moreButton}>
            <Button text='Daha çoxuna bax' backgroundBlack={true}/>
        </div>
    )
}