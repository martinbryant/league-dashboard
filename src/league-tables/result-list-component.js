import React from 'react';
import PropTypes from 'prop-types';

import ResultListRowComponent from './result-list-row-component';

const ResultListComponent = ({results}) => {
    return (
        <ul>{
            results.map(result => {
                return (<ResultListRowComponent key={result._id} {...result} />);
            })
        }
        </ul>
    );
};

ResultListComponent.propTypes = {
    results: PropTypes.arrayOf(PropTypes.shape({
        homeTeamName: PropTypes.string.isRequired,
        awayTeamName: PropTypes.string.isRequired,
        homeTeamScore : PropTypes.number.isRequired,
        awayTeamScore : PropTypes.number.isRequired
    }))
};

export default ResultListComponent;