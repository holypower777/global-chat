import { Text } from 'platform-components';
import { ChildrenProps } from 'platform-components/src/typings';
import React from 'react';

import './watermark.scss';

const WatermarkProvider = ({ children }: ChildrenProps) => {
    return (
        <>
            {children}
            <div className="watermark">
                <Text 
                    id="common.watermark" 
                    size={Text.SIZE.S}
                />
                <a 
                    className="watermark-link" 
                    href="https://www.twitch.tv/kosti4eg"
                    target="_blank"
                >kosti4eg</a>
            </div>
        </>
    );
};

export default WatermarkProvider;
