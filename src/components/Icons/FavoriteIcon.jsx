import React from 'react'

function FavoriteIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none">
                <path d="M9.465 15.6075C9.21 15.6975 8.79 15.6975 8.535 15.6075C6.36 14.865 1.5 11.7675 1.5 6.51751C1.5 4.20001 3.3675 2.32501 5.67 2.32501C7.035 2.32501 8.2425 2.98501 9 4.00501C9.7575 2.98501 10.9725 2.32501 12.33 2.32501C14.6325 2.32501 16.5 4.20001 16.5 6.51751C16.5 11.7675 11.64 14.865 9.465 15.6075Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>  
        </span>
    )
}

export default FavoriteIcon