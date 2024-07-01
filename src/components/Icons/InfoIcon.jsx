import React from 'react'

function InfoIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none">
                <path d="M8.0013 1.33332C4.33464 1.33332 1.33464 4.33332 1.33464 7.99999C1.33464 11.6667 4.33464 14.6667 8.0013 14.6667C11.668 14.6667 14.668 11.6667 14.668 7.99999C14.668 4.33332 11.668 1.33332 8.0013 1.33332Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 10.6667L8 7.33332" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.00391 5.33334L7.99792 5.33334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default InfoIcon