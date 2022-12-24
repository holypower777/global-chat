import b from 'b_';
import cx from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { animated, config, useTransition } from 'react-spring';

import { ChildrenProps, MessageFormatPrimitiveValue, MixProps } from '../../typings';
import { DIRECTIONS } from '../constants';
import Icon, { IconCircleCross } from '../icon/icon';
import Portal from '../portal/portal';
import Text from '../text/text';

import './hint.scss';

interface HintProps extends ChildrenProps, MixProps {
    /** Intl id. Text to be within hint. */
    textId: string;
    /** Whether the hint is must be shown */
    show: boolean;
    /** Intl values field. */
    values?: Record<string, MessageFormatPrimitiveValue>;
    /** The width of the hint. */
    width?: number;
    /** The direction of the hint. */
    direction?: DIRECTIONS;
}

interface HintStyle {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    width: number;
    padding: number;
}

const Hint = ({
    children,
    textId,
    show = true,
    values = {},
    width = 256,
    direction = DIRECTIONS.RIGHT,
    mix,
}: HintProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const hintRef = useRef<HTMLDivElement>(null);
    const [hintStyle, setHintStyle] = useState<HintStyle>();
    const [hintHeight, setHintHeight] = useState(0);
    const [isShown, setIsShown] = useState(show);
    const gap = 16;
    const padding = 8;

    useEffect(() => {
        if (ref && ref.current && hintRef && hintRef.current) {
            setTimeout(() => {
                setHintHeight(hintRef?.current?.getBoundingClientRect().height || 0);
            }, 0);
        }

        if (hintHeight > 0 && ref && ref.current) {
            const dimensions = ref.current.getBoundingClientRect();
            const style: HintStyle = { width, padding };

            switch (direction) {
                case DIRECTIONS.LEFT:
                    style.left = dimensions.left - width - padding * 2 - gap;

                    if (dimensions.top < window.innerHeight / 2) {
                        style.top = dimensions.top + dimensions.height / 2 - hintHeight / 2;
                    } else {
                        style.bottom = window.innerHeight - dimensions.top + gap;
                    }
                    break;
                case DIRECTIONS.RIGHT:
                    style.left = dimensions.right + gap;

                    if (dimensions.top < window.innerHeight / 2) {
                        style.top = dimensions.top + dimensions.height / 2 - hintHeight / 2;
                    } else {
                        style.bottom = window.innerHeight - dimensions.top + gap;
                    }
                    break;
                case DIRECTIONS.TOP:
                    style.left = dimensions.left + dimensions.width / 2 - width / 2;

                    if (dimensions.top < window.innerHeight / 2) {
                        style.top = dimensions.top - hintHeight - gap;
                    } else {
                        style.bottom = window.innerHeight - dimensions.top + gap;
                    }
                    break;
                default:
                    style.left = dimensions.left + dimensions.width / 2 - width / 2;

                    if (dimensions.top < window.innerHeight / 2) {
                        style.top = dimensions.top + dimensions.height + gap;
                    } else {
                        style.bottom = window.innerHeight - dimensions.top + gap;
                    }
                    break;
            }

            style.left = Math.max(gap, style.left || 0);
            style.left = Math.min(style.left, document.body.clientWidth - width - gap);

            setHintStyle(style);
        }
    }, [ref, hintRef, hintHeight, direction]);

    const transition = useTransition(isShown, {
        from: { opacity: 0 },
        enter: { opacity: 1, delay: 300 },
        leave: { opacity: 0 },
        config: config.gentle,
    });

    if (!show) {
        return <>{children}</>;
    }

    return (
        <span ref={ref}>
            {children}
            {transition(
                (styles, item) =>
                    item && (
                        <Portal className={b('hint', 'portal')} dataTestId={b('hint', 'portal')}>
                            <animated.div
                                className={cx(b('hint', { direction }), mix)}
                                data-testid="hint"
                                onClick={() => setIsShown(false)}
                                ref={hintRef}
                                style={{ ...hintStyle, ...styles }}
                            >
                                <Text center id={textId} values={values} />
                                <IconCircleCross
                                    clickable
                                    mix={b('hint', 'close')}
                                    size={Icon.SIZE.S}
                                />
                            </animated.div>
                        </Portal>
                    )
            )}
        </span>
    );
};

Hint.DIRECTION = DIRECTIONS;

export default Hint;
