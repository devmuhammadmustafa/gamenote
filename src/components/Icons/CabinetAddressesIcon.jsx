import React from 'react'

function CabinetAddressesIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.51797 2.36667L3.0263 5.86667C2.2763 6.45 1.66797 7.69167 1.66797 8.63334V14.8083C1.66797 16.7417 3.24297 18.325 5.1763 18.325H14.8263C16.7596 18.325 18.3346 16.7417 18.3346 14.8167V8.75C18.3346 7.74167 17.6596 6.45 16.8346 5.875L11.6846 2.26667C10.518 1.45 8.64297 1.49167 7.51797 2.36667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 14.9917V12.4917" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default CabinetAddressesIcon