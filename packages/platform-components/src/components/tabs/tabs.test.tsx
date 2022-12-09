/* eslint-disable max-nested-callbacks */
import { fireEvent, screen } from '@testing-library/react';
import b from 'b_';
import React from 'react';
import '@testing-library/jest-dom';

import { renderWithIntl } from '../../utils';

import { Tab } from './__tab/tabs__tab';
import Tabs, { TabsProps } from './tabs';

const setup = ({ ...props }: TabsProps) => {
    const utils = renderWithIntl(<Tabs {...props} />);
    const tabs = utils.getByTestId('tabs');
    return {
        tabs,
        ...utils,
    };
};

const tabsTestMock: Array<Tab> = [
    { id: 0, intlId: 'link.home' },
    { id: 1, intlId: 'link.home' },
    { id: 2, intlId: 'link.home' },
    { id: 3, intlId: 'link.home' },
];

describe('tabs', () => {
    const tabsTab = b('tabs', 'tab');
    const activeTab = b('tabs', 'tab', { active: true });

    it('to be propper amount of tabs', () => {
        setup({ 
            tabs: tabsTestMock, 
            activeId: 0, 
            handleTabClick: () => ({}),
        });
        expect(screen.getAllByTestId(tabsTab)).toHaveLength(4);
    });

    describe('handle tab click', () => {
        it('switches to second tab', () => {
            let activeId = 0;
            const handleTabClick = jest.fn((id: number) => (activeId = id));
            setup({ tabs: tabsTestMock, activeId, handleTabClick });
            
            expect(screen.getAllByTestId(tabsTab)[0]).toHaveClass(activeTab);
            
            fireEvent.click(screen.getAllByTestId(tabsTab)[1]);
            expect(handleTabClick).toHaveBeenCalledTimes(1);
            expect(activeId).toEqual(1);
        });

        it('switches to third tab', () => {
            let activeId = 0;
            const handleTabClick = jest.fn((id: number) => (activeId = id));
            setup({ tabs: tabsTestMock, activeId, handleTabClick });
            
            expect(screen.getAllByTestId(tabsTab)[0]).toHaveClass(activeTab);
            
            fireEvent.click(screen.getAllByTestId(tabsTab)[2]);
            expect(handleTabClick).toHaveBeenCalledTimes(1);
            expect(activeId).toEqual(2);
        });

        it('doesn\'t trigger when tab is already active', () => {
            let activeId = 0;
            const handleTabClick = jest.fn((id: number) => (activeId = id));
            setup({ tabs: tabsTestMock, activeId, handleTabClick });
            
            expect(screen.getAllByTestId(tabsTab)[0]).toHaveClass(activeTab);
            
            fireEvent.click(screen.getAllByTestId(tabsTab)[0]);
            expect(handleTabClick).not.toHaveBeenCalled();
        });
    });
});
