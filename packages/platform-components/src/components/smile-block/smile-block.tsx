import b from 'b_';
import React from 'react';

import Text from '../text/text';

import './smile-block.scss';

interface SmileBlockProps {
    href: string;
    label: string;
}

const SmileBlock = ({ href, label }: SmileBlockProps) => {
    return (
        <div className="smile-block">
            <img alt={label} className={b('smile-block', 'smile')} src={href} />
            <Text weight={Text.WEIGHT.M}>{label}</Text>
        </div>
    );
};

export default SmileBlock;
