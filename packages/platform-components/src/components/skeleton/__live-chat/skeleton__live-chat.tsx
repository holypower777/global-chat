import b from 'b_';
import React from 'react';

import Skeleton from '../skeleton';

import './skeleton__live-chat.scss';

const SkeletonLiveChat = React.memo(() => {
    const baseClassName = b('skeleton', 'live-chat');

    return (
        <div className={baseClassName}>
            <div className={b(baseClassName, 'channels')}>
                <div className={b(baseClassName, 'channels_settings')}>
                    <div className={b(baseClassName, 'channels_settings_speed')} />
                    <div className={b(baseClassName, 'channels_settings_online')} />
                    <div className={b(baseClassName, 'channels_settings_sort')} />
                    <div className={b(baseClassName, 'channels_settings_cog')} />
                </div>
                <div className={b(baseClassName, 'channels_list')}>
                    <Skeleton variant={Skeleton.SKELETON_VARIANT.CHIP} />
                    <Skeleton variant={Skeleton.SKELETON_VARIANT.CHIP} />
                    <Skeleton variant={Skeleton.SKELETON_VARIANT.CHIP} />
                    <Skeleton variant={Skeleton.SKELETON_VARIANT.CHIP} />
                    <Skeleton variant={Skeleton.SKELETON_VARIANT.CHIP} />
                    <Skeleton variant={Skeleton.SKELETON_VARIANT.CHIP} />
                    <Skeleton variant={Skeleton.SKELETON_VARIANT.CHIP} />
                    <Skeleton variant={Skeleton.SKELETON_VARIANT.CHIP} />
                    <Skeleton variant={Skeleton.SKELETON_VARIANT.CHIP} />
                    <Skeleton variant={Skeleton.SKELETON_VARIANT.CHIP} />
                    <Skeleton variant={Skeleton.SKELETON_VARIANT.CHIP} />
                    <Skeleton variant={Skeleton.SKELETON_VARIANT.CHIP} />
                </div>
            </div>
            <div className={b(baseClassName, 'chat')}>
                <Skeleton variant={Skeleton.SKELETON_VARIANT.MESSAGE} />
            </div>
        </div>
    );
});

export default SkeletonLiveChat;
