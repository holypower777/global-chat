import React from 'react';

import Icon, { SingleIconProps } from '../icon';

const IconFeelsOkayMan = (props: SingleIconProps) => (
    <Icon ico="feelsOkayMan" {...props}>
        <svg data-testid="icon__feelsOkayMan" viewBox="0 0 12 12">
            <rect fill="url(#feelsOkayMan)" height="12" width="12" />
            <defs>
                <pattern
                    height="1"
                    id="feelsOkayMan"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                >
                    <use transform="scale(0.0357143)" xlinkHref="#image0_1157_6661" />
                </pattern>
                <image
                    height="28"
                    id="image0_1157_6661"
                    width="28"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    </Icon>
);

export default IconFeelsOkayMan;
