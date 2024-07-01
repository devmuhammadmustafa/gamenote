import React from 'react'

function NewsIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M16.5 3.5025V12.555C16.5 13.275 15.915 13.95 15.195 14.04L14.9475 14.07C13.3125 14.2875 10.7925 15.12 9.35248 15.915C9.15748 16.0275 8.83501 16.0275 8.63251 15.915L8.60248 15.9C7.16248 15.1125 4.65002 14.2875 3.02252 14.07L2.80499 14.04C2.08499 13.95 1.5 13.275 1.5 12.555V3.495C1.5 2.6025 2.22748 1.9275 3.11998 2.0025C4.69498 2.13 7.07998 2.92502 8.41498 3.75752L8.60248 3.87C8.81998 4.005 9.18002 4.005 9.39752 3.87L9.52501 3.78751C9.99751 3.49501 10.5975 3.2025 11.25 2.94V6.00002L12.75 5.0025L14.25 6.00002V2.08504C14.4525 2.04754 14.6475 2.02501 14.8275 2.01001H14.8725C15.765 1.93501 16.5 2.6025 16.5 3.5025Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 4.11749V15.3675" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.25 2.08502V6L12.75 5.00249L11.25 6V2.93999C12.2325 2.54999 13.3275 2.23502 14.25 2.08502Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default NewsIcon