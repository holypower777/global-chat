// import b from 'b_';
import React from 'react';

interface Channel {
    user_id: string;
    display_name: string;
}

interface RubricatorProps {
    channels: Array<Array<Channel>>;
}

const Rubricator = ({ channels = [] }: RubricatorProps) => {
    const availableLetters = channels.map((e) => e[0].display_name[0].toLowerCase());
    console.log(availableLetters);
    
    return (
        <div>
            kek
        </div>
    );
};

export default Rubricator;
