import React from 'react'

function SearchIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="1em" viewBox="0 0 18 18" fill="none">
                <path d="M8.25 15C11.9779 15 15 11.9779 15 8.25C15 4.52208 11.9779 1.5 8.25 1.5C4.52208 1.5 1.5 4.52208 1.5 8.25C1.5 11.9779 4.52208 15 8.25 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.1973 15.5174C14.5948 16.7174 15.5023 16.8374 16.1998 15.7874C16.8373 14.8274 16.4173 14.0399 15.2623 14.0399C14.4073 14.0324 13.9273 14.6999 14.1973 15.5174Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default SearchIcon