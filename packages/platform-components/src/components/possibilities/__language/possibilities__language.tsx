import b from 'b_';
import cx from 'classnames';
import React, { useState } from 'react';
import { animated } from 'react-spring';

import { getLocalStorageValue } from '../../../hooks';
import { UpdateSettingsProps } from '../../../typings';
import { getDefaultLanguage } from '../../../utils';
import { SETTINGS, LANGUAGES } from '../../constants';
import { IconFlagRu, IconFlagUsa } from '../../icon/icon';
import Text from '../../text/text';
import { PossibilityProps } from '../possibilities';

interface LanguagePossibilityProps extends UpdateSettingsProps, PossibilityProps {}

const LanguagePossibility = ({ style, disabled = false, updateSettings }: LanguagePossibilityProps) => {
    const defaultLanguage = getDefaultLanguage();
    
    const [lang, setLang] = useState(getLocalStorageValue(SETTINGS.LANGUAGE, defaultLanguage));

    return (
        <animated.div 
            className={cx(b('possibility', { disabled }), b('possibility', 'language'))} 
            onClick={(e) => {
                e.stopPropagation();
                const newLang = lang === LANGUAGES.ENG ? LANGUAGES.RU : LANGUAGES.ENG;
                updateSettings(SETTINGS.LANGUAGE, newLang);
                setLang(newLang);
            }}
            style={style}
        >
            <Text id={`possibilities.${lang}`} />
            {lang === LANGUAGES.ENG ? <IconFlagUsa /> : <IconFlagRu />}
        </animated.div>
    );
};

export default LanguagePossibility;
