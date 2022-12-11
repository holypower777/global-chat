import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { ChildrenProps } from '../../typings';

interface PortalProps extends ChildrenProps {
    dataTestId?: string;
    className?: string;
} 

const Portal = ({
    dataTestId = 'portal', 
    className = '', 
    children,
}: PortalProps) => {
    const el = document.createElement('div');

    useEffect(() => {
        el.setAttribute('data-testid', dataTestId);
        el.setAttribute('class', className);
        document.body.appendChild(el);

        return () => {
            document.body.removeChild(el);
        };
    }, [el]);

    return ReactDOM.createPortal(children, el);
};

export default Portal;
