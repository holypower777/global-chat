import b from 'b_';
import cx from 'classnames';
import React, { ReactNode } from 'react';
import { useIntl } from 'react-intl';

import { HEADER_TEXT_SIZE, TEXT_WEIGHT } from '../constants';

import './header-text.scss';

enum TAG {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}

interface HeaderProps {
    tag: TAG;
    children?: ReactNode | Array<ReactNode>;
    id?: string;
    size?: HEADER_TEXT_SIZE;
    weight?: TEXT_WEIGHT;
    uppercase?: boolean;
    ellipsis?: boolean;
    mix?: string;
}

const mapTagToSize = (tag: TAG) => {
    switch (tag) {
        case TAG.H1:
            return HEADER_TEXT_SIZE.L;
        case TAG.H2:
            return HEADER_TEXT_SIZE.M;
        default:
            return HEADER_TEXT_SIZE.S;
    }
};

const HeaderText = ({
    tag,
    children,
    id,
    size,
    weight = TEXT_WEIGHT.S,
    uppercase,
    ellipsis,
    mix,
}: HeaderProps) => {
    const intl = useIntl();
    const headerSize = size || mapTagToSize(tag);
    const className = cx(b('header-text', { uppercase, ellipsis, size: headerSize, tag, weight }), mix);
    const content = id ? intl.formatMessage({ id }) : children;

    return React.createElement(tag, { className }, content);
};

interface HProps extends Omit<HeaderProps, 'tag'> {}

/* eslint-disable react/no-multi-comp */
export const H1 = (props: HProps) => (<HeaderText tag={TAG.H1} weight={TEXT_WEIGHT.L} {...props} />);
export const H2 = (props: HProps) => (<HeaderText tag={TAG.H2} weight={TEXT_WEIGHT.M} {...props} />);
export const H3 = (props: HProps) => (<HeaderText tag={TAG.H3} {...props} />);
export const H4 = (props: HProps) => (<HeaderText tag={TAG.H4} {...props} />);
export const H5 = (props: HProps) => (<HeaderText tag={TAG.H5} {...props} />);
export const H6 = (props: HProps) => (<HeaderText tag={TAG.H6} {...props} />);
