import { Rubricator } from 'platform-components';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getChannels, setSelectedChannel } from '../../../store/slices/channels';

import './channels.scss';

const Channels = () => {
    const dispatch = useDispatch();
    const channels = useSelector(getChannels);

    const [sortedChannels, setSortedChannels] = useState([]);
    const [pickedChannel, setPickedChannel] = useState('');

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
            const k = c.login[0].toLocaleUpperCase();
            
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

    return (
        <section className="channels">
            {sortedChannels.length && <Rubricator
                channels={sortedChannels}
                handleSelect={(item) => (setPickedChannel(item))}
                selectedItem={pickedChannel}
            />}
        </section>
    );
};

export default Channels;
