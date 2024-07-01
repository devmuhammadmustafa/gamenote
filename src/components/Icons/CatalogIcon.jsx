import React from 'react'

function CatalogIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="1em" viewBox="0 0 14 16" fill="none">
                <path d="M11.1546 5.23251C12.1735 5.23251 12.9996 4.40648 12.9996 3.38751C12.9996 2.36855 12.1735 1.54251 11.1546 1.54251C10.1356 1.54251 9.30957 2.36855 9.30957 3.38751C9.30957 4.40648 10.1356 5.23251 11.1546 5.23251Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.84501 5.23251C3.86397 5.23251 4.69 4.40648 4.69 3.38751C4.69 2.36855 3.86397 1.54251 2.84501 1.54251C1.82604 1.54251 1 2.36855 1 3.38751C1 4.40648 1.82604 5.23251 2.84501 5.23251Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.1546 14.4575C12.1735 14.4575 12.9996 13.6315 12.9996 12.6125C12.9996 11.5936 12.1735 10.7675 11.1546 10.7675C10.1356 10.7675 9.30957 11.5936 9.30957 12.6125C9.30957 13.6315 10.1356 14.4575 11.1546 14.4575Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.84501 14.4575C3.86397 14.4575 4.69 13.6315 4.69 12.6125C4.69 11.5936 3.86397 10.7675 2.84501 10.7675C1.82604 10.7675 1 11.5936 1 12.6125C1 13.6315 1.82604 14.4575 2.84501 14.4575Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default CatalogIcon