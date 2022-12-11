import b from 'b_';
import cx from 'classnames';
import React from 'react';
import { useIntl } from 'react-intl';

import { MessageFormatPrimitiveValue, MixProps, OptionalChildrenProps, SimpleCallback } from '../../typings';
import { SIZE } from '../constants';

import './header-text.scss';

enum TAG {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}

interface HeaderTextProps extends OptionalChildrenProps, MixProps {
    /** The level of the heading */
    tag: TAG;
    /** Intl id. Note: children are ommited when id is used */
    id?: string;
    /** The size of the heading. Note: its already provided for all levels, use it when it's really necessary */
    size?: SIZE;
    /** The weight of the heading. Note: its already provided for all levels, use it when it's really necessary */
    weight?: SIZE;
    /** Intl values field. Note: doesn't work sans id */
    values?: Record<string, MessageFormatPrimitiveValue>;
    /** Whether the heading is must be uppercase */
    uppercase?: boolean;
    /** Set the handler to handle click event */
    handleClick?: SimpleCallback;
    /** Whether the heading is must be capitalized */
    capitalize?: boolean;
    /** Whether the heading is clipped if there is not enough space. */
    ellipsis?: boolean;
}

const mapTagToSize = (tag: TAG) => {
    switch (tag) {
        case TAG.H1:
            return SIZE.L;
        case TAG.H2:
            return SIZE.M;
        default:
            return SIZE.S;
    }
};

const HeaderText = ({
    tag,
    children,
    id,
    size,
    weight = SIZE.S,
    uppercase = false,
    capitalize = false,
    handleClick,
    values = {},
    ellipsis = false,
    mix,
}: HeaderTextProps) => {
    const intl = useIntl();
    const headerSize = size || mapTagToSize(tag);
    const className = cx(b('header-text', { uppercase, ellipsis, size: headerSize, tag, weight, capitalize }), mix);
    const content = id ? intl.formatMessage({ id, defaultMessage: id }, values) : children;

    return React.createElement(tag, { className, onClick: handleClick, 'data-testid': 'header-text' }, content);
};

export interface HProps extends Omit<HeaderTextProps, 'tag'> {}

/* eslint-disable react/no-multi-comp */
export const H1 = (props: HProps) => (<HeaderText tag={TAG.H1} weight={SIZE.L} {...props} />);
export const H2 = (props: HProps) => (<HeaderText tag={TAG.H2} weight={SIZE.M} {...props} />);
export const H3 = (props: HProps) => (<HeaderText tag={TAG.H3} {...props} />);
export const H4 = (props: HProps) => (<HeaderText tag={TAG.H4} {...props} />);
export const H5 = (props: HProps) => (<HeaderText tag={TAG.H5} {...props} />);
export const H6 = (props: HProps) => (<HeaderText tag={TAG.H6} {...props} />);

HeaderText.TAG = TAG;
HeaderText.SIZE = SIZE;
HeaderText.WEIGHT = SIZE;

export default HeaderText;
