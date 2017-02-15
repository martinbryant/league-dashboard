const homePage = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_SELECTED_LEAGUE':
            return Object.assign({}, state, {
                selectedLeague: action._id,
                sortField : 'default'
            });
        case 'RE_ORDER_TABLE':
            return Object.assign({}, state, {
                sortField : action.column
            });

        default: return state;
    }
};

export default homePage;