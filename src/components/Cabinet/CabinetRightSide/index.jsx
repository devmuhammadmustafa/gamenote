import styles from '@/styles/components/CabinetRightPart.module.css'

export default function CabinetRightSide({ children }) {
    return(
        <div className={styles.cabinetRightSide}>
            {children}
        </div>
    )
}