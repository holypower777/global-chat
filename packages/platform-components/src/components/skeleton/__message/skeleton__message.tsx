import b from 'b_';
import React from 'react';

import './skeleton__message.scss';

const SkeletonMessage = () => {
    return (
        <>
            <div className={b('skeleton', 'message')} />
            <div className={b('skeleton', 'message')} />
            <div className={b('skeleton', 'message-long')} />
        </>
    );
};

export default SkeletonMessage;
