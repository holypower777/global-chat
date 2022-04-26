import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__pause.scss';

const IconPause = (props: SingleIconProps) => {
    return (
        <Icon ico="pause" {...props}>
            <svg viewBox="0 0 24 24">
                <path d="M12 21.4273C13.7178 21.4266 15.4028 20.9567 16.8732 20.0684C18.3435 19.1801 19.5433 17.907 20.343 16.3867C21.1427 14.8664 21.512 13.1565 21.4111 11.4416C21.3101 9.72673 20.7426 8.07201 19.77 6.65605C19.6534 6.50367 19.4829 6.40175 19.2935 6.37124C19.1041 6.34073 18.9102 6.38395 18.7517 6.49202C18.5932 6.60009 18.4822 6.76479 18.4414 6.95224C18.4006 7.13969 18.4332 7.33565 18.5325 7.4998C19.6215 9.08843 20.0931 11.02 19.8587 12.9318C19.6242 14.8435 18.6998 16.6039 17.2592 17.8823C15.8185 19.1607 13.9606 19.8691 12.0346 19.8745C10.1085 19.8799 8.24672 19.1819 6.79892 17.9116C5.35111 16.6413 4.4169 14.8861 4.17174 12.9757C3.92659 11.0653 4.38736 9.13107 5.46751 7.53637C6.54766 5.94167 8.17288 4.7962 10.0379 4.31509C11.9029 3.83399 13.8794 4.05035 15.5962 4.92355C15.6843 4.98155 15.7835 5.02033 15.8876 5.03737C15.9916 5.05441 16.0981 5.04932 16.2 5.02244C16.302 4.99556 16.3971 4.94749 16.4792 4.88136C16.5613 4.81523 16.6286 4.73254 16.6766 4.63867C16.7246 4.5448 16.7522 4.44186 16.7578 4.33658C16.7633 4.23129 16.7466 4.12603 16.7087 4.02765C16.6708 3.92926 16.6126 3.83998 16.5378 3.76561C16.4631 3.69124 16.3735 3.63347 16.275 3.59605C14.9519 2.91918 13.4862 2.56819 12 2.5723C9.49964 2.5723 7.10172 3.56555 5.33372 5.33355C3.56572 7.10155 2.57247 9.49947 2.57247 11.9998C2.57247 14.5001 3.56572 16.8981 5.33372 18.6661C7.10172 20.434 9.49964 21.4273 12 21.4273V21.4273Z" />
                <path d="M14.4375 15.604C14.6364 15.604 14.8272 15.525 14.9678 15.3843C15.1085 15.2437 15.1875 15.0529 15.1875 14.854V9.14648C15.1875 8.94757 15.1085 8.75681 14.9678 8.61615C14.8272 8.4755 14.6364 8.39648 14.4375 8.39648C14.2386 8.39648 14.0478 8.4755 13.9072 8.61615C13.7665 8.75681 13.6875 8.94757 13.6875 9.14648V14.854C13.6875 15.0529 13.7665 15.2437 13.9072 15.3843C14.0478 15.525 14.2386 15.604 14.4375 15.604Z" />
                <path d="M9.5625 15.604C9.76141 15.604 9.95218 15.525 10.0928 15.3843C10.2335 15.2437 10.3125 15.0529 10.3125 14.854V9.14648C10.3125 8.94757 10.2335 8.75681 10.0928 8.61615C9.95218 8.4755 9.76141 8.39648 9.5625 8.39648C9.36359 8.39648 9.17282 8.4755 9.03217 8.61615C8.89152 8.75681 8.8125 8.94757 8.8125 9.14648V14.854C8.8125 15.0529 8.89152 15.2437 9.03217 15.3843C9.17282 15.525 9.36359 15.604 9.5625 15.604Z" />
            </svg>
        </Icon>
    );
};

export default IconPause;
