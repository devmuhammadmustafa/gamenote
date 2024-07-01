import styles from '@/styles/components/ProductListTopTexts.module.css'
export default function ProductListTopTexts({ title, children }){
    return(
        <div className={styles.productListTopTexts}>
            <h6 className={`${styles.title} text-black dark:text-light`}>{title}</h6>
            <p className={`${styles.description} text-[#7D7D7D] dark:text-[#a5a5a5]`}>{children}</p>
        </div>
    )
}