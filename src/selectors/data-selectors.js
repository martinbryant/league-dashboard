import { orderBy } from 'lodash';
import Either from 'data.either';

const findLeague = (leagues, leagueToFind) => leagues.find(league => league._id === leagueToFind);

const getProperty = prop => obj => obj[prop];

const getLeaguesTeams = league => getProperty('teams');

const getLeaguesFixtures = league => getProperty('fixtures');

const getFixturesOrResults = status => fixtures => fixtures.filter(fixture => (status == 'fixture')
    ? !fixture.played
    : fixture.played);

const getResults = fixtures => getFixturesOrResults('results');

const getUnplayedFixtures = fixtures => getFixturesOrResults('fixture');

//exports

export const findTeamsForSelectedLeague = (leagues, selectedLeague) => {
    return Either.fromNullable(findLeague(leagues, selectedLeague))
        .map(getLeaguesTeams())
        .getOrElse([]);
};


export const findFixturesForSelectedLeague = (leagues, selectedLeague) => {
    return Either.fromNullable(findLeague(leagues, selectedLeague))
        .map(getLeaguesFixtures())
        .map(getUnplayedFixtures())
        .getOrElse([]);
};

export const findResultsForSelectedLeague = (leagues, selectedLeague) => {
    return Either.fromNullable(findLeague(leagues, selectedLeague))
        .map(getLeaguesFixtures())
        .map(getResults())
        .getOrElse([]);
};

export const sortTable = (teams, sortColumn, sortOrder) => {
    let sortFields = [];
    (sortColumn === 'default')
        ? sortFields = ['points', 'shotsDifference', 'shotsFor']
        : sortFields = [sortColumn];
    return orderBy(teams, sortFields, [sortOrder, sortOrder, sortOrder]);
};