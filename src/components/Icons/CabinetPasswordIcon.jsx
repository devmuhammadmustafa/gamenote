import React from 'react'

function CabinetPasswordIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5013 18.3333H12.5013C16.668 18.3333 18.3346 16.6667 18.3346 12.5V7.5C18.3346 3.33333 16.668 1.66667 12.5013 1.66667H7.5013C3.33464 1.66667 1.66797 3.33333 1.66797 7.5V12.5C1.66797 16.6667 3.33464 18.3333 7.5013 18.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.5657 11.3417C12.624 12.2833 11.274 12.575 10.0824 12.2L7.92402 14.35C7.77402 14.5083 7.46569 14.6083 7.24069 14.575L6.24069 14.4417C5.90736 14.4 5.60736 14.0833 5.55736 13.7583L5.42403 12.7583C5.39069 12.5417 5.49902 12.2333 5.64902 12.075L7.79902 9.925C7.43236 8.73334 7.71569 7.38334 8.65736 6.44167C10.0074 5.09167 12.2074 5.09167 13.5657 6.44167C14.9157 7.78334 14.9157 9.98334 13.5657 11.3417Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.70833 13.5667L8 12.85" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.1621 8.91662H11.1696" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default CabinetPasswordIcon