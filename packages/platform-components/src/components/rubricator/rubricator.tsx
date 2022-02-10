// import b from 'b_';
import React from 'react';

interface Channel {
    userId: string;
    displayName: string;
}

interface RubricatorProps {
    channels: Array<Array<Channel>>;
}

const Rubricator = ({ channels = [] }: RubricatorProps) => {
    const availableLetters = channels.map((e) => e[0].displayName[0].toLowerCase());
    
    return (
        <div>
            {availableLetters}
        </div>
    );
};

export default Rubricator;
