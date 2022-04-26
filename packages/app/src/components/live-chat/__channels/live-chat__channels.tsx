import b from 'b_';
import cx from 'classnames';
import { Chip } from 'platform-components';
import { CHIP_TAG } from 'platform-components/src/components/constants';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getActualChannelsAsArray, toggleSelected } from '../../../store/slices/live-chat';

import './live-chat__channels.scss';
import LiveChatChannelsSettings from './_settings/channels_settings';

const LiveChatChannels = () => {
    const dispatch = useDispatch();
    const actualChannels = useSelector(getActualChannelsAsArray);

    return (
        <section className={b('live-chat', 'channels')}>
            <LiveChatChannelsSettings />
            <ul className={cx(b('live-chat', 'channels-list'), 'custom-scroll')}>
                {actualChannels.map((chan) => (<Chip
                    handleClick={() => dispatch(toggleSelected(chan.userId))}
                    key={chan.userId}
                    label={chan.displayName}
                    secondLabel={chan.online}
                    selected={chan.selected}
                    tag={CHIP_TAG.LI}
                />))}
            </ul>
        </section>
    );
};

export default LiveChatChannels;
