import React from 'react'

function DownArrowIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none">
                <path d="M14.9401 6.71249L10.0501 11.6025C9.47256 12.18 8.52756 12.18 7.95006 11.6025L3.06006 6.71249" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default DownArrowIcon