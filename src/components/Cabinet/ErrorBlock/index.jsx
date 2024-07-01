import styles from '@/styles/components/CabinetRightPart.module.css'

export default function ErrorBlock({ data, blockType, modalType }){
    return(
        <>
            {
                blockType == 'success' && <div className={`${styles.successBlock} ${styles.modalType}`}>{data}</div>
            }
            {
                blockType == 'error' && <div className={`${styles.errorBlock} ${styles.modalType}`}>{data}</div>
            }
        </>
    )
}