import React from 'react'

function DeleteIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M15.75 4.485C13.2525 4.2375 10.74 4.11 8.235 4.11C6.75 4.11 5.265 4.185 3.78 4.335L2.25 4.485" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.1344 6.855L13.6469 14.4075C13.5644 15.585 13.4969 16.5 11.4044 16.5H6.58937C4.49687 16.5 4.42938 15.585 4.34688 14.4075L3.85938 6.855" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.75 12.375H10.2475" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.125 9.375H10.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default DeleteIcon