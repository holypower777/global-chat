import { Possibilities } from 'platform-components';
import { ChildrenProps } from 'platform-components/src/typings';
import React from 'react';
import { useDispatch } from 'react-redux';

import { updateSetting } from '../../store/slices/settings';

const PossibilitiesProvider = ({ children }: ChildrenProps) => {
    const dispatch = useDispatch();

    return (
        <>
            {children}
            <Possibilities
                updateSettings={(key, value) => {
                    dispatch(updateSetting({ key, value }));
                }}
            />
        </>
    );
};

export default PossibilitiesProvider;
