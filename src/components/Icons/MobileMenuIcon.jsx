import React from 'react'

function MobileMenuIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2.25 5.25H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2.25 9H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M2.25 12.75H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        </span>
    )
}

export default MobileMenuIcon