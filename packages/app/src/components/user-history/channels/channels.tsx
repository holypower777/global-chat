import { TwitchUserChannel, TwitchUserChannels } from 'platform-apis/types';
import { Rubricator, Text } from 'platform-components';
import { SimpleCallback } from 'platform-components/src/typings';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getChannels, setSelectedChannel } from '../../../store/slices/channels';

import './channels.scss';

interface ChannelsProps {
    handlePickChannel?: SimpleCallback;
}

const Channels = ({ handlePickChannel }: ChannelsProps) => {
    const dispatch = useDispatch();
    const channels = useSelector(getChannels);

    const [sortedChannels, setSortedChannels] = useState<Array<TwitchUserChannels>>([]);
    const [pickedChannel, setPickedChannel] = useState<TwitchUserChannel | null>(null);

    useEffect(() => {
        dispatch(setSelectedChannel(pickedChannel));
    }, [pickedChannel]);

    useEffect(() => {
        const channelsCopy = [...channels];
        channelsCopy.sort((a, b) => {
            if (a.login < b.login) {
                return -1;
            }
            if (a.login > b.login) {
                return 1;
            }
        
            return 0;
        });

        const dict = channelsCopy.reduce((a, c) => {
            const k = c.login[0].toUpperCase();
            
            //@ts-ignore
            if (a[k]) {
                //@ts-ignore
                a[k].push(c);
            } else {
                //@ts-ignore
                a[k] = [c];
            }

            return a;
        }, {});

        setSortedChannels(Object.values(dict));
    }, [channels]);

    const handleSelect = (item: TwitchUserChannel) => {
        if (handlePickChannel) {
            handlePickChannel();
        }

        setPickedChannel(item);
    };

    return (
        <section className="channels">
            {sortedChannels.length > 0 ? <Rubricator
                channels={sortedChannels}
                handleSelect={handleSelect}
                selectedItem={pickedChannel}
            /> : <Text id="userHistory.noChannels" />}
        </section>
    );
};

export default Channels;
