import React from 'react'

function FacebookIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none">
                <path d="M16.5 12.1425C16.5 14.8725 14.8725 16.5 12.1425 16.5H11.25C10.8375 16.5 10.5 16.1625 10.5 15.75V11.4225C10.5 11.22 10.665 11.0475 10.8675 11.0475L12.1875 11.025C12.2925 11.0175 12.3825 10.9425 12.405 10.8375L12.6675 9.40501C12.69 9.27001 12.585 9.1425 12.4425 9.1425L10.845 9.165C10.635 9.165 10.47 9.00001 10.4625 8.79751L10.4325 6.96C10.4325 6.84 10.53 6.73501 10.6575 6.73501L12.4575 6.705C12.585 6.705 12.6825 6.60751 12.6825 6.48001L12.6525 4.67999C12.6525 4.55249 12.555 4.455 12.4275 4.455L10.4025 4.48501C9.1575 4.50751 8.16751 5.5275 8.19001 6.7725L8.2275 8.835C8.235 9.045 8.07001 9.21001 7.86001 9.21751L6.96 9.2325C6.8325 9.2325 6.73501 9.32999 6.73501 9.45749L6.75751 10.8825C6.75751 11.01 6.855 11.1075 6.9825 11.1075L7.88251 11.0925C8.09251 11.0925 8.25749 11.2575 8.26499 11.46L8.33249 15.735C8.33999 16.155 8.00249 16.5 7.58249 16.5H5.8575C3.1275 16.5 1.5 14.8725 1.5 12.135V5.8575C1.5 3.1275 3.1275 1.5 5.8575 1.5H12.1425C14.8725 1.5 16.5 3.1275 16.5 5.8575V12.1425Z" fill="currentColor"/>
            </svg>
        </span>
    )
}

export default FacebookIcon