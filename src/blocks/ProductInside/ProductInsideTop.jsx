import styles from '@/styles/components/ProductInside.module.css'
import CarouselBar from "@/components/ProductInside/ProductInsideCarouselBar";
import ProductMainDetails from '@/components/ProductInside/ProductMainDetails';

export default function ProductInsideTop({ data }){
    return(
        <div className={`${styles.productTop} bg-white dark:bg-panel-dark`}>
            <CarouselBar type='premium' data={data}/>
            <ProductMainDetails data={data}/>
        </div>
    )
}