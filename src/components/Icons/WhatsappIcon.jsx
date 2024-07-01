import React from 'react'

function WhatsappIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none">
                <path d="M16.485 8.55734C16.23 4.20734 12.2775 0.854849 7.72497 1.60485C4.58997 2.12235 2.07748 4.66483 1.58998 7.79983C1.30498 9.61483 1.67999 11.3323 2.49749 12.7498L1.82998 15.2323C1.67998 15.7948 2.19747 16.3048 2.75247 16.1473L5.19747 15.4723C6.30747 16.1248 7.60497 16.4998 8.99247 16.4998C13.2225 16.4998 16.7325 12.7723 16.485 8.55734ZM12.66 11.7898C12.5925 11.9248 12.51 12.0523 12.405 12.1723C12.2175 12.3748 12.015 12.5248 11.79 12.6148C11.565 12.7123 11.3175 12.7573 11.055 12.7573C10.6725 12.7573 10.26 12.6673 9.83247 12.4798C9.39747 12.2923 8.96999 12.0448 8.54249 11.7373C8.10749 11.4223 7.70248 11.0698 7.31248 10.6873C6.92248 10.2973 6.57746 9.88483 6.26246 9.45733C5.95496 9.02983 5.70748 8.60233 5.52748 8.17483C5.34748 7.74733 5.25749 7.33485 5.25749 6.94485C5.25749 6.68985 5.30248 6.44234 5.39248 6.21734C5.48248 5.98484 5.62499 5.77485 5.82749 5.58735C6.06749 5.34735 6.32998 5.23485 6.60748 5.23485C6.71248 5.23485 6.81746 5.25734 6.91496 5.30234C7.01246 5.34734 7.10248 5.41484 7.16998 5.51234L8.03996 6.74233C8.10746 6.83983 8.15997 6.92234 8.18997 7.00484C8.22747 7.08734 8.24247 7.16233 8.24247 7.23733C8.24247 7.32733 8.21248 7.41735 8.15998 7.50735C8.10748 7.59735 8.03996 7.68734 7.94996 7.77734L7.66496 8.07733C7.61996 8.12233 7.60499 8.16734 7.60499 8.22734C7.60499 8.25734 7.61246 8.28734 7.61996 8.31734C7.63496 8.34734 7.64249 8.36984 7.64999 8.39234C7.71749 8.51984 7.83747 8.67733 8.00247 8.87233C8.17497 9.06733 8.355 9.26983 8.55 9.46484C8.7525 9.66733 8.94749 9.84733 9.14999 10.0198C9.34499 10.1848 9.50996 10.2973 9.63746 10.3648C9.65996 10.3723 9.68248 10.3873 9.70498 10.3948C9.73498 10.4098 9.76498 10.4098 9.80248 10.4098C9.86998 10.4098 9.915 10.3873 9.96 10.3423L10.245 10.0573C10.3425 9.95984 10.4325 9.89234 10.515 9.84734C10.605 9.79484 10.6875 9.76483 10.785 9.76483C10.86 9.76483 10.935 9.77984 11.0175 9.81734C11.1 9.85484 11.19 9.89985 11.28 9.96735L12.525 10.8523C12.6225 10.9198 12.69 11.0023 12.735 11.0923C12.7725 11.1898 12.795 11.2798 12.795 11.3848C12.75 11.5123 12.72 11.6548 12.66 11.7898Z" fill="currentColor"/>
            </svg>
        </span>
    )
}

export default WhatsappIcon