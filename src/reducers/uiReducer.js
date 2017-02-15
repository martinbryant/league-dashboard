const ui = (state = {}, action) => {
    switch (action.type) {
        case 'RE_ORDER_TABLE':
            return Object.assign({}, state, {
                sortField: action.column
            });

        default: return state;
    }
};

export default ui;