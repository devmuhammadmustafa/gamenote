import React from 'react'

function IncreaseIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M18.3332 10C18.3332 5.39763 14.6022 1.66666 9.99984 1.66666C5.39746 1.66666 1.6665 5.39762 1.6665 10C1.6665 14.6024 5.39746 18.3333 9.99984 18.3333C14.6022 18.3333 18.3332 14.6024 18.3332 10Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.9502 12.9417L11.8835 10L8.9502 7.05833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default IncreaseIcon