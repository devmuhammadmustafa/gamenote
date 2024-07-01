import React from 'react'

function PrivacyIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7.86749 1.6725L4.12499 3.07499C3.26249 3.39749 2.5575 4.41749 2.5575 5.33999V10.9125C2.5575 11.7975 3.1425 12.96 3.855 13.4925L7.07999 15.9C8.13749 16.695 9.87748 16.695 10.935 15.9L14.16 13.4925C14.8725 12.96 15.4575 11.7975 15.4575 10.9125V5.33999C15.4575 4.41749 14.7525 3.39749 13.89 3.07499L10.1475 1.6725C9.50999 1.44 8.48999 1.44 7.86749 1.6725Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.99998 8.19001C8.96998 8.19001 8.93248 8.19001 8.90248 8.19001C8.19748 8.16751 7.63498 7.5825 7.63498 6.87C7.63498 6.1425 8.22749 5.55 8.95499 5.55C9.68249 5.55 10.275 6.1425 10.275 6.87C10.2675 7.59 9.70498 8.16751 8.99998 8.19001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.5075 10.29C6.7875 10.77 6.7875 11.5575 7.5075 12.0375C8.325 12.585 9.6675 12.585 10.485 12.0375C11.205 11.5575 11.205 10.77 10.485 10.29C9.675 9.74251 8.3325 9.74251 7.5075 10.29Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default PrivacyIcon