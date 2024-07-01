import React from 'react'

function AzerbaijanMapIcon (props) {
    return (
        <span className={'GameNoteIcon ' + (props?.dark ? 'dark:text-green' : '')} {...props}>
            <svg width="1em" viewBox="0 0 42 37" fill="none">
                <g clipPath="url(#clip0_60_1015)">
                    <path d="M41.0664 15.7368C40.9678 15.6172 40.8239 15.5178 40.7752 15.3793C40.6556 15.0408 40.4347 14.9128 40.1178 14.8358C39.8871 14.7799 39.5919 14.6665 39.4822 14.4763C39.2652 14.0943 38.9826 14.0265 38.6276 14.072C38.4034 14.0999 38.1832 14.1685 37.959 14.2C37.7572 14.2286 37.5475 14.2699 37.3503 14.2391C36.9966 14.1839 36.6417 14.1139 36.3642 13.8194C36.2847 13.7334 36.125 13.718 35.9981 13.6977C35.436 13.6068 35.1021 13.099 35.3052 12.5442C35.4544 12.1357 35.3815 11.8552 35.0561 11.6251C34.9864 11.5761 34.9003 11.5551 34.8286 11.509C34.6373 11.3852 34.4191 11.2865 34.2685 11.1193C34.0056 10.827 33.8136 10.4583 33.5395 10.1792C32.9038 9.53217 32.7592 8.66619 32.5817 7.82469C32.4765 7.32734 32.4502 6.82229 32.182 6.36762C31.9138 5.91294 31.7593 5.41348 31.3445 5.02805C30.96 4.66921 30.7437 4.10961 30.4374 3.65073C29.9457 2.91416 29.4513 2.18177 28.9353 1.46198C28.7841 1.25213 28.5553 1.10314 28.32 0.887691C27.9466 1.53753 27.5502 2.09014 27.2964 2.7064C27.0637 3.273 26.8245 3.77524 26.2782 4.04945C26.199 4.09016 26.1273 4.1456 26.0665 4.21314C25.7991 4.51176 25.4352 4.69146 25.0482 4.71608C24.594 4.75525 24.3422 5.01477 24.2226 5.47645C24.1509 5.75625 24.1154 6.0948 23.7223 6.11229C23.6783 6.11229 23.6349 6.23121 23.5974 6.29907C23.5311 6.40435 23.4735 6.51551 23.4252 6.63133C23.3594 6.816 23.2536 7.01255 23.2668 7.19582C23.2852 7.44904 23.2083 7.57355 22.9999 7.63301C22.5496 7.76172 22.1032 7.85895 21.6713 7.55257C21.4741 7.41267 21.248 7.33852 21.0271 7.51059C20.8062 7.68267 20.6649 7.59034 20.4913 7.40987C20.3631 7.27766 20.1732 7.20003 19.9983 7.13637C19.8563 7.08461 19.6953 7.09371 19.5434 7.07202C18.84 6.97409 18.4771 6.5271 18.4449 5.78562C18.4357 5.56808 18.3365 5.34634 18.2477 5.14348C18.096 4.79008 17.9242 4.44692 17.733 4.11591C17.6607 3.9928 17.47 3.83051 17.3787 3.85918C16.9612 3.99909 16.7246 3.88717 16.6654 3.41221C16.6575 3.37804 16.6417 3.34653 16.6194 3.32057C16.388 2.9897 16.1592 2.65745 15.92 2.33078C15.8794 2.29275 15.8302 2.26648 15.7773 2.25453C15.2613 2.05936 14.8807 1.73689 14.8084 1.11293C14.7902 1.03795 14.763 0.965782 14.7275 0.898194C14.5428 0.984233 14.3732 1.05488 14.2115 1.14162C14.0497 1.22836 13.89 1.33118 13.7335 1.43401C13.5087 1.5809 13.3542 1.51165 13.3187 1.23464C13.3102 1.1416 13.3102 1.04788 13.3187 0.954841C13.3319 0.739393 13.3043 0.518364 13.0611 0.514166C12.8178 0.509969 12.5043 0.293107 12.3202 0.707914C12.1762 1.03039 11.9724 1.32418 11.7864 1.62427C11.6457 1.85021 11.4413 1.92366 11.1869 1.89079C10.7267 1.83133 10.6248 1.92577 10.6104 2.41892C10.6009 2.66313 10.6119 2.90776 10.6432 3.14989C10.6623 3.2856 10.7491 3.41081 10.8155 3.5654L11.1553 3.33316C11.2309 3.58358 11.3216 3.79274 11.3525 4.01169C11.4058 4.37123 11.5708 4.61046 11.8508 4.8259C12.4997 5.32395 13.2898 5.56878 13.8847 6.16965C14.1608 6.44945 14.3449 6.77891 14.2391 7.16224C14.1174 7.61552 13.9873 8.06531 13.8584 8.51579C13.796 8.73683 13.6698 8.81517 13.4397 8.80678C13.3653 8.81352 13.2932 8.83733 13.2283 8.87658C13.1633 8.91582 13.1072 8.96957 13.0637 9.03412C12.8665 9.36778 12.806 9.38037 12.5444 9.08728C12.428 8.95647 12.2742 8.86274 12.1342 8.75642C11.8364 8.52838 11.5005 8.34092 11.2454 8.06812C10.851 7.64282 10.3829 7.53299 9.90567 7.87085C9.66047 8.04433 9.41001 8.12477 9.13128 8.02614C8.7053 7.87504 8.2767 7.73375 7.86781 7.53648C7.61275 7.40155 7.37863 7.2258 7.17363 7.01536C6.935 6.78452 6.96261 6.62433 7.22161 6.43196C7.26963 6.40447 7.32063 6.38334 7.37347 6.36902L7.32219 6.26059C7.07568 6.18434 6.83377 6.08432 6.58265 6.03675C5.89504 5.90804 5.42107 5.16447 4.64669 5.28338C4.57503 5.29458 4.4876 5.21344 4.41266 5.16517C4.10699 4.97351 3.82892 5.02526 3.56597 5.26029C3.15445 5.62683 2.75674 6.01367 2.32419 6.34943C2.00405 6.59845 1.8476 6.83907 2.09543 7.23359C2.12611 7.28229 2.13876 7.34135 2.13092 7.39938C2.05533 7.72815 2.22624 7.78482 2.47473 7.77223C2.5615 7.76803 2.67654 7.74563 2.7311 7.7932C2.93949 7.97577 3.28658 8.18073 3.28987 8.38219C3.29513 8.73194 2.93423 8.64521 2.68772 8.62702C2.65485 8.62702 2.62198 8.62702 2.58911 8.62702C2.3564 8.62142 2.30184 8.78301 2.34589 8.97677C2.36758 9.074 2.46947 9.2125 2.5431 9.2188C2.64368 9.22719 2.75214 9.12716 2.87836 9.06281C2.89924 9.06921 2.91854 9.08044 2.93489 9.09568C3.45027 9.62451 3.9972 10.019 4.76173 9.66717C4.79167 9.6488 4.82626 9.64087 4.86065 9.64446C4.89505 9.64805 4.92752 9.66299 4.95354 9.68721C4.97955 9.71142 4.9978 9.74368 5.00572 9.77948C5.01364 9.81527 5.01085 9.85281 4.99772 9.88683C4.91752 10.1883 5.07201 10.2932 5.27645 10.424C5.41976 10.5164 5.51311 10.6933 5.63801 10.8235C5.73793 10.927 5.83522 11.0494 5.96078 11.1033C6.3105 11.2641 6.39267 11.4215 6.1948 11.772C6.09488 11.9504 5.92002 12.0952 5.75173 12.212C5.48878 12.3959 5.18179 12.5156 4.92936 12.7142C4.58292 12.987 4.54151 13.5368 4.77093 13.8747C5.05097 14.2881 5.35074 14.6987 5.55978 15.1527C5.78986 15.6542 6.13563 15.9774 6.57081 16.2523C7.12301 16.6021 7.64693 16.9994 8.19058 17.3638C8.28401 17.4182 8.39187 17.4377 8.49692 17.4191C8.74146 17.3771 8.89134 17.4932 9.01624 17.6954C9.17795 17.9605 9.04057 18.7237 8.79339 19.0748C8.66991 19.2464 8.57842 19.4416 8.52387 19.6498C8.46208 19.9065 8.33783 20.0562 8.09855 20.0408C7.68506 20.0142 7.27421 19.931 6.86138 19.924C6.65205 19.9278 6.4476 19.9919 6.26974 20.1094C6.07253 20.2395 6.11723 20.4235 6.34337 20.5179C6.4246 20.5526 6.51154 20.5698 6.59908 20.5683C7.17626 20.5466 7.5457 20.8138 7.73897 21.4077C7.90923 21.9274 8.28393 22.2513 8.77959 22.387C8.93525 22.4219 9.07976 22.4991 9.199 22.6112C9.31825 22.7232 9.40816 22.8663 9.45997 23.0263C9.56317 23.3194 9.75973 23.4873 10.0312 23.6097C10.1857 23.6797 10.3224 23.8461 10.4184 24.0028C10.6321 24.3526 10.7589 24.4113 11.1244 24.2504C11.2454 24.1973 11.3591 24.0917 11.4814 24.0812C11.628 24.0693 11.8508 24.0812 11.9172 24.1756C12.1282 24.482 12.382 24.5023 12.6988 24.4743C12.8303 24.4624 13.0006 24.5771 13.1005 24.6841C13.1413 24.7296 13.0479 24.9185 13.0071 25.0395C12.9894 25.0919 12.921 25.1423 12.9269 25.1843C12.9927 25.6369 12.6818 25.6222 12.4122 25.7187C12.2407 25.7803 11.9994 25.9649 11.9895 26.1097C11.9777 26.2902 12.1401 26.6113 12.2834 26.6532C12.9947 26.8631 13.0979 27.7025 13.6533 28.0572C13.6599 28.0614 13.6474 28.0998 13.6435 28.1236C13.3523 28.2635 13.0966 28.5706 12.7232 28.2719C12.5799 28.1565 12.3491 28.0963 12.2328 28.3293C12.1164 28.5622 12.2446 28.7448 12.4346 28.8889C12.8908 29.2288 13.017 29.6065 12.8816 30.178C12.8415 30.3466 12.7573 30.5341 12.7935 30.6859C12.8592 30.9657 12.9408 31.3798 13.1222 31.4637C13.3851 31.5834 13.6165 31.2602 13.7697 30.9944C13.8354 30.8853 13.8676 30.7572 13.936 30.653C14.0221 30.5215 14.1056 30.3508 14.2305 30.29C14.8018 30.0102 15.0371 29.4128 15.4138 28.949C15.5755 28.7497 15.707 28.5489 16.0054 28.6363C16.1968 28.6877 16.3993 28.6621 16.574 28.5644C16.7487 28.4667 16.8833 28.3037 16.952 28.1068C17.1808 27.4276 17.5844 26.9827 18.2451 26.7421C18.5925 26.6077 18.8985 26.3744 19.1299 26.0678C19.4721 25.5936 19.9561 25.2577 20.5019 25.1157C20.6238 25.0703 20.7376 25.0031 20.8384 24.9171C21.125 24.7072 21.407 24.4897 21.6884 24.2714C21.9514 24.0672 22.2307 23.8783 22.4687 23.6419C22.5567 23.5471 22.6623 23.473 22.7788 23.4242C22.8953 23.3754 23.0201 23.3531 23.1451 23.3586C23.3023 23.3628 23.4935 23.3544 23.6112 23.2656C23.7841 23.1347 23.8939 23.1844 24.0102 23.3082C24.2489 23.5642 24.4855 23.823 24.713 24.0896C25.1731 24.6331 25.6379 25.1773 26.0882 25.732C26.2545 25.9377 26.386 26.1762 26.576 26.463C26.1756 26.6372 25.8529 26.8127 25.5163 26.917C24.8201 27.1366 24.5868 27.8669 25.0765 28.4391C25.2849 28.6825 25.5531 28.8749 25.8141 29.0588C26.0606 29.2337 26.3314 29.7143 26.2946 29.9941C26.2506 30.3305 26.01 30.5537 25.6011 30.6292C25.5255 30.6439 25.4479 30.6481 25.3736 30.667C24.9924 30.7628 24.6025 30.753 24.2804 31.114C23.9116 31.5274 23.8485 31.9023 24.2955 32.2486C24.6459 32.5207 25.039 32.7333 25.4216 32.9551C25.6234 33.0719 25.7339 33.209 25.7345 33.472C25.7345 33.9917 26.3347 34.4184 26.8028 34.2464C27.0092 34.1701 27.1275 34.2135 27.2038 34.4464C27.2681 34.6166 27.3544 34.7765 27.4601 34.9214C27.6955 35.2711 27.9742 35.5943 28.1767 35.9643C28.4909 36.54 28.8998 36.5694 29.3008 36.2651C29.663 35.9909 30.0094 35.8972 30.4242 35.9748C30.4387 35.9748 30.4584 35.9504 30.4393 35.965C30.4393 35.0284 30.4558 34.1212 30.4301 33.2146C30.4216 32.897 30.2875 32.585 30.2513 32.2654C30.2303 32.0807 30.2264 31.7862 30.3263 31.7121C30.6931 31.4414 31.1809 30.4215 31.0395 29.9584C30.9287 29.5935 30.9352 29.1997 31.0579 28.8392C31.1388 28.5762 31.2288 28.3929 31.5253 28.4195C31.7975 28.4447 31.9119 28.6077 31.9112 28.8812C31.9112 29.0728 31.9769 29.1694 32.1742 29.2008C32.4641 29.2463 32.5633 29.4611 32.4877 29.7604C32.422 30.0158 32.2248 30.0689 32.0315 30.1592C31.9447 30.1997 31.8829 30.3585 31.8626 30.4739C31.8547 30.5201 31.9848 30.6362 32.0598 30.6481C32.2879 30.6824 32.9144 30.1585 32.9472 29.9129C33.0346 29.2015 33.107 28.4881 33.1839 27.776C33.197 27.6598 33.1747 27.5255 33.2233 27.4318C33.3278 27.2289 33.4343 26.9813 33.6059 26.8827C33.7019 26.8274 33.9346 27.0226 34.0976 27.1268C34.1913 27.195 34.2793 27.2718 34.3606 27.3563C34.3724 27.3381 34.3849 27.3199 34.3974 27.3024L34.2383 27.0464C34.4579 26.8288 34.4861 26.3469 34.2883 26.1307C34.1206 25.9467 33.9175 25.7971 33.7663 25.6005C33.6638 25.4669 33.552 25.271 33.5691 25.1164C33.6388 24.4022 33.79 23.7083 34.3842 23.2508C34.54 23.1312 34.5624 23.027 34.4776 22.843C34.3704 22.6115 34.3987 22.3877 34.471 22.1184C34.5624 21.7819 34.7885 21.4468 34.6215 21.032C34.5657 20.8921 34.6873 20.6123 34.8076 20.4724C34.9713 20.2822 35.0265 20.1828 34.8431 19.9597C34.7353 19.8282 34.6794 19.4337 34.7116 19.4176C35.0778 19.2364 35.0896 18.9048 35.1113 18.5579C35.1152 18.4928 35.2033 18.4341 35.252 18.3718C35.7075 17.7821 36.3767 17.6024 37.0039 17.3456C37.3187 17.2162 37.6507 17.1561 37.7026 16.6839C37.7084 16.6307 37.7258 16.5796 37.7535 16.5348C37.7812 16.49 37.8183 16.4527 37.862 16.426C37.9057 16.3993 37.9546 16.3838 38.0049 16.3808C38.0552 16.3779 38.1055 16.3875 38.1516 16.409C38.3114 16.4706 38.4494 16.5951 38.6079 16.6615C38.7117 16.7049 38.8623 16.7469 38.9471 16.6993C39.59 16.3383 40.4498 16.3999 41.0007 16.9091C41.2584 17.1477 41.4668 17.4471 41.7021 17.7241C41.614 17.2211 41.5489 16.7049 41.4227 16.2054C41.3853 16.0243 41.1933 15.8893 41.0664 15.7368Z" fill="currentColor"/>
                    <path d="M9.08719 28.0586C9.22787 27.8858 9.18054 27.7193 9.02145 27.6109C8.59482 27.3171 8.16687 27.0233 7.71788 26.7715C7.52856 26.6638 7.44639 26.5456 7.55748 26.3721C7.78231 26.0223 7.79808 25.6572 7.76916 25.2466C7.72643 24.6429 7.53251 24.4561 6.96059 24.5855C6.4439 24.7017 5.93904 24.8437 5.51437 25.1997C5.29153 25.3851 5.08051 25.3753 4.87541 25.1451C4.80346 25.0579 4.70417 25.0015 4.59602 24.9864C4.28574 24.9822 4.1214 24.8122 4.00439 24.5282C3.89987 24.2715 3.74802 24.1728 3.49624 24.3883C3.39369 24.4764 3.22277 24.4743 3.08341 24.5135C3.05646 24.3659 2.98743 24.2113 3.00978 24.0721C3.11759 23.3894 2.70542 22.983 2.30311 22.5976C2.21305 22.5108 1.94353 22.594 1.77721 22.6556C1.58526 22.7256 1.42355 22.8948 1.23094 22.955C1.01466 23.0249 0.774722 22.9984 0.551215 23.0487C0.451295 23.0711 0.30996 23.1586 0.288267 23.246C0.222529 23.4887 0.473643 23.8161 0.676114 23.9455C0.864224 24.0631 1.01927 24.2322 1.1251 24.4352C1.2362 24.6681 1.23225 24.9591 1.32231 25.2046C1.42618 25.4886 1.51361 25.8719 1.72331 26.0027C2.42275 26.4378 2.77116 27.08 2.95391 27.8788C2.9756 27.9746 3.10773 28.0621 3.207 28.1145C3.56658 28.3069 4.0504 28.1796 4.32453 28.593C4.40407 28.714 4.42511 28.8784 4.49873 29.0057C4.72093 29.3862 5.09037 29.6807 5.08642 30.1949C5.08642 30.2648 5.21198 30.3572 5.29678 30.3984C5.494 30.4943 5.69778 30.6083 5.9088 30.6398C6.70619 30.7664 7.50424 30.8762 8.27534 31.1329C8.7539 31.2917 9.2397 31.4253 9.72156 31.5687C9.87407 31.6142 10.0279 31.6554 10.2783 31.7261C9.86026 30.7594 9.4987 29.8808 9.09836 29.0232C8.93534 28.6797 8.8203 28.3838 9.08719 28.0586Z" fill="currentColor"/>
                    <path d="M41.4713 15.8732C41.5055 15.9319 41.5949 15.9543 41.6587 15.9928C41.6823 15.9152 41.7441 15.8221 41.7244 15.762C41.6582 15.5925 41.5797 15.4288 41.4897 15.2723C41.4713 15.2374 41.4273 15.2178 41.3346 15.1422C41.3109 15.2737 41.2688 15.3654 41.2872 15.436C41.3309 15.5895 41.3928 15.7364 41.4713 15.8732Z" fill="currentColor"/>
                    <path d="M1.91387 9.48111C1.97961 9.51399 2.10451 9.41746 2.20246 9.37899L2.11831 9.17472C2.00721 9.10128 1.90269 9.00614 1.78174 8.96487C1.7469 8.95368 1.60227 9.15234 1.61674 9.17472C1.69562 9.29574 1.79357 9.42376 1.91387 9.48111Z" fill="currentColor"/>
                </g>
                <defs>
                <clipPath id="clip0_60_1015">
                    <rect width="41.4545" height="36" fill="white" transform="translate(0.272461 0.454712)"/>
                </clipPath>
                </defs>
            </svg>
        </span>
    )
}

export default AzerbaijanMapIcon