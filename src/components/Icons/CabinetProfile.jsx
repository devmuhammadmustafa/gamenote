import React from 'react'

function CabinetProfileIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill='none'>
                <path d="M15.1161 18.0167C14.3828 18.2333 13.5161 18.3333 12.4995 18.3333H7.49948C6.48281 18.3333 5.61615 18.2333 4.88281 18.0167C5.06615 15.85 7.29115 14.1416 9.99948 14.1416C12.7078 14.1416 14.9328 15.85 15.1161 18.0167Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.5013 1.66666H7.5013C3.33464 1.66666 1.66797 3.33333 1.66797 7.5V12.5C1.66797 15.65 2.61797 17.375 4.88464 18.0167C5.06797 15.85 7.29297 14.1416 10.0013 14.1416C12.7096 14.1416 14.9346 15.85 15.118 18.0167C17.3846 17.375 18.3346 15.65 18.3346 12.5V7.5C18.3346 3.33333 16.668 1.66666 12.5013 1.66666ZM10.0013 11.8083C8.3513 11.8083 7.01797 10.4667 7.01797 8.81668C7.01797 7.16668 8.3513 5.83333 10.0013 5.83333C11.6513 5.83333 12.9846 7.16668 12.9846 8.81668C12.9846 10.4667 11.6513 11.8083 10.0013 11.8083Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.9823 8.81668C12.9823 10.4667 11.649 11.8083 9.99896 11.8083C8.34896 11.8083 7.01562 10.4667 7.01562 8.81668C7.01562 7.16668 8.34896 5.83334 9.99896 5.83334C11.649 5.83334 12.9823 7.16668 12.9823 8.81668Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default CabinetProfileIcon