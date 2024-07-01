import React from 'react'

function HomeIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.765 2.13L2.7225 5.28C2.0475 5.805 1.5 6.9225 1.5 7.77V13.3275C1.5 15.0675 2.9175 16.4925 4.6575 16.4925H13.3425C15.0825 16.4925 16.5 15.0675 16.5 13.335V7.875C16.5 6.9675 15.8925 5.805 15.15 5.2875L10.515 2.04C9.465 1.305 7.7775 1.3425 6.765 2.13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 13.4925V11.2425" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default HomeIcon