export function changeSelectedLeague(_id) {
    return {
        type : 'CHANGE_SELECTED_LEAGUE', _id
    };
}

export function reOrderTable(column) {
    return {
        type : 'RE_ORDER_TABLE', column
    };
}