import b from 'b_';
import cx from 'classnames';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import { IconBug } from '../../icon/icon';
import Input from '../../input/input';
import Text from '../../text/text';

import './possibilities__bug.scss';

const BugPossibility = () => {
    const intl = useIntl();
    const [expanded, setExpanded] = useState(false);
    const [os, setOS] = useState('windows');
    const [browser, setBrowser] = useState('');
    const [kind, setKind] = useState('uiux');
    const [url, setURL] = useState('');
    const [steps, setSteps] = useState('');
    const [description, setDescription] = useState('');

    // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files![0];
    //     return 'kek';
    // }

    return (
        <div
            className={cx('possibility', b('possibility', 'bug'))}
            onClick={() => (setExpanded(!expanded))}
        >
            <IconBug />
            {expanded && <div className={b('possibility', 'bug_form')} onClick={(e) => e.stopPropagation()}>
                <Text id="bug.header" weight={Text.WEIGHT.M} />
                <div className={b('possibility', 'bug_form_option')}>
                    <Text id="bug.os" />
                    <select onChange={(e) => setOS(e.target.value)} value={os}>
                        <option value="windows">{intl.formatMessage({ id: 'bug.os.windows' })}</option>
                        <option value="mac">{intl.formatMessage({ id: 'bug.os.mac' })}</option>
                        <option value="linux">{intl.formatMessage({ id: 'bug.os.linux' })}</option>
                    </select>
                </div>
                <div className={b('possibility', 'bug_form_option')}>
                    <Text id="bug.browser" />
                    <Input 
                        handleChange={(e) => (setBrowser(e.target.value))}
                        placeholder={intl.formatMessage({ id: 'bug.browser.placeholder' })}
                        size={Input.SIZE.S}
                        value={browser}
                    />
                </div>
                <div className={b('possibility', 'bug_form_option')}>
                    <Text id="bug.kind" />
                    <select onChange={(e) => setKind(e.target.value)} value={kind}>
                        <option value="uiux">{intl.formatMessage({ id: 'bug.kind.uiux' })}</option>
                        <option value="functional">{intl.formatMessage({ id: 'bug.kind.functional' })}</option>
                        <option value="logical">{intl.formatMessage({ id: 'bug.kind.logical' })}</option>
                        <option value="other">{intl.formatMessage({ id: 'bug.kind.other' })}</option>
                    </select>
                </div>
                <div className={b('possibility', 'bug_form_option')}>
                    <Text id="bug.url" />
                    <Input 
                        handleChange={(e) => (setURL(e.target.value))}
                        size={Input.SIZE.S}
                        value={url}
                    />
                </div>
                <div className={b('possibility', 'bug_form_option')}>
                    <Text id="bug.visual" />
                    <input 
                        accept="image/png, image/jpeg" 
                        onChange={() => ({})}
                        type="file"
                    />
                </div>
                <div className={b('possibility', 'bug_form_option')}>
                    <Text id="bug.steps" />
                    <textarea
                        maxLength={1000}
                        onChange={(e) => (setSteps(e.target.value))}
                        value={steps}
                    />
                </div>
                <div className={b('possibility', 'bug_form_option')}>
                    <Text id="bug.description" />
                    <textarea
                        maxLength={1000}
                        onChange={(e) => (setDescription(e.target.value))}
                        value={description}
                    />
                </div>
            </div>}
        </div>
    );
};

export default BugPossibility;
