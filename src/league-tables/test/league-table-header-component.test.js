import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import LeagueTableHeaderComponent from '../league-table-header-component';
import TableSortIndicatorComponent from '../table-sort-indicator-component';

const mockTableColumns = [
    {
        heading: 'Heading 1',
        field: 'Field 1'
    },
    {
        heading: 'Heading 2',
        field: 'Field 2'
    }
];

const setup = (setupProps) => {
    const {
        tableColumns = mockTableColumns,
        sortOrder = 'desc',
        sortColumn = 'default',
        onSortOrderChange = () => { },
        onSortColumnChange = () => { } } = setupProps;
    const defaultProps = {
        tableColumns,
        sortOrder,
        sortColumn,
        onSortOrderChange,
        onSortColumnChange,
    };
    return shallow(<LeagueTableHeaderComponent {...defaultProps} />);
};

describe('<LeagueTableHeaderComponent/>', () => {
    it('should render <tr> and 2 <th>', () => {
        const wrapper = setup({});
        expect(wrapper.find('tr').length).toBe(1);
        expect(wrapper.find('th').length).toBe(2);
    });
    it('<th> should have a key and a value equal to field', () => {
        const wrapper = setup({});
        expect(wrapper.find('th').first().prop('id')).toBe('Field 1');
        expect(wrapper.find('th').first().node.key).toBe('Field 1');
    });
    it('<th> should have the text equal to the heading', () => {
        const wrapper = setup({});
        expect(wrapper.find('th').first().text()).toInclude('Heading 1');
    });
    it('<th> on click method should be called if sortColumn and field are not equal', () => {
        const spy = expect.createSpy();
        const wrapper = setup({ onSortColumnChange: spy });
        wrapper.find('th').first().simulate('click');
        expect(spy).toHaveBeenCalled();
    });
    it('<th> on click method should not get called if sortColumn equals field', () => {
        const spy = expect.createSpy();
        const wrapper = setup({ onSortColumnChange: spy, sortColumn: 'Field 1' });
        wrapper.find('th').first().simulate('click');
        expect(spy).toNotHaveBeenCalled();
    });
    it('renders a <TableSortIndicatorComponent/> when the sortColumn equals a field', () => {
        const wrapper = setup({ sortColumn: 'Field 1' });
        expect(wrapper.find(TableSortIndicatorComponent).length).toBe(1);
    });
    it('does not render a <TableSortIndicatorComponent/> if sortColumn and field are not equal ', () => {
        const wrapper = setup({ sortColumn: 'default' });
        expect(wrapper.find(TableSortIndicatorComponent).length).toBe(0);
    });
});