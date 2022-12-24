import b from 'b_';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'wouter';

import { LANGUAGES, LINKS, SETTINGS, Text } from 'platform-components';
import { getLocalStorageValue } from 'platform-components/src/hooks';
import { getDefaultLanguage } from 'platform-components/src/utils';

import { updateSetting } from '../../store/slices/settings';

import './common-footer.scss';

const CommonFooter = () => {
    const dispatch = useDispatch();
    const defaultLanguage = getDefaultLanguage();
    const [lang, setLang] = useState(getLocalStorageValue(SETTINGS.LANGUAGE, defaultLanguage));

    return (
        <footer className="footer">
            <a className={b('footer', 'donate')} href={LINKS.BOOSTY} target="_blank">
                <Text id="footer.donate" size={Text.SIZE.XS} />
            </a>
            <Link className={b('footer', 'about')} href={LINKS.ABOUT}>
                <Text id="footer.about" size={Text.SIZE.XS} />
            </Link>
            <a className={b('footer', 'github')} href={LINKS.GITHUB} target="_blank">
                <Text id="footer.github" size={Text.SIZE.XS} />
            </a>
            <a className={b('footer', 'bug')} href={LINKS.BUG_REPORT} target="_blank">
                <Text id="footer.bug" size={Text.SIZE.XS} />
            </a>
            <a className={b('footer', 'idea')} href={LINKS.IDEAS} target="_blank">
                <Text id="footer.idea" size={Text.SIZE.XS} />
            </a>
            <Text
                handleClick={() => {
                    const newLang = lang === LANGUAGES.ENG ? LANGUAGES.RU : LANGUAGES.ENG;
                    dispatch(updateSetting({ key: SETTINGS.LANGUAGE, value: newLang }));
                    setLang(newLang);
                }}
                id={`footer.${lang}`}
                mix={b('footer', 'lang')}
                size={Text.SIZE.XS}
            />
            <div className={b('footer', 'watermark')}>
                <Text id="common.watermark" size={Text.SIZE.XS} />
                <a href={LINKS.KOSTI4EG_TWITCH} target="_blank">
                    kosti4eg
                </a>
            </div>
        </footer>
    );
};

export default CommonFooter;
