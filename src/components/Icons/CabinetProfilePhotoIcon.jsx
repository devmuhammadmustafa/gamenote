import React from 'react'

function CabinetProfilePhotoIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                <path d="M12.0005 17C15.6625 17 18.8655 18.575 20.6075 20.925L18.7655 21.796C17.3475 20.116 14.8475 19 12.0005 19C9.15353 19 6.65353 20.116 5.23553 21.796L3.39453 20.924C5.13653 18.574 8.33853 17 12.0005 17ZM12.0005 2C13.3266 2 14.5984 2.52678 15.5361 3.46447C16.4737 4.40215 17.0005 5.67392 17.0005 7V10C17.0005 11.2885 16.503 12.5272 15.6119 13.4578C14.7208 14.3884 13.5048 14.9391 12.2175 14.995L12.0005 15C10.6744 15 9.40268 14.4732 8.465 13.5355C7.52732 12.5979 7.00053 11.3261 7.00053 10V7C7.00061 5.71154 7.49807 4.47284 8.38919 3.54222C9.28031 2.61161 10.4963 2.06092 11.7835 2.005L12.0005 2ZM12.0005 4C11.2353 3.99996 10.499 4.29233 9.94227 4.81728C9.38552 5.34224 9.05042 6.06011 9.00553 6.824L9.00053 7V10C8.99978 10.7809 9.30355 11.5313 9.8473 12.0918C10.3911 12.6523 11.1319 12.9787 11.9125 13.0016C12.6931 13.0245 13.4518 12.7422 14.0275 12.2145C14.6032 11.6869 14.9505 10.9556 14.9955 10.176L15.0005 10V7C15.0005 6.20435 14.6845 5.44129 14.1219 4.87868C13.5592 4.31607 12.7962 4 12.0005 4Z" fill="currentColor"/>
            </svg>
        </span>
    )
}

export default CabinetProfilePhotoIcon