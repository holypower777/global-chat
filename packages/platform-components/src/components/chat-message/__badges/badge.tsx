import React from 'react';

interface BadgeProps {
    imageSrc: string;
}

const Badge = ({ imageSrc }: BadgeProps) => (
    <div className="badge">
        <img 
            alt="badge" 
            src={imageSrc} 
        />
    </div>
);

export default Badge;
