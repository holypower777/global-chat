/* eslint-disable camelcase */
import { MessagesAPI } from 'platform-apis/types/messages';

const findMostFrequestChannel = (arr: MessagesAPI) => {
    let compare = -Infinity;
    let mostFreq = '';

    arr.reduce<Record<string, number>>((acc, { chan_name }) => {
        if (chan_name in acc) {
            acc[chan_name] += 1;
        } else {
            acc[chan_name] = 1;
        }
        if (acc[chan_name] > compare) {
            compare = acc[chan_name];
            mostFreq = chan_name;
        }
        return acc;
    }, {});

    return mostFreq;
};

export default findMostFrequestChannel;
