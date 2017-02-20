import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import LeagueTableHeaderComponent from '../LeagueTableHeaderComponent';

const mockTableColumns = [
    {
        heading : '',
        field : ''
    },
    {
        heading : '',
        field : ''
    }
];

const setup = () => {
    const props = {
        tableColumns : mockTableColumns, 
        sortOrder : 'desc', 
        sortColumn : 'default', 
        onSortColumnChange: () => {}, 
        onSortOrderChange : () =>{}
    };
    return shallow(<LeagueTableHeaderComponent {...props} />);
};

describe('<LeagueTableHeaderComponent/>', () => {
    it('should render <tr> and 2 <th>', () => {
        const wrapper = setup();
        expect(wrapper.find('tr').length).toBe(1);
        expect(wrapper.find('th').length).toBe(2);
    });
    
});