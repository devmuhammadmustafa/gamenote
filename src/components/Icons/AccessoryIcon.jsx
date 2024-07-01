import React from 'react'

function AccessoryIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4.09501 13.8675V11.6775C4.09501 10.95 4.665 10.2975 5.47501 10.2975C6.20251 10.2975 6.85501 10.8675 6.85501 11.6775V13.785C6.85501 15.2475 5.64001 16.4625 4.17751 16.4625C2.71501 16.4625 1.50001 15.24 1.50001 13.785V9.16501C1.41751 4.95001 4.74751 1.53751 8.96251 1.53751C13.1775 1.53751 16.5 4.95001 16.5 9.08251V13.7025C16.5 15.165 15.285 16.38 13.8225 16.38C12.36 16.38 11.145 15.165 11.145 13.7025V11.595C11.145 10.8675 11.715 10.215 12.525 10.215C13.2525 10.215 13.905 10.785 13.905 11.595V13.8675" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}

export default AccessoryIcon