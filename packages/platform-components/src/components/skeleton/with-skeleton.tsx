import React, { ReactNode } from 'react';

import Skeleton, { SKELETON_VARIANT } from './skeleton';

interface WithSkeletonProps {
    variant: SKELETON_VARIANT;
    isLoading: boolean;
    children: ReactNode | Array<ReactNode>;
    style?: React.CSSProperties;
    mix?: string;
}

const WithSkeleton = ({ isLoading, variant, children, style, mix }: WithSkeletonProps) => {
    if (isLoading) {
        return <Skeleton mix={mix} style={style} variant={variant} />;
    }

    return <>{children}</>;
};

WithSkeleton.SKELETON_VARIANT = SKELETON_VARIANT;

export default WithSkeleton;
