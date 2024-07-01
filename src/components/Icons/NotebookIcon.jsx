import React from 'react'

function NotebookIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M5.44498 1.5H12.5475C13.035 1.5 13.47 1.51502 13.86 1.56752C15.9375 1.80002 16.5 2.77501 16.5 5.44501V10.185C16.5 12.855 15.9375 13.83 13.86 14.0625C13.47 14.115 13.0425 14.13 12.5475 14.13H5.44498C4.95748 14.13 4.52248 14.115 4.13248 14.0625C2.05498 13.83 1.49249 12.855 1.49249 10.185V5.44501C1.49249 2.77501 2.05498 1.80002 4.13248 1.56752C4.52248 1.51502 4.95748 1.5 5.44498 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.185 6.23999H12.945" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.05499 10.5825H5.06998H12.9525" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.5 16.5H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.39603 6.22501H5.40276" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.87088 6.22501H7.87762" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default NotebookIcon