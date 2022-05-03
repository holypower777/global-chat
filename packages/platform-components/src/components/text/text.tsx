import b from 'b_';
import cx from 'classnames';
import { SimpleCallback } from 'platform-components/src/typings';
import React, { CSSProperties, ReactNode } from 'react';
import { useIntl } from 'react-intl';

import { TEXT_SIZE, TEXT_TAG, TEXT_WEIGHT } from '../constants';

import './text.scss';

type MessageFormatPrimitiveValue = string | number | boolean | null | undefined

interface TextProps {
    children?: ReactNode | Array<ReactNode>;
    id?: string;
    values?: Record<string, MessageFormatPrimitiveValue>;
    tag?: TEXT_TAG;
    size?: TEXT_SIZE;
    weight?: TEXT_WEIGHT;
    uppercase?: boolean;
    center?: boolean;
    ellipsis?: boolean;
    style?: CSSProperties;
    handleClick?: SimpleCallback;
    mix?: string;
}

const Text = ({
    id,
    values = {},
    size = TEXT_SIZE.M,
    weight = TEXT_WEIGHT.S,
    tag = TEXT_TAG.SPAN,
    children,
    uppercase,
    center = false,
    ellipsis,
    handleClick,
    mix,
    ...props
}: TextProps) => {
    const intl = useIntl();
    const className = cx(b('text', { ellipsis, size, weight, uppercase, center }), mix);
    const content = id ? intl.formatMessage({ id }, values) : children;

    if (tag === TEXT_TAG.LI) {
        return <li className={className} onClick={handleClick} {...props}>{content}{id ? children : null}</li>;
    }
    return <span className={className} onClick={handleClick} {...props}>{content}{id ? children : null}</span>;
};

Text.TAG = TEXT_TAG;
Text.SIZE = TEXT_SIZE;
Text.WEIGHT = TEXT_WEIGHT;

export default Text;
