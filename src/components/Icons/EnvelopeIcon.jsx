import React from 'react'

function EnvelopeIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none">
                <path d="M11.3333 13.6666H4.66659C2.66659 13.6666 1.33325 12.6666 1.33325 10.3333V5.66665C1.33325 3.33331 2.66659 2.33331 4.66659 2.33331H11.3333C13.3333 2.33331 14.6666 3.33331 14.6666 5.66665V10.3333C14.6666 12.6666 13.3333 13.6666 11.3333 13.6666Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.3334 6L9.24674 7.66667C8.56008 8.21333 7.43341 8.21333 6.74674 7.66667L4.66675 6" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default EnvelopeIcon