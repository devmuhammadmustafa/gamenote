import React from 'react'

function ShopIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="1em" viewBox="0 0 18 18" fill="none">
                <path d="M1.5 1.5H2.805C3.615 1.5 4.2525 2.1975 4.185 3L3.5625 10.47C3.4575 11.6925 4.42499 12.7425 5.65499 12.7425H13.6425C14.7225 12.7425 15.6675 11.8575 15.75 10.785L16.155 5.16C16.245 3.915 15.3 2.9025 14.0475 2.9025H4.36501" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.1875 16.5C12.7053 16.5 13.125 16.0803 13.125 15.5625C13.125 15.0447 12.7053 14.625 12.1875 14.625C11.6697 14.625 11.25 15.0447 11.25 15.5625C11.25 16.0803 11.6697 16.5 12.1875 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.1875 16.5C6.70527 16.5 7.125 16.0803 7.125 15.5625C7.125 15.0447 6.70527 14.625 6.1875 14.625C5.66973 14.625 5.25 15.0447 5.25 15.5625C5.25 16.0803 5.66973 16.5 6.1875 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.75 6H15.75" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default ShopIcon