import b from 'b_';
import { H1 } from 'platform-components';
import React from 'react';

import { CommonHeader } from '../../common.components';

import './dev-page.scss';

interface DevPageProps {
    maintenance?: boolean
}

const DevPage = ({ maintenance = false }: DevPageProps) => {
    return (
        <>
            <CommonHeader />
            <main className="dev-page">
                <div className={b('dev-page', 'smile-block')}>
                    <img
                        alt="pickaxe"
                        className={b('dev-page', 'pickaxe')}
                        src="https://c.tenor.com/tstXHn5wlfIAAAAi/pickaxe-minecraft.gif"
                    />
                    <img
                        alt="smile"
                        className={b('dev-page', 'smile')}
                        src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_7663ca7fb4a04d369a07644e81d4a32d/static/light/2.0"
                    />
                </div>
                <H1 id={`info.${maintenance ? 'maintenance' : 'dev-page'}`} />
                <div className={b('dev-page', 'smile-block')}>
                    <img
                        alt="pickaxe"
                        className={b('dev-page', 'pickaxe')}
                        src="https://c.tenor.com/tstXHn5wlfIAAAAi/pickaxe-minecraft.gif"
                    />
                    <img
                        alt="smile"
                        className={b('dev-page', 'smile')}
                        src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_7663ca7fb4a04d369a07644e81d4a32d/static/light/2.0"
                    />
                </div>
            </main>
        </>
    );
};

export default DevPage;
