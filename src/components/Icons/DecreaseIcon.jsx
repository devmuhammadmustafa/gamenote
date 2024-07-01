import React from 'react'

function DecreaseIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M1.66683 10C1.66683 14.6024 5.39779 18.3333 10.0002 18.3333C14.6025 18.3333 18.3335 14.6024 18.3335 10C18.3335 5.39763 14.6025 1.66667 10.0002 1.66667C5.39779 1.66667 1.66683 5.39763 1.66683 10Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.0498 7.05833L8.11647 10L11.0498 12.9417" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default DecreaseIcon