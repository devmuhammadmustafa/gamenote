import styles from '@/styles/components/BasketList.module.css'
import {useEffect, useState} from "react";
import {useAtom} from "jotai";
import {ShippingMethod} from "@/store/atoms";

export default function InputRadio({ data, defaultValue, name, register, errors, clearErrors, setDefaultValue, required }){
    const [defValue, setDefValue] = useState()
    const [shippingMethod, setShippingMethod] = useAtom(ShippingMethod)

    useEffect(() => {
        setDefValue(defaultValue)
        setDefaultValue(name, defaultValue)
    },[defaultValue])
    const handleChange = (e) => {
        setDefValue(e.target.value)

        if(name == 'shippingMethod'){
            setShippingMethod(e.target.value)
        }
        if(name == 'address'){
            clearErrors(name, e.target.value)
            setDefaultValue(name, e.target.value)
        }

        if(name == 'payment_method'){
            clearErrors(name, e.target.value)
            setDefaultValue(name, e.target.value)
        }
    }

    return(
        <div className={styles.methodList}>
            {
                data?.map((item, i) => (
                    <div key={i} className={styles.methodItem}>
                        {
                            name == 'address' || name == 'payment_method' && register ?

                            <input
                                className={`${styles.input}`}
                                {...register(name, {required})}
                                type="radio"
                                name={name}
                                id={name + '_' + item.id}
                                value={name == 'address' ? item.name : item.id}
                                checked={name == 'address' ? item.name == defValue : item.id == defValue}
                                onChange={handleChange}
                            />
                            :
                            <input
                                className={styles.input}
                                type="radio"
                                name={name}
                                id={name + '_' + item.id}
                                value={item.id}
                                checked={item.id == defValue}
                                onChange={handleChange}
                            />
                        }
                        <label
                            className={`${styles.label} ${errors[name] ? '!border-red' : ''}`}
                            htmlFor={name + '_' + item.id}>
                            {item.name}
                        </label>
                    </div>
                ))
            }
        </div>
    )
}