const headings = ['Team', 'Played', 'Won', 'Drawn', 'Lost', 'For', 'Against', 'Diff', 'Points'];

const fields = ['teamName', 'played', 'won', 'drawn', 'lost', 'shotsFor', 'shotsAgainst', 'shotsDifference', 'points'];

const constructColumns = (headingList, fieldsList) => {
    let newColumns = [];
    if (headingList.length === fieldsList.length) {
        for (let i = 0, max = headingList.length; i < max; i++) {
            newColumns.push(Object.assign({}, { heading: headingList[i] }, { field: fieldsList[i] }));
        }
    }
    return newColumns;
};

const tableColumns = constructColumns(headings, fields);

export default tableColumns;