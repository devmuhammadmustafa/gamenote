import React from 'react'

function DeliveryIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 10.5H9.75C10.575 10.5 11.25 9.825 11.25 9V1.5H4.5C3.375 1.5 2.39251 2.12249 1.88251 3.03749" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.5 12.75C1.5 13.995 2.505 15 3.75 15H4.5C4.5 14.175 5.175 13.5 6 13.5C6.825 13.5 7.5 14.175 7.5 15H10.5C10.5 14.175 11.175 13.5 12 13.5C12.825 13.5 13.5 14.175 13.5 15H14.25C15.495 15 16.5 13.995 16.5 12.75V10.5H14.25C13.8375 10.5 13.5 10.1625 13.5 9.75V7.5C13.5 7.0875 13.8375 6.75 14.25 6.75H15.2175L13.935 4.50751C13.665 4.04251 13.17 3.75 12.63 3.75H11.25V9C11.25 9.825 10.575 10.5 9.75 10.5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 16.5C6.82843 16.5 7.5 15.8284 7.5 15C7.5 14.1716 6.82843 13.5 6 13.5C5.17157 13.5 4.5 14.1716 4.5 15C4.5 15.8284 5.17157 16.5 6 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16.5C12.8284 16.5 13.5 15.8284 13.5 15C13.5 14.1716 12.8284 13.5 12 13.5C11.1716 13.5 10.5 14.1716 10.5 15C10.5 15.8284 11.1716 16.5 12 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.5 9V10.5H14.25C13.8375 10.5 13.5 10.1625 13.5 9.75V7.5C13.5 7.0875 13.8375 6.75 14.25 6.75H15.2175L16.5 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.5 6H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.5 8.25H4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.5 10.5H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default DeliveryIcon