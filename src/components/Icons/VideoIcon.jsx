import React from "react";

function VideoIcon(props) {
  return (
    <span
      className={"GameNoteIcon " + (props?.dark ? "dark:text-green" : "")}
      {...props}
    >
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
        <g clipPath="url(#clip0_1548_23511)">
          <mask
            id="mask0_1548_23511"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <path d="M0 0H24V24H0V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1548_23511)">
            <path
              d="M2.8 4.39961H0.4C0.293913 4.39961 0.192172 4.35747 0.117157 4.28245C0.0421427 4.20744 0 4.1057 0 3.99961C0 3.89352 0.0421427 3.79178 0.117157 3.71677C0.192172 3.64175 0.293913 3.59961 0.4 3.59961H2.8C2.90609 3.59961 3.00783 3.64175 3.08284 3.71677C3.15786 3.79178 3.2 3.89352 3.2 3.99961C3.2 4.1057 3.15786 4.20744 3.08284 4.28245C3.00783 4.35747 2.90609 4.39961 2.8 4.39961Z"
              fill="currentColor"
            />
            <path
              d="M2.80039 20.3996C2.6943 20.3996 2.59256 20.3575 2.51755 20.2825C2.44253 20.2074 2.40039 20.1057 2.40039 19.9996V3.99961C2.40039 3.89352 2.44253 3.79178 2.51755 3.71677C2.59256 3.64175 2.6943 3.59961 2.80039 3.59961C2.90648 3.59961 3.00822 3.64175 3.08323 3.71677C3.15825 3.79178 3.20039 3.89352 3.20039 3.99961V19.9996C3.20039 20.1057 3.15825 20.2074 3.08323 20.2825C3.00822 20.3575 2.90648 20.3996 2.80039 20.3996Z"
              fill="currentColor"
            />
            <path
              d="M2.7998 12H1.1998C1.09372 12 0.991977 11.9579 0.916962 11.8828C0.841947 11.8078 0.799805 11.7061 0.799805 11.6V8.4C0.799805 8.29391 0.841947 8.19217 0.916962 8.11716C0.991977 8.04214 1.09372 8 1.1998 8H2.7998C3.0198 8 3.1998 8.18 3.1998 8.4V11.6C3.1998 11.7061 3.15766 11.8078 3.08265 11.8828C3.00763 11.9579 2.90589 12 2.7998 12ZM1.5998 11.2H2.3998V8.8H1.5998V11.2ZM2.7998 18.4H1.1998C1.09372 18.4 0.991977 18.3579 0.916962 18.2828C0.841947 18.2078 0.799805 18.1061 0.799805 18V14.8C0.799805 14.6939 0.841947 14.5922 0.916962 14.5172C0.991977 14.4421 1.09372 14.4 1.1998 14.4H2.7998C3.0198 14.4 3.1998 14.58 3.1998 14.8V18C3.1998 18.1061 3.15766 18.2078 3.08265 18.2828C3.00763 18.3579 2.90589 18.4 2.7998 18.4ZM1.5998 17.6H2.3998V15.2H1.5998V17.6ZM14.3998 20.4H5.5998C5.49372 20.4 5.39198 20.3579 5.31696 20.2828C5.24195 20.2078 5.1998 20.1061 5.1998 20V17.2C5.1998 17.0939 5.24195 16.9922 5.31696 16.9172C5.39198 16.8421 5.49372 16.8 5.5998 16.8H14.3998C14.5059 16.8 14.6076 16.8421 14.6826 16.9172C14.7577 16.9922 14.7998 17.0939 14.7998 17.2V20C14.7998 20.1061 14.7577 20.2078 14.6826 20.2828C14.6076 20.3579 14.5059 20.4 14.3998 20.4ZM5.9998 19.6H13.9998V17.6H5.9998V19.6Z"
              fill="currentColor"
            />
            <path
              d="M7.6002 20.3994C7.49411 20.3994 7.39237 20.3573 7.31735 20.2823C7.24234 20.2072 7.2002 20.1055 7.2002 19.9994V18.7994C7.2002 18.6933 7.24234 18.5916 7.31735 18.5166C7.39237 18.4416 7.49411 18.3994 7.6002 18.3994C7.70628 18.3994 7.80802 18.4416 7.88304 18.5166C7.95805 18.5916 8.0002 18.6933 8.0002 18.7994V19.9994C8.0002 20.1055 7.95805 20.2072 7.88304 20.2823C7.80802 20.3573 7.70628 20.3994 7.6002 20.3994ZM12.4002 20.3994C12.2941 20.3994 12.1924 20.3573 12.1174 20.2823C12.0423 20.2072 12.0002 20.1055 12.0002 19.9994V18.7994C12.0002 18.6933 12.0423 18.5916 12.1174 18.5166C12.1924 18.4416 12.2941 18.3994 12.4002 18.3994C12.5063 18.3994 12.608 18.4416 12.683 18.5166C12.7581 18.5916 12.8002 18.6933 12.8002 18.7994V19.9994C12.8002 20.1055 12.7581 20.2072 12.683 20.2823C12.608 20.3573 12.5063 20.3994 12.4002 20.3994ZM18.4002 20.3994C18.2941 20.3994 18.1924 20.3573 18.1174 20.2823C18.0423 20.2072 18.0002 20.1055 18.0002 19.9994V18.7994C18.0002 18.6933 18.0423 18.5916 18.1174 18.5166C18.1924 18.4416 18.2941 18.3994 18.4002 18.3994C18.5063 18.3994 18.608 18.4416 18.683 18.5166C18.7581 18.5916 18.8002 18.6933 18.8002 18.7994V19.9994C18.8002 20.1055 18.7581 20.2072 18.683 20.2823C18.608 20.3573 18.5063 20.3994 18.4002 20.3994ZM10.8002 20.3994C10.6941 20.3994 10.5924 20.3573 10.5174 20.2823C10.4423 20.2072 10.4002 20.1055 10.4002 19.9994V18.7994C10.4002 18.6933 10.4423 18.5916 10.5174 18.5166C10.5924 18.4416 10.6941 18.3994 10.8002 18.3994C10.9063 18.3994 11.008 18.4416 11.083 18.5166C11.1581 18.5916 11.2002 18.6933 11.2002 18.7994V19.9994C11.2002 20.0519 11.1898 20.104 11.1697 20.1525C11.1496 20.201 11.1202 20.2451 11.083 20.2823C11.0459 20.3194 11.0018 20.3489 10.9533 20.369C10.9047 20.3891 10.8527 20.3994 10.8002 20.3994ZM9.2002 20.3994C9.09411 20.3994 8.99237 20.3573 8.91735 20.2823C8.84234 20.2072 8.8002 20.1055 8.8002 19.9994V18.7994C8.8002 18.6933 8.84234 18.5916 8.91735 18.5166C8.99237 18.4416 9.09411 18.3994 9.2002 18.3994C9.30628 18.3994 9.40802 18.4416 9.48304 18.5166C9.55805 18.5916 9.6002 18.6933 9.6002 18.7994V19.9994C9.6002 20.1055 9.55805 20.2072 9.48304 20.2823C9.40802 20.3573 9.30628 20.3994 9.2002 20.3994Z"
              fill="currentColor"
            />
            <path
              d="M19.9998 20.3994H16.7998C16.6937 20.3994 16.592 20.3573 16.517 20.2823C16.4419 20.2072 16.3998 20.1055 16.3998 19.9994V17.1994C16.3998 17.0933 16.4419 16.9916 16.517 16.9166C16.592 16.8416 16.6937 16.7994 16.7998 16.7994H19.9998C20.1059 16.7994 20.2076 16.8416 20.2826 16.9166C20.3577 16.9916 20.3998 17.0933 20.3998 17.1994V19.9994C20.3998 20.1055 20.3577 20.2072 20.2826 20.2823C20.2076 20.3573 20.1059 20.3994 19.9998 20.3994ZM17.1998 19.5994H19.5998V17.5994H17.1998V19.5994ZM2.7998 7.19941H1.1998C1.09372 7.19941 0.991977 7.15727 0.916962 7.08226C0.841947 7.00724 0.799805 6.9055 0.799805 6.79941C0.799805 6.69333 0.841947 6.59159 0.916962 6.51657C0.991977 6.44156 1.09372 6.39941 1.1998 6.39941H2.7998C2.90589 6.39941 3.00763 6.44156 3.08265 6.51657C3.15766 6.59159 3.1998 6.69333 3.1998 6.79941C3.1998 6.9055 3.15766 7.00724 3.08265 7.08226C3.00763 7.15727 2.90589 7.19941 2.7998 7.19941ZM2.7998 13.5994H1.1998C1.09372 13.5994 0.991977 13.5573 0.916962 13.4823C0.841947 13.4072 0.799805 13.3055 0.799805 13.1994C0.799805 13.0933 0.841947 12.9916 0.916962 12.9166C0.991977 12.8416 1.09372 12.7994 1.1998 12.7994H2.7998C2.90589 12.7994 3.00763 12.8416 3.08265 12.9166C3.15766 12.9916 3.1998 13.0933 3.1998 13.1994C3.1998 13.3055 3.15766 13.4072 3.08265 13.4823C3.00763 13.5573 2.90589 13.5994 2.7998 13.5994ZM8.3998 15.9994C7.23326 15.9981 6.11487 15.5341 5.29 14.7092C4.46512 13.8843 4.00113 12.766 3.9998 11.5994C3.9998 9.17341 5.9738 7.19941 8.3998 7.19941C10.8258 7.19941 12.7998 9.17341 12.7998 11.5994C12.7998 14.0254 10.8258 15.9994 8.3998 15.9994ZM8.3998 7.99941C7.44535 8.00047 6.53029 8.3801 5.85539 9.055C5.18049 9.7299 4.80086 10.645 4.7998 11.5994C4.7998 13.5844 6.4148 15.1994 8.3998 15.1994C10.3848 15.1994 11.9998 13.5844 11.9998 11.5994C11.9998 9.61441 10.3848 7.99941 8.3998 7.99941Z"
              fill="currentColor"
            />
            <path
              d="M8.3998 13.2C8.08335 13.2 7.77401 13.1062 7.51089 12.9304C7.24777 12.7545 7.0427 12.5047 6.9216 12.2123C6.8005 11.9199 6.76881 11.5982 6.83055 11.2879C6.89229 10.9775 7.04467 10.6924 7.26843 10.4686C7.4922 10.2449 7.77729 10.0925 8.08766 10.0307C8.39803 9.96901 8.71974 10.0007 9.0121 10.1218C9.30446 10.2429 9.55435 10.448 9.73016 10.7111C9.90597 10.9742 9.99981 11.2836 9.99981 11.6C9.99981 12.482 9.2818 13.2 8.3998 13.2ZM8.3998 10.8C8.29468 10.8001 8.1906 10.8208 8.09351 10.8611C7.99641 10.9014 7.9082 10.9604 7.83391 11.0348C7.75963 11.1092 7.70072 11.1975 7.66055 11.2946C7.62038 11.3918 7.59974 11.4959 7.59981 11.601C7.59987 11.7061 7.62064 11.8102 7.66093 11.9073C7.70122 12.0044 7.76024 12.0926 7.83462 12.1669C7.909 12.2412 7.99728 12.3001 8.09443 12.3403C8.19158 12.3804 8.29568 12.4011 8.40081 12.401C8.61311 12.4009 8.81667 12.3164 8.9667 12.1662C9.11673 12.016 9.20094 11.8123 9.20081 11.6C9.20067 11.3877 9.11621 11.1841 8.96599 11.0341C8.81577 10.8841 8.61211 10.7999 8.3998 10.8Z"
              fill="currentColor"
            />
            <path
              d="M21.6004 17.5996H2.80039C2.6943 17.5996 2.59256 17.5575 2.51755 17.4825C2.44253 17.4074 2.40039 17.3057 2.40039 17.1996V5.99961C2.40039 5.77961 2.58039 5.59961 2.80039 5.59961H21.6004C22.9254 5.59961 24.0004 6.67561 24.0004 7.99961V15.1996C24.0004 16.5236 22.9244 17.5996 21.6004 17.5996ZM3.20039 16.7996H21.6004C22.4834 16.7996 23.2004 16.0816 23.2004 15.1996V7.99961C23.2004 7.57526 23.0318 7.1683 22.7318 6.86824C22.4317 6.56818 22.0247 6.39961 21.6004 6.39961H3.20039V16.7996Z"
              fill="currentColor"
            />
            <path
              d="M8.3998 10.8C8.29372 10.8 8.19198 10.7579 8.11696 10.6828C8.04195 10.6078 7.9998 10.5061 7.9998 10.4C7.9998 9.538 6.8998 8.8 5.9998 8.8C5.89372 8.8 5.79198 8.75786 5.71696 8.68284C5.64195 8.60783 5.5998 8.50609 5.5998 8.4C5.5998 8.29391 5.64195 8.19217 5.71696 8.11716C5.79198 8.04214 5.89372 8 5.9998 8C7.2948 8 8.7998 9.048 8.7998 10.4C8.7998 10.5061 8.75766 10.6078 8.68265 10.6828C8.60763 10.7579 8.50589 10.8 8.3998 10.8ZM10.7998 15.2C9.5048 15.2 7.9998 14.15 7.9998 12.8C7.9998 12.6939 8.04195 12.5922 8.11696 12.5172C8.19198 12.4421 8.29372 12.4 8.3998 12.4C8.50589 12.4 8.60763 12.4421 8.68265 12.5172C8.75766 12.5922 8.7998 12.6939 8.7998 12.8C8.7998 13.661 9.8998 14.4 10.7998 14.4C10.9059 14.4 11.0076 14.4421 11.0826 14.5172C11.1577 14.5922 11.1998 14.6939 11.1998 14.8C11.1998 14.9061 11.1577 15.0078 11.0826 15.0828C11.0076 15.1579 10.9059 15.2 10.7998 15.2ZM5.1998 14.4C5.09372 14.4 4.99198 14.3579 4.91696 14.2828C4.84195 14.2078 4.7998 14.1061 4.7998 14C4.7998 12.705 5.8478 11.2 7.1998 11.2C7.30589 11.2 7.40763 11.2421 7.48265 11.3172C7.55766 11.3922 7.5998 11.4939 7.5998 11.6C7.5998 11.7061 7.55766 11.8078 7.48265 11.8828C7.40763 11.9579 7.30589 12 7.1998 12C6.3378 12 5.5998 13.1 5.5998 14C5.5998 14.1061 5.55766 14.2078 5.48265 14.2828C5.40763 14.3579 5.30589 14.4 5.1998 14.4ZM9.5998 12C9.49372 12 9.39198 11.9579 9.31696 11.8828C9.24195 11.8078 9.1998 11.7061 9.1998 11.6C9.1998 11.4939 9.24195 11.3922 9.31696 11.3172C9.39198 11.2421 9.49372 11.2 9.5998 11.2C10.4618 11.2 11.1998 10.1 11.1998 9.2C11.1998 9.09391 11.2419 8.99217 11.317 8.91716C11.392 8.84214 11.4937 8.8 11.5998 8.8C11.7059 8.8 11.8076 8.84214 11.8826 8.91716C11.9577 8.99217 11.9998 9.09391 11.9998 9.2C11.9998 10.495 10.9518 12 9.5998 12Z"
              fill="currentColor"
            />
            <path
              d="M4.43981 11.4342C4.36052 11.4346 4.28293 11.4113 4.21693 11.3673C4.15093 11.3234 4.09952 11.2608 4.06926 11.1875C4.039 11.1142 4.03126 11.0336 4.04704 10.9559C4.06281 10.8782 4.10137 10.8069 4.15781 10.7512C4.60281 10.3062 5.27181 9.99122 5.94781 9.90922C6.71081 9.81522 7.38081 10.0152 7.83381 10.4682C7.90572 10.5438 7.94528 10.6444 7.94404 10.7488C7.94279 10.8531 7.90085 10.9528 7.82716 11.0266C7.75346 11.1004 7.65384 11.1425 7.54954 11.144C7.44523 11.1454 7.3445 11.106 7.26881 11.0342C6.99681 10.7622 6.55181 10.6422 6.04481 10.7032C5.53981 10.7632 5.04681 10.9932 4.72381 11.3162C4.64846 11.3915 4.54635 11.434 4.43981 11.4342ZM10.4918 13.3122C9.87881 13.3122 9.34581 13.1122 8.96581 12.7302C8.89686 12.6541 8.85982 12.5544 8.86235 12.4518C8.86488 12.3491 8.90678 12.2514 8.97938 12.1788C9.05199 12.1062 9.14973 12.0643 9.25238 12.0618C9.35503 12.0592 9.45472 12.0963 9.53081 12.1652C9.80281 12.4362 10.2488 12.5572 10.7558 12.4952C11.2598 12.4352 11.7538 12.2052 12.0758 11.8822C12.1509 11.8072 12.2527 11.765 12.3588 11.765C12.465 11.765 12.5668 11.8072 12.6418 11.8822C12.7169 11.9573 12.759 12.0591 12.759 12.1652C12.759 12.2714 12.7169 12.3732 12.6418 12.4482C12.1968 12.8932 11.5278 13.2082 10.8518 13.2892C10.7324 13.3044 10.6122 13.3121 10.4918 13.3122ZM7.83481 15.9592C7.78219 15.9592 7.73009 15.9487 7.68152 15.9285C7.63295 15.9082 7.58887 15.8786 7.55181 15.8412C6.63581 14.9262 6.31381 13.1202 7.26881 12.1642C7.30597 12.1271 7.35009 12.0976 7.39865 12.0775C7.44721 12.0573 7.49925 12.047 7.55181 12.047C7.60437 12.047 7.65641 12.0573 7.70497 12.0775C7.75352 12.0976 7.79764 12.1271 7.83481 12.1642C7.87197 12.2014 7.90145 12.2455 7.92157 12.2941C7.94168 12.3426 7.95203 12.3947 7.95203 12.4472C7.95203 12.4998 7.94168 12.5518 7.92157 12.6004C7.90145 12.6489 7.87197 12.6931 7.83481 12.7302C7.22481 13.3402 7.48081 14.6392 8.11681 15.2752C8.1731 15.331 8.21152 15.4023 8.22722 15.4801C8.24291 15.5578 8.23515 15.6384 8.20493 15.7117C8.17471 15.785 8.1234 15.8476 8.0575 15.8917C7.9916 15.9358 7.91409 15.9593 7.83481 15.9592ZM9.24781 11.1512C9.16843 11.1518 9.0907 11.1286 9.02455 11.0848C8.9584 11.0409 8.90683 10.9783 8.87645 10.905C8.84606 10.8316 8.83824 10.7509 8.85398 10.6731C8.86972 10.5953 8.90831 10.524 8.96481 10.4682C9.57481 9.85822 9.31881 8.55822 8.68281 7.92222C8.64265 7.88584 8.61031 7.84167 8.58774 7.79241C8.56517 7.74315 8.55284 7.68981 8.55151 7.63564C8.55018 7.58148 8.55986 7.5276 8.57998 7.47729C8.6001 7.42697 8.63023 7.38127 8.66855 7.34296C8.70686 7.30464 8.75256 7.27451 8.80288 7.25439C8.85319 7.23427 8.90706 7.22459 8.96123 7.22592C9.0154 7.22725 9.06874 7.23958 9.118 7.26215C9.16726 7.28472 9.21142 7.31706 9.24781 7.35722C10.1638 8.27322 10.4858 10.0782 9.53081 11.0342C9.49363 11.0714 9.44951 11.1008 9.40095 11.1209C9.35239 11.1409 9.30035 11.1513 9.24781 11.1512ZM17.9998 15.9992C16.8333 15.9979 15.7149 15.5339 14.89 14.709C14.0651 13.8842 13.6011 12.7658 13.5998 11.5992C13.5998 9.17322 15.5738 7.19922 17.9998 7.19922C20.4258 7.19922 22.3998 9.17322 22.3998 11.5992C22.3998 14.0252 20.4258 15.9992 17.9998 15.9992ZM17.9998 7.99922C17.0454 8.00028 16.1303 8.3799 15.4554 9.0548C14.7805 9.72971 14.4009 10.6448 14.3998 11.5992C14.3998 13.5842 16.0148 15.1992 17.9998 15.1992C19.9848 15.1992 21.5998 13.5842 21.5998 11.5992C21.5998 9.61422 19.9848 7.99922 17.9998 7.99922Z"
              fill="currentColor"
            />
            <path
              d="M18.0004 13.2C17.1184 13.2 16.4004 12.482 16.4004 11.6C16.4004 11.2836 16.4942 10.9742 16.67 10.7111C16.8459 10.448 17.0957 10.2429 17.3881 10.1218C17.6805 10.0007 18.0022 9.96901 18.3125 10.0307C18.6229 10.0925 18.908 10.2449 19.1318 10.4686C19.3555 10.6924 19.5079 10.9775 19.5696 11.2879C19.6314 11.5982 19.5997 11.9199 19.4786 12.2123C19.3575 12.5047 19.1524 12.7545 18.8893 12.9304C18.6262 13.1062 18.3168 13.2 18.0004 13.2ZM18.0004 10.8C17.7881 10.8003 17.5846 10.8849 17.4346 11.0352C17.2847 11.1855 17.2006 11.3892 17.2009 11.6015C17.2012 11.8138 17.2857 12.0173 17.4361 12.1672C17.5864 12.3172 17.7901 12.4013 18.0024 12.401C18.2147 12.4007 18.4182 12.3161 18.5681 12.1658C18.7181 12.0155 18.8022 11.8118 18.8019 11.5995C18.8016 11.3872 18.717 11.1837 18.5667 11.0338C18.4164 10.8838 18.2127 10.7997 18.0004 10.8Z"
              fill="currentColor"
            />
            <path
              d="M18.0004 10.8C17.8943 10.8 17.7926 10.7579 17.7175 10.6828C17.6425 10.6078 17.6004 10.5061 17.6004 10.4C17.6004 9.538 16.5004 8.8 15.6004 8.8C15.4943 8.8 15.3926 8.75786 15.3175 8.68284C15.2425 8.60783 15.2004 8.50609 15.2004 8.4C15.2004 8.29391 15.2425 8.19217 15.3175 8.11716C15.3926 8.04214 15.4943 8 15.6004 8C16.8954 8 18.4004 9.048 18.4004 10.4C18.4004 10.5061 18.3582 10.6078 18.2832 10.6828C18.2082 10.7579 18.1065 10.8 18.0004 10.8ZM20.4004 15.2C19.1054 15.2 17.6004 14.151 17.6004 12.8C17.6004 12.6939 17.6425 12.5922 17.7175 12.5172C17.7926 12.4421 17.8943 12.4 18.0004 12.4C18.1065 12.4 18.2082 12.4421 18.2832 12.5172C18.3582 12.5922 18.4004 12.6939 18.4004 12.8C18.4004 13.661 19.5004 14.4 20.4004 14.4C20.5065 14.4 20.6082 14.4421 20.6832 14.5172C20.7582 14.5922 20.8004 14.6939 20.8004 14.8C20.8004 14.9061 20.7582 15.0078 20.6832 15.0828C20.6082 15.1579 20.5065 15.2 20.4004 15.2ZM14.8004 14.4C14.6943 14.4 14.5926 14.3579 14.5175 14.2828C14.4425 14.2078 14.4004 14.1061 14.4004 14C14.4004 12.705 15.4494 11.2 16.8004 11.2C16.9065 11.2 17.0082 11.2421 17.0832 11.3172C17.1582 11.3922 17.2004 11.4939 17.2004 11.6C17.2004 11.7061 17.1582 11.8078 17.0832 11.8828C17.0082 11.9579 16.9065 12 16.8004 12C15.9384 12 15.2004 13.1 15.2004 14C15.2004 14.1061 15.1582 14.2078 15.0832 14.2828C15.0082 14.3579 14.9065 14.4 14.8004 14.4ZM19.2004 12C19.0943 12 18.9926 11.9579 18.9175 11.8828C18.8425 11.8078 18.8004 11.7061 18.8004 11.6C18.8004 11.4939 18.8425 11.3922 18.9175 11.3172C18.9926 11.2421 19.0943 11.2 19.2004 11.2C20.0624 11.2 20.8004 10.1 20.8004 9.2C20.8004 9.09391 20.8425 8.99217 20.9175 8.91716C20.9926 8.84214 21.0943 8.8 21.2004 8.8C21.3065 8.8 21.4082 8.84214 21.4832 8.91716C21.5582 8.99217 21.6004 9.09391 21.6004 9.2C21.6004 10.495 20.5514 12 19.2004 12Z"
              fill="currentColor"
            />
            <path
              d="M14.0399 11.435C13.9609 11.4348 13.8836 11.4113 13.8179 11.3673C13.7522 11.3232 13.7011 11.2607 13.6709 11.1876C13.6407 11.1145 13.6329 11.0342 13.6484 10.9566C13.6639 10.8791 13.702 10.8079 13.7579 10.752C14.2029 10.307 14.8719 9.99198 15.5479 9.90998C16.3109 9.81598 16.9819 10.016 17.4339 10.469C17.5059 10.5445 17.5454 10.6452 17.5442 10.7495C17.5429 10.8538 17.501 10.9535 17.4273 11.0273C17.3536 11.1012 17.254 11.1433 17.1497 11.1447C17.0454 11.1461 16.9446 11.1068 16.8689 11.035C16.5979 10.763 16.1509 10.643 15.6449 10.704C15.1399 10.764 14.6469 10.994 14.3239 11.317C14.2486 11.3923 14.1465 11.4347 14.0399 11.435ZM20.0919 13.313C19.4789 13.313 18.9459 13.113 18.5659 12.731C18.497 12.6549 18.46 12.5552 18.4625 12.4526C18.465 12.3499 18.5069 12.2522 18.5795 12.1796C18.6521 12.107 18.7499 12.0651 18.8525 12.0625C18.9552 12.06 19.0549 12.097 19.1309 12.166C19.4029 12.437 19.8489 12.558 20.3559 12.496C20.8599 12.436 21.3539 12.206 21.6759 11.883C21.7131 11.8458 21.7572 11.8163 21.8058 11.7962C21.8543 11.7761 21.9064 11.7658 21.9589 11.7658C22.0115 11.7658 22.0635 11.7761 22.1121 11.7962C22.1607 11.8163 22.2048 11.8458 22.2419 11.883C22.2791 11.9201 22.3086 11.9643 22.3287 12.0128C22.3488 12.0614 22.3592 12.1134 22.3592 12.166C22.3592 12.2185 22.3488 12.2706 22.3287 12.3191C22.3086 12.3677 22.2791 12.4118 22.2419 12.449C21.7969 12.894 21.1269 13.209 20.4519 13.29C20.3325 13.3052 20.2123 13.3128 20.0919 13.313ZM17.4339 15.96C17.3815 15.9598 17.3296 15.9493 17.2812 15.9291C17.2328 15.9088 17.1889 15.8792 17.1519 15.842C16.2359 14.927 15.9129 13.121 16.8689 12.165C16.944 12.0899 17.0458 12.0478 17.1519 12.0478C17.2581 12.0478 17.3599 12.0899 17.4349 12.165C17.51 12.24 17.5522 12.3418 17.5522 12.448C17.5522 12.5541 17.51 12.6559 17.4349 12.731C16.8249 13.341 17.0809 14.64 17.7169 15.276C17.7732 15.3318 17.8117 15.4031 17.8273 15.4808C17.843 15.5585 17.8353 15.6392 17.8051 15.7124C17.7748 15.7857 17.7235 15.8484 17.6576 15.8925C17.5917 15.9365 17.5132 15.96 17.4339 15.96ZM18.8479 11.152C18.7687 11.1523 18.6911 11.129 18.6251 11.0851C18.5591 11.0412 18.5077 10.9785 18.4774 10.9053C18.4471 10.832 18.4394 10.7513 18.4552 10.6736C18.4709 10.5959 18.5095 10.5247 18.5659 10.469C19.1749 9.85898 18.9199 8.55898 18.2829 7.92298C18.2428 7.8866 18.2104 7.84244 18.1879 7.79317C18.1653 7.74391 18.153 7.69058 18.1516 7.63641C18.1503 7.58224 18.16 7.52836 18.1801 7.47805C18.2002 7.42774 18.2304 7.38204 18.2687 7.34372C18.307 7.3054 18.3527 7.27527 18.403 7.25515C18.4533 7.23504 18.5072 7.22535 18.5614 7.22668C18.6155 7.22802 18.6689 7.24034 18.7181 7.26291C18.7674 7.28548 18.8116 7.31783 18.8479 7.35798C19.7639 8.27398 20.0869 10.079 19.1309 11.035C19.0938 11.0721 19.0496 11.1016 19.0011 11.1216C18.9525 11.1417 18.9005 11.152 18.8479 11.152Z"
              fill="currentColor"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1548_23511">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
}

export default VideoIcon;
