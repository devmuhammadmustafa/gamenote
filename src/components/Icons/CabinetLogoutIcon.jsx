import React from 'react'

function CabinetLogoutIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M14.5352 12.1833L16.6685 10.05L14.5352 7.91666" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.13281 10.05H16.6078" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.79948 16.6667C6.11615 16.6667 3.13281 14.1667 3.13281 9.99999C3.13281 5.83333 6.11615 3.33333 9.79948 3.33333" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default CabinetLogoutIcon