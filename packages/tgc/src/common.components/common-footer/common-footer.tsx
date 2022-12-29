import b from 'b_';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { LANGUAGES, LINKS, SETTINGS, Text, TEXT_TAG } from 'platform-components';
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
            <Text
                id="footer.donate"
                link={LINKS.BOOSTY}
                mix={b('footer', 'donate')}
                size={Text.SIZE.XS}
                tag={TEXT_TAG.LINK}
            />
            <Text
                id="footer.about"
                link={LINKS.ABOUT}
                mix={b('footer', 'about')}
                size={Text.SIZE.XS}
                tag={TEXT_TAG.LINK}
            />
            <Text
                id="footer.github"
                link={LINKS.GITHUB}
                mix={b('footer', 'github')}
                size={Text.SIZE.XS}
                tag={TEXT_TAG.LINK}
            />
            <Text
                id="footer.bug"
                link={LINKS.BUG_REPORT}
                mix={b('footer', 'bug')}
                size={Text.SIZE.XS}
                tag={TEXT_TAG.LINK}
            />
            <Text
                id="footer.idea"
                link={LINKS.IDEAS}
                mix={b('footer', 'idea')}
                size={Text.SIZE.XS}
                tag={TEXT_TAG.LINK}
            />
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
