import b from 'b_';
import cx from 'classnames';
import { MessageFormatPrimitiveValue, MixProps, OptionalChildrenProps, SimpleCallback } from 'platform-components/src/typings';
import React, { CSSProperties } from 'react';
import { useIntl } from 'react-intl';

import { SIZE, SIZE_EXTENDED, TEXT_TAG } from '../constants';

import './text.scss';

export interface TextProps extends OptionalChildrenProps, MixProps {
    /** Intl id. Note: children are NOT ommited when id is used */
    id?: string;
    /** Intl values field. Note: doesn't work sans id */
    values?: Record<string, MessageFormatPrimitiveValue>;
    /** The tag of the text content: either span (default) or li */
    tag?: TEXT_TAG;
    /** The size of the text. */
    size?: SIZE_EXTENDED;
    /** The weight of the text. */
    weight?: SIZE;
    /** Whether the text is must be uppercase */
    uppercase?: boolean;
    /** Whether the text is must be centered */
    center?: boolean;
    /** Whether the text is clipped if there is not enough space. */
    ellipsis?: boolean;
    /** React style prop */
    style?: CSSProperties;
    /** The title prop specifies extra information about an element. */
    title?: string;
    /** Set the handler to handle click event */
    handleClick?: SimpleCallback;
}

const Text = ({
    id,
    values = {},
    size = SIZE_EXTENDED.M,
    weight = SIZE.S,
    tag = TEXT_TAG.SPAN,
    children,
    uppercase = false,
    center = false,
    ellipsis = false,
    handleClick,
    mix,
    ...props
}: TextProps) => {
    const intl = useIntl();
    const className = cx(b('text', { ellipsis, size, weight, uppercase, center }), mix);
    const content = id ? intl.formatMessage({ id, defaultMessage: id }, values) : children;

    if (tag === TEXT_TAG.LI) {
        return <li className={className} data-testid="text" onClick={handleClick} {...props}>{content}{id ? children : null}</li>;
    }
    return <span className={className} data-testid="text" onClick={handleClick} {...props}>{content}{id ? children : null}</span>;
};

Text.TAG = TEXT_TAG;
Text.SIZE = SIZE_EXTENDED;
Text.WEIGHT = SIZE;

export default Text;
