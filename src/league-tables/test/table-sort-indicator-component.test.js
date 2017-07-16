import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import TableSortIndicatorComponent from '../table-sort-indicator-component';
import { SORT_ARROW_DOWN, SORT_ARROW_UP } from '../../constants';

const setup = (setupProps) => {
    const { sortOrder = '', onSortOrderChange = () => { } } = setupProps;
    const defaultProps = {
        sortOrder,
        onSortOrderChange
    };
    return shallow(<TableSortIndicatorComponent {...defaultProps} />);
};

describe('<TableSortIndicatorComponent/>', () => {
    it('should render a <span>', () => {
        const wrapper = setup({});
        expect(wrapper.find('span').length).toBe(1);
    });
    it('<span> should have an id equal to sortOrder and style of float right', () => {
        const wrapper = setup({ sortOrder: 'desc' });
        expect(wrapper.find('span').prop('id')).toBe('desc');
        expect(wrapper.find('span').prop('style')).toEqual({ float: 'right' });
    });
    it('<span> should have a class name equal to SortArrowDown when sortOrder is desc', () => {
        const wrapper = setup({ sortOrder: 'desc' });
        expect(wrapper.find('span').prop('className')).toBe(SORT_ARROW_DOWN);
    });
    it('<span> should have a class name equal to SortArrowUp when sortOrder is asc', () => {
        const wrapper = setup({ sortOrder: 'asc' });
        expect(wrapper.find('span').prop('className')).toBe(SORT_ARROW_UP);
    });
    it('when <span> is clicked it should call onSortOrderChange', () => {
        const spy = expect.createSpy();
        const wrapper = setup({ onSortOrderChange: spy });
        wrapper.find('span').simulate('click');
        expect(spy).toHaveBeenCalled();
    });
});