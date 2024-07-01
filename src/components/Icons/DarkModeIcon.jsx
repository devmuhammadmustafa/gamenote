import React from 'react'

function DarkModeIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none">
                <path d="M1.52257 9.315C1.79257 13.1775 5.07007 16.32 8.99257 16.4925C11.7601 16.6125 14.2351 15.3225 15.7201 13.29C16.3351 12.4575 16.0051 11.9025 14.9776 12.09C14.4751 12.18 13.9576 12.2175 13.4176 12.195C9.75007 12.045 6.75007 8.9775 6.73507 5.355C6.72757 4.38 6.93007 3.4575 7.29757 2.6175C7.70257 1.6875 7.21507 1.245 6.27757 1.6425C3.30757 2.895 1.27507 5.8875 1.52257 9.315Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default DarkModeIcon