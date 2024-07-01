import React from 'react'

function CabinetOrdersIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2.64062 6.2L9.99895 10.4583L17.3073 6.22498" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 18.0083V10.45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.2755 2.06667L3.82551 4.54169C2.81717 5.10003 1.99219 6.50001 1.99219 7.65001V12.3584C1.99219 13.5084 2.81717 14.9083 3.82551 15.4667L8.2755 17.9417C9.2255 18.4667 10.7838 18.4667 11.7338 17.9417L16.1839 15.4667C17.1922 14.9083 18.0172 13.5084 18.0172 12.3584V7.65001C18.0172 6.50001 17.1922 5.10003 16.1839 4.54169L11.7338 2.06667C10.7755 1.53333 9.2255 1.53333 8.2755 2.06667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.1661 11.0333V7.98335L6.25781 3.41665" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default CabinetOrdersIcon