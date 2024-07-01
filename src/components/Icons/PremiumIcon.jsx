import React from 'react'

function PremiumIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="1em" viewBox="0 0 18 18" fill="none">
                <path d="M1.5 11.4676V4.28264C1.5 3.28514 2.0775 3.04514 2.7825 3.75014L4.725 5.69264C5.0175 5.98514 5.4975 5.98514 5.7825 5.69264L8.4675 3.00014C8.76 2.70764 9.24 2.70764 9.525 3.00014L12.2175 5.69264C12.51 5.98514 12.99 5.98514 13.275 5.69264L15.2175 3.75014C15.9225 3.04514 16.5 3.28514 16.5 4.28264V11.4751C16.5 13.7251 15 15.2251 12.75 15.2251H5.25C3.18 15.2176 1.5 13.5376 1.5 11.4676Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default PremiumIcon