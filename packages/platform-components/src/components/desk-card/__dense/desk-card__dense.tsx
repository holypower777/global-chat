import cx from 'classnames';
import React, { ReactNode } from 'react';

import Text from '../../text/text';

interface DeskCardDenseProps {
    icon: ReactNode;
    id: string;
    mix?: string;
}

const DeskCardDense = ({ icon, id, mix }: DeskCardDenseProps) => {
    return (
        <div className={cx('desk-card', mix)}>
            {icon}
            <Text id={id} size={Text.SIZE.S} />
        </div>
    );
};

export default DeskCardDense;
