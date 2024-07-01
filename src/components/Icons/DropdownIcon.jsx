import React from 'react'

function DropdownIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="1em" viewBox="0 0 14 14" fill="none">
                <path d="M7.00008 12.8333C10.2217 12.8333 12.8334 10.2217 12.8334 6.99999C12.8334 3.77833 10.2217 1.16666 7.00008 1.16666C3.77842 1.16666 1.16675 3.77833 1.16675 6.99999C1.16675 10.2217 3.77842 12.8333 7.00008 12.8333Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.94092 6.26501L7.00008 8.31835L9.05925 6.26501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default DropdownIcon