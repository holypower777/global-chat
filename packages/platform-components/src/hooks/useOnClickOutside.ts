import { useEffect } from 'react';

import { SimpleCallback } from 'platform-components/src/typings';

function useOnClickOutside(ref: React.RefObject<HTMLDivElement>, handler: SimpleCallback) {
    useEffect(() => {
        //@ts-ignore
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }

            //@ts-ignore
            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
}

export default useOnClickOutside;
