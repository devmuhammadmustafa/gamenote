import React from 'react'

function CompareIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                <g clipPath="url(#clip0_111_4452)">
                    <path d="M7 20H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 6L12 5L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 3V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12L6 6L3 12C3 12.7956 3.31607 13.5587 3.87868 14.1213C4.44129 14.6839 5.20435 15 6 15C6.79565 15 7.55871 14.6839 8.12132 14.1213C8.68393 13.5587 9 12.7956 9 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12L18 6L15 12C15 12.7956 15.3161 13.5587 15.8787 14.1213C16.4413 14.6839 17.2044 15 18 15C18.7956 15 19.5587 14.6839 20.1213 14.1213C20.6839 13.5587 21 12.7956 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_111_4452">
                        <rect width="24" height="24" fill="currentColor"/>
                    </clipPath>
                </defs>
            </svg>
        </span>
    )
}

export default CompareIcon