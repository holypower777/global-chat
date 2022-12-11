import b from 'b_';
import React, { useState } from 'react';

import { H1, H2, IconCircleTick, IconForbidden, Text } from '../../../..';
import { ChildrenProps } from '../../../typings';

import './overview.scss';

interface StoryOverviewProps extends ChildrenProps {
    componentName: string;
    packet?: 'platform-components' | 'app';
    usage?: string;
    okList?: Array<string>;
    notOkList?: Array<string>;
}

const basePath = 'https://github.com/holypower777/global-chat/tree/master/packages';

const StoryOverview = ({
    children,
    componentName,
    packet = 'platform-components',
    usage = '',
    okList = [],
    notOkList = [],
}: StoryOverviewProps) => {
    const importFrom = `import { ${componentName} } from '${packet}';`;
    const [isCopied, setIsCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(importFrom);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2500);
    };

    return (
        <section className={b('story-overview', {})}>
            <header className={b('story-overview', 'header')}>
                <H1 capitalize>{componentName}</H1>
                <a //@ts-ignore
                    href={`${basePath}/${packet}/src/components/${componentName.toLowerCase()}`}
                    target="_blank"
                >
                    <Text size={Text.SIZE.L}>{'</> Source'}</Text>
                </a>
            </header>
            <div className={b('story-overview', 'wrapper')}>
                <H2 capitalize>Playground</H2>
                <div className={b('story-overview', 'block')}>
                    {children}
                </div>
            </div>
            {(usage.length > 0 || okList.length > 0 || notOkList.length > 0) && (
                <div className={b('story-overview', 'wrapper')}>
                    <H2 capitalize>Usage</H2>
                    <Text>{usage}</Text>
                    {(okList.length > 0 || notOkList.length > 0) && (
                        <div className={b('story-overview', 'usage')}>
                            {okList.length > 0 && (
                                <ul className={b('story-overview', 'usage-list', { ok: true })}>
                                    <Text tag={Text.TAG.LI} weight={Text.WEIGHT.M}>Do</Text>
                                    {okList.map((e, i) => (
                                        <li key={i}>
                                            <IconCircleTick />
                                            <Text>{e}</Text>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {notOkList.length > 0 && (
                                <ul className={b('story-overview', 'usage-list', { notOk: true })}>
                                    <Text tag={Text.TAG.LI} weight={Text.WEIGHT.M}>Don't</Text>
                                    {notOkList.map((e, i) => (
                                        <li key={i}>
                                            <IconForbidden />
                                            <Text>{e}</Text>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            )}
            <div className={b('story-overview', 'wrapper')}>
                <div className={b('story-overview', 'import')}>
                    <H2 capitalize>Import</H2>
                    <Text handleClick={handleCopy}>({isCopied ? 'copied to clipboard!' : 'click to copy'})</Text>
                </div>
                <div
                    className={b('story-overview', 'block', { clickable: true })}
                    onClick={handleCopy}
                >
                    {importFrom}
                </div>
            </div>
        </section>
    );
};

export default StoryOverview;
