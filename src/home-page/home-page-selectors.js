import { orderBy } from 'lodash';
import { curry, compose, prop } from 'ramda';

// const getProperty = curry((prop, obj) => obj[prop]);

const findLeague = (leagues, leagueToFind) => leagues.find(league => league._id === leagueToFind);

const getFixturesOrResults = curry((status, fixtures) =>
    fixtures.filter(fixture => (status == 'fixture') ? !fixture.played : fixture.played));

const findAllFixturesForSelectedLeague = compose(prop('fixtures'), findLeague);

//exports

export const findTeamsForSelectedLeague = compose(prop('teams'), findLeague);

export const findFixturesForSelectedLeague = compose(getFixturesOrResults('fixture'), findAllFixturesForSelectedLeague);

export const findResultsForSelectedLeague = compose(getFixturesOrResults('result'), findAllFixturesForSelectedLeague);

export const sortTable = (teams, sortColumn, sortOrder) => {
    let sortFields = [];
    if (sortColumn === 'default') {
        sortFields = ['points', 'shotsDifference', 'shotsFor'];
    } else {
        sortFields = [sortColumn];
    }
    return orderBy(teams, sortFields, [sortOrder, sortOrder, sortOrder]);
};