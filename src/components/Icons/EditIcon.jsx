import React from 'react'

function EditIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none">
                <path d="M8.25 1.50006H6.75C3 1.50006 1.5 3.00006 1.5 6.75006V11.2501C1.5 15.0001 3 16.5001 6.75 16.5001H11.25C15 16.5001 16.5 15.0001 16.5 11.2501V9.75006" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.0284 2.26513L6.11844 8.17513C5.89344 8.40013 5.66844 8.84263 5.62344 9.16513L5.30094 11.4226C5.18094 12.2401 5.75844 12.8101 6.57594 12.6976L8.83344 12.3751C9.14844 12.3301 9.59094 12.1051 9.82344 11.8801L15.7334 5.97013C16.7534 4.95013 17.2334 3.76513 15.7334 2.26513C14.2334 0.765128 13.0484 1.24513 12.0284 2.26513Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.1836 3.11279C11.6861 4.90529 13.0886 6.30779 14.8886 6.81779" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default EditIcon