import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import TableSortIndicatorComponent from '../table-sort-indicator-component';
import {sortArrowDown, sortArrowUp} from '../../constants';

const setup = (setupProps) => {
    const {sortOrder = '', isSortIndicatorDisplayed = false, onSortOrderChange = () => { }} = setupProps;
    const defaultProps = {
        sortOrder,
        isSortIndicatorDisplayed,
        onSortOrderChange
    };
    return shallow(<TableSortIndicatorComponent {...defaultProps} />);
};

describe('<TableSortIndicatorComponent/>', () => {
    it('should render a <span> if isSortIndicatorDisplayed is true', () => {
        const wrapper = setup({ isSortIndicatorDisplayed: true });
        expect(wrapper.find('span').length).toBe(1);
    });
    it('should not render a <span> if isSortIndicatorDisplayed is false', () => {
        const wrapper = setup({ isSortIndicatorDisplayed: false });
        expect(wrapper.find('span').length).toBe(0);
    });
    it('<span> should have a value equal to sortOrder and style of float right', () => {
        const wrapper = setup({ sortOrder: 'desc', isSortIndicatorDisplayed: true });
        expect(wrapper.find('span').prop('value')).toBe('desc');
        expect(wrapper.find('span').prop('style')).toEqual({ float: 'right' });
    });
    it('<span> should have a class name equal to SortArrowDown when sortOrder is desc', () => {
        const wrapper = setup({sortOrder : 'desc', isSortIndicatorDisplayed : true});
        expect(wrapper.find('span').prop('className')).toBe(sortArrowDown);
    });
    it('<span> should have a class name equal to SortArrowDown when sortOrder is asc', () => {
        const wrapper = setup({sortOrder : 'asc', isSortIndicatorDisplayed : true});
        expect(wrapper.find('span').prop('className')).toBe(sortArrowUp);
    });
    it('when <span> is clicked it should call onSortOrderChange', () => {
        const spy = expect.createSpy();
        const wrapper = setup({isSortIndicatorDisplayed : true, onSortOrderChange : spy});
        wrapper.find('span').simulate('click');
        expect(spy).toHaveBeenCalled();
    });
});