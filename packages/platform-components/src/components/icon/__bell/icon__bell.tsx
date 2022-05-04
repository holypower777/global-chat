import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__bell.scss';

const IconBell = (props: SingleIconProps) => {
    return (
        <Icon ico="bell" {...props}>
            <svg viewBox="0 0 24 24">
                <path d="M16.3345 1.99982H7.66549C4.27649 1.99982 2.00049 4.37782 2.00049 7.91582V16.0838C2.00049 19.6218 4.27649 21.9998 7.66549 21.9998C8.07949 21.9998 8.41549 21.6638 8.41549 21.2498C8.41549 20.8358 8.07949 20.4998 7.66549 20.4998C5.13549 20.4998 3.50049 18.7668 3.50049 16.0838V7.91582C3.50049 5.23282 5.13549 3.49982 7.66549 3.49982H16.3345C18.8645 3.49982 20.5005 5.23282 20.5005 7.91582V16.0838C20.5005 18.7668 18.8645 20.4998 16.3335 20.4998H10.9535C10.5395 20.4998 10.2035 20.8358 10.2035 21.2498C10.2035 21.6638 10.5395 21.9998 10.9535 21.9998H16.3335C19.7225 21.9998 22.0005 19.6218 22.0005 16.0838V7.91582C22.0005 4.37782 19.7235 1.99982 16.3345 1.99982" />
                <path d="M15.9129 11.6546C16.1158 11.9602 16.2323 12.3142 16.25 12.6797L16.2367 12.7721C16.252 13.2723 16.0851 13.7611 15.7665 14.1491C15.3596 14.5881 14.8035 14.8624 14.205 14.919C12.7308 15.0809 11.2432 15.0809 9.76899 14.919C9.17927 14.8585 8.63278 14.5844 8.23414 14.1491C7.91031 13.7667 7.73837 13.2802 7.75061 12.7809V12.7193C7.775 12.3429 7.9006 11.9798 8.11436 11.6678L8.14985 11.6238C8.37216 11.3737 8.52503 11.0704 8.59345 10.744V10.3656V9.83766C8.65636 9.67872 8.8188 9.58126 8.98994 9.59978C9.16109 9.6183 9.29852 9.7482 9.32539 9.91685V10.3568V10.8231C9.32712 10.8392 9.32712 10.8554 9.32539 10.8715C9.23303 11.3254 9.02191 11.7472 8.71322 12.0946C8.59435 12.2824 8.52706 12.4978 8.51804 12.7193V12.8161C8.50819 13.1277 8.61216 13.4324 8.81082 13.674C9.08623 13.9561 9.45453 14.131 9.84884 14.1667C11.276 14.3207 12.7158 14.3207 14.1429 14.1667C14.548 14.1299 14.9253 13.9467 15.2031 13.652C15.392 13.4161 15.491 13.1216 15.4826 12.8205V12.7193C15.4735 12.497 15.4079 12.2806 15.2918 12.0902C14.9703 11.7468 14.7468 11.3246 14.6442 10.8671C14.6424 10.851 14.6424 10.8348 14.6442 10.8187V10.348V9.90805C14.5155 8.57941 13.1803 7.75671 12.018 7.75671C11.5239 7.75558 11.0379 7.88138 10.6074 8.12187C10.4882 8.19294 10.3394 8.19403 10.2192 8.12472C10.0989 8.0554 10.0262 7.92666 10.0295 7.78875C10.0327 7.65084 10.1114 7.52561 10.2348 7.46194C10.7683 7.16304 11.3698 7.00404 11.9826 7C13.5174 7 15.2386 8.08227 15.4338 9.82006V10.3392V10.7264C15.5004 11.0535 15.6535 11.3571 15.8774 11.6062C15.8906 11.6213 15.9025 11.6375 15.9129 11.6546ZM12.1258 16.2154C12.3865 16.1766 12.6207 16.0362 12.7766 15.8253H12.781C12.9158 15.6638 13.1571 15.6411 13.32 15.7747C13.4829 15.9084 13.5058 16.1477 13.371 16.3093C13.0389 16.7401 12.5249 16.9949 11.9781 17C11.4329 16.9936 10.9209 16.7389 10.5897 16.3093C10.4549 16.1477 10.4777 15.9084 10.6407 15.7747C10.8036 15.6411 11.0449 15.6638 11.1796 15.8253C11.2388 15.9038 11.309 15.9734 11.3881 16.0321C11.5996 16.1882 11.8651 16.2542 12.1258 16.2154Z" />
                <path d="M16.25 12.6797L16.349 12.694L16.3503 12.6845L16.3499 12.6749L16.25 12.6797ZM15.9129 11.6546L15.8272 11.7063L15.8296 11.71L15.9129 11.6546ZM16.2367 12.7721L16.1377 12.7579L16.1365 12.7665L16.1367 12.7752L16.2367 12.7721ZM15.7665 14.1491L15.84 14.2172L15.8438 14.2126L15.7665 14.1491ZM14.205 14.919L14.1956 14.8195L14.1941 14.8196L14.205 14.919ZM9.76899 14.919L9.77991 14.8196L9.77921 14.8196L9.76899 14.919ZM8.23414 14.1491L8.15776 14.2138L8.16039 14.2167L8.23414 14.1491ZM7.75061 12.7809L7.85061 12.7834V12.7809H7.75061ZM7.75061 12.7193L7.65061 12.7128V12.7193H7.75061ZM8.11436 11.6678L8.03629 11.6049L8.03187 11.6113L8.11436 11.6678ZM8.14985 11.6238L8.07501 11.5573L8.07202 11.5611L8.14985 11.6238ZM8.59345 10.744L8.69133 10.7645L8.69345 10.7543V10.744H8.59345ZM8.59345 9.83766L8.50047 9.80086L8.49345 9.81859V9.83766H8.59345ZM9.32539 9.91685H9.42539V9.90893L9.42415 9.90112L9.32539 9.91685ZM9.32539 10.8231H9.22482L9.22596 10.8338L9.32539 10.8231ZM9.32539 10.8715L9.42382 10.8916L9.42482 10.8822L9.32539 10.8715ZM8.71322 12.0946L8.63847 12.0282L8.63308 12.0342L8.62873 12.0411L8.71322 12.0946ZM8.51804 12.7193L8.41804 12.7152V12.7193H8.51804ZM8.51804 12.8161L8.61804 12.8193V12.8161H8.51804ZM8.81082 13.674L8.73329 13.7377L8.73926 13.7439L8.81082 13.674ZM9.84884 14.1667L9.85957 14.0673L9.85788 14.0671L9.84884 14.1667ZM14.1429 14.1667L14.1338 14.0671L14.1322 14.0673L14.1429 14.1667ZM15.2031 13.652L15.2761 13.7208L15.2812 13.7145L15.2031 13.652ZM15.4826 12.8205H15.3825L15.3826 12.8233L15.4826 12.8205ZM15.4826 12.7193H15.5827L15.5825 12.7152L15.4826 12.7193ZM15.2918 12.0902L15.3772 12.0382L15.3719 12.0294L15.3648 12.0218L15.2918 12.0902ZM14.6442 10.8671L14.5441 10.8779L14.5466 10.889L14.6442 10.8671ZM14.6442 10.8187L14.7442 10.8295V10.8187H14.6442ZM14.6442 9.90805H14.7446L14.7437 9.89841L14.6442 9.90805ZM12.018 7.75671L12.0178 7.85671H12.018V7.75671ZM10.6074 8.12187L10.5586 8.03453L10.5562 8.03597L10.6074 8.12187ZM10.2348 7.46194L10.2807 7.55086L10.2837 7.54918L10.2348 7.46194ZM11.9826 7V6.9L11.9819 6.9L11.9826 7ZM15.4338 9.82006H15.5344L15.5332 9.8089L15.4338 9.82006ZM15.4338 10.7264H15.3338V10.7364L15.3358 10.7463L15.4338 10.7264ZM15.8774 11.6062L15.9524 11.5401L15.9518 11.5394L15.8774 11.6062ZM12.7766 15.8253V15.7253H12.7262L12.6962 15.7659L12.7766 15.8253ZM12.781 15.8253V15.9253H12.8279L12.8578 15.8894L12.781 15.8253ZM13.371 16.3093L13.2942 16.2452L13.2918 16.2482L13.371 16.3093ZM11.9781 17L11.9769 17.1L11.9791 17.1L11.9781 17ZM10.5897 16.3093L10.6689 16.2482L10.6665 16.2452L10.5897 16.3093ZM11.1796 15.8253L11.2596 15.765L11.2564 15.7613L11.1796 15.8253ZM11.3881 16.0321L11.3286 16.1124L11.3287 16.1126L11.3881 16.0321ZM16.3499 12.6749C16.3313 12.2913 16.2091 11.9198 15.9962 11.5993L15.8296 11.71C16.0226 12.0005 16.1333 12.3371 16.1501 12.6846L16.3499 12.6749ZM16.3357 12.7864L16.349 12.694L16.151 12.6655L16.1377 12.7579L16.3357 12.7864ZM15.8438 14.2126C16.1776 13.806 16.3527 13.2935 16.3366 12.7691L16.1367 12.7752C16.1513 13.251 15.9925 13.7163 15.6892 14.0857L15.8438 14.2126ZM14.2144 15.0186C14.8372 14.9596 15.4162 14.6742 15.8398 14.2171L15.6931 14.0812C15.3031 14.502 14.7697 14.7651 14.1956 14.8195L14.2144 15.0186ZM9.75808 15.0185C11.2395 15.1811 12.7345 15.1811 14.2159 15.0185L14.1941 14.8196C12.7272 14.9807 11.2468 14.9807 9.77991 14.8196L9.75808 15.0185ZM8.16039 14.2167C8.57567 14.6701 9.1448 14.9555 9.75878 15.0185L9.77921 14.8196C9.21374 14.7615 8.6899 14.4987 8.30788 14.0816L8.16039 14.2167ZM7.65064 12.7785C7.6378 13.3023 7.81821 13.8127 8.15782 14.2138L8.31045 14.0845C8.0024 13.7207 7.83895 13.258 7.85058 12.7834L7.65064 12.7785ZM7.65061 12.7193V12.7809H7.85061V12.7193H7.65061ZM8.03187 11.6113C7.80798 11.9381 7.67637 12.3184 7.65082 12.7128L7.8504 12.7258C7.87363 12.3673 7.99323 12.0216 8.19686 11.7244L8.03187 11.6113ZM8.07202 11.5611L8.03653 11.6051L8.1922 11.7306L8.22769 11.6866L8.07202 11.5611ZM8.49558 10.7234C8.43074 11.0328 8.28587 11.3202 8.0751 11.5574L8.2246 11.6903C8.45845 11.4271 8.61932 11.1081 8.69133 10.7645L8.49558 10.7234ZM8.49345 10.3656V10.744H8.69345V10.3656H8.49345ZM8.49345 9.83766V10.3656H8.69345V9.83766H8.49345ZM9.0007 9.50036C8.78528 9.47705 8.5801 9.59967 8.50047 9.80086L8.68643 9.87446C8.73262 9.75777 8.85232 9.68547 8.97919 9.6992L9.0007 9.50036ZM9.42415 9.90112C9.3901 9.68741 9.21619 9.52367 9.0007 9.50036L8.97919 9.6992C9.10599 9.71292 9.20695 9.80899 9.22664 9.93258L9.42415 9.90112ZM9.42539 10.3568V9.91685H9.22539V10.3568H9.42539ZM9.42539 10.8231V10.3568H9.22539V10.8231H9.42539ZM9.42482 10.8822C9.42731 10.859 9.42731 10.8357 9.42482 10.8125L9.22596 10.8338C9.22693 10.8428 9.22693 10.8519 9.22596 10.8609L9.42482 10.8822ZM8.78798 12.161C9.10833 11.8005 9.32749 11.3627 9.42338 10.8915L9.2274 10.8516C9.13856 11.2881 8.93549 11.6939 8.63847 12.0282L8.78798 12.161ZM8.61796 12.7234C8.62626 12.5194 8.68821 12.3211 8.79772 12.1481L8.62873 12.0411C8.50049 12.2437 8.42786 12.4761 8.41812 12.7152L8.61796 12.7234ZM8.61804 12.8161V12.7193H8.41804V12.8161H8.61804ZM8.88806 13.6105C8.70475 13.3875 8.60891 13.1065 8.61799 12.8193L8.41809 12.8129C8.40747 13.1489 8.51957 13.4772 8.73357 13.7375L8.88806 13.6105ZM9.85788 14.0671C9.48718 14.0335 9.14108 13.8692 8.88237 13.6041L8.73926 13.7439C9.03139 14.0431 9.42189 14.2284 9.83981 14.2663L9.85788 14.0671ZM14.1322 14.0673C12.7122 14.2205 11.2796 14.2205 9.85957 14.0673L9.83811 14.2662C11.2724 14.4209 12.7194 14.4209 14.1536 14.2662L14.1322 14.0673ZM15.1303 13.5834C14.8693 13.8602 14.5147 14.0325 14.1338 14.0672L14.152 14.2663C14.5812 14.2273 14.9812 14.0331 15.2759 13.7206L15.1303 13.5834ZM15.3826 12.8233C15.3903 13.1007 15.2992 13.372 15.125 13.5895L15.2812 13.7145C15.4848 13.4602 15.5916 13.1426 15.5825 12.8177L15.3826 12.8233ZM15.3826 12.7193V12.8205H15.5826V12.7193H15.3826ZM15.2064 12.1422C15.3137 12.3182 15.3742 12.5181 15.3827 12.7234L15.5825 12.7152C15.5727 12.4759 15.5021 12.243 15.3772 12.0382L15.2064 12.1422ZM14.5466 10.889C14.6531 11.364 14.8851 11.8021 15.2188 12.1585L15.3648 12.0218C15.0554 11.6914 14.8404 11.2853 14.7417 10.8453L14.5466 10.889ZM14.5447 10.8081C14.5423 10.8313 14.5423 10.8546 14.5447 10.8778L14.7436 10.8565C14.7426 10.8475 14.7426 10.8384 14.7436 10.8294L14.5447 10.8081ZM14.5442 10.348V10.8187H14.7442V10.348H14.5442ZM14.5442 9.90805V10.348H14.7442V9.90805H14.5442ZM12.018 7.85671C13.1464 7.85671 14.4225 8.65612 14.5446 9.91769L14.7437 9.89841C14.6086 8.5027 13.2142 7.65671 12.018 7.65671V7.85671ZM10.6562 8.20917C11.0717 7.97707 11.5408 7.85562 12.0178 7.85671L12.0183 7.65671C11.507 7.65554 11.0042 7.7857 10.5586 8.03456L10.6562 8.20917ZM10.1692 8.21135C10.3208 8.29875 10.5083 8.29737 10.6586 8.20776L10.5562 8.03597C10.4681 8.0885 10.358 8.08932 10.2691 8.03808L10.1692 8.21135ZM9.92948 7.7864C9.92536 7.96118 10.0175 8.12391 10.1692 8.21135L10.2691 8.03808C10.1803 7.98689 10.127 7.89215 10.1294 7.79111L9.92948 7.7864ZM10.1889 7.37308C10.0333 7.45338 9.9336 7.61162 9.92948 7.7864L10.1294 7.79111C10.1318 7.69006 10.1895 7.59785 10.2806 7.55081L10.1889 7.37308ZM11.9819 6.9C11.3523 6.90415 10.7342 7.06752 10.1859 7.3747L10.2837 7.54918C10.8024 7.25855 11.3873 7.10393 11.9832 7.1L11.9819 6.9ZM15.5332 9.8089C15.3307 8.00645 13.5528 6.9 11.9826 6.9V7.1C13.4821 7.1 15.1465 8.15809 15.3344 9.83122L15.5332 9.8089ZM15.5338 10.3392V9.82006H15.3338V10.3392H15.5338ZM15.5338 10.7264V10.3392H15.3338V10.7264H15.5338ZM15.9518 11.5394C15.7397 11.3035 15.5948 11.016 15.5318 10.7064L15.3358 10.7463C15.406 11.0909 15.5673 11.4108 15.803 11.6731L15.9518 11.5394ZM15.9985 11.603C15.985 11.5807 15.9696 11.5597 15.9524 11.5401L15.8024 11.6724C15.8117 11.6829 15.82 11.6943 15.8272 11.7063L15.9985 11.603ZM12.6962 15.7659C12.5562 15.9552 12.3456 16.0815 12.111 16.1165L12.1405 16.3143C12.4273 16.2716 12.6853 16.1171 12.857 15.8848L12.6962 15.7659ZM12.781 15.7253H12.7766V15.9253H12.781V15.7253ZM13.3834 15.6974C13.1782 15.5291 12.8743 15.5574 12.7042 15.7613L12.8578 15.8894C12.9573 15.7701 13.136 15.7532 13.2566 15.8521L13.3834 15.6974ZM13.4478 16.3733C13.6182 16.169 13.5892 15.8662 13.3834 15.6974L13.2566 15.8521C13.3767 15.9506 13.3933 16.1264 13.2942 16.2452L13.4478 16.3733ZM11.9791 17.1C12.5564 17.0946 13.0992 16.8256 13.4502 16.3703L13.2918 16.2482C12.9785 16.6546 12.4935 16.8952 11.9772 16.9L11.9791 17.1ZM10.5105 16.3703C10.8605 16.8243 11.4013 17.0932 11.9769 17.1L11.9793 16.9C11.4645 16.8939 10.9813 16.6534 10.6688 16.2482L10.5105 16.3703ZM10.5772 15.6974C10.3715 15.8662 10.3424 16.169 10.5129 16.3733L10.6665 16.2452C10.5674 16.1264 10.584 15.9506 10.7041 15.8521L10.5772 15.6974ZM11.2564 15.7613C11.0864 15.5574 10.7825 15.5291 10.5772 15.6974L10.7041 15.8521C10.8247 15.7532 11.0034 15.7701 11.1028 15.8894L11.2564 15.7613ZM11.4477 15.9518C11.3763 15.8988 11.3129 15.8359 11.2595 15.7651L11.0998 15.8856C11.1648 15.9717 11.2418 16.0481 11.3286 16.1124L11.4477 15.9518ZM12.111 16.1165C11.8765 16.1514 11.6376 16.092 11.4475 15.9517L11.3287 16.1126C11.5615 16.2845 11.8537 16.357 12.1405 16.3143L12.111 16.1165Z" />
            </svg>

        </Icon>
    );
};

export default IconBell;