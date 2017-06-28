import { orderBy } from 'lodash';
import Either from 'data.either';

const getProperty = prop => obj => obj[prop];

const getLeaguesTeamIds = league => getProperty('teams');

const getLeaguesFixtureIds = league => getProperty('fixtures');

const getLeagueName = league => getProperty('leagueName');

const getTeamsFromIds = teams => teamIds => {
    return teamIds.map(teamId => teams.find(team => team._id === teamId));
};

const getFixturesFromIds = fixtures => fixtureIds => {
    return fixtureIds.map(fixtureId => fixtures.find(fixture => fixture._id === fixtureId));
};

const getFixturesOrResults = status => fixtures => fixtures.filter(fixture => (status == 'fixture')
    ? !fixture.played
    : fixture.played);

const getResults = fixtures => getFixturesOrResults('results');

const getUnplayedFixtures = fixtures => getFixturesOrResults('fixture');

const getTeamNamesAndId = teams => teams.map(team => {
    const { teamName, _id } = team;
    return {
        teamName,
        _id
    };
});

//exports

export const findLeague = (leagues, leagueToFind) => leagues.find(league => league._id === leagueToFind);

export const findTeamsForSelectedLeague = (leagues, teams, selectedLeague) => {
    return Either.fromNullable(findLeague(leagues, selectedLeague))
        .map(getLeaguesTeamIds())
        .map(getTeamsFromIds(teams))
        .getOrElse([]);
};

export const findFixturesForSelectedLeague = (leagues, fixtures, selectedLeague) => {
    return Either.fromNullable(findLeague(leagues, selectedLeague))
        .map(getLeaguesFixtureIds())
        .map(getFixturesFromIds(fixtures))
        .map(getUnplayedFixtures())
        .getOrElse([]);
};

export const findResultsForSelectedLeague = (leagues, fixtures, selectedLeague) => {
    return Either.fromNullable(findLeague(leagues, selectedLeague))
        .map(getLeaguesFixtureIds())
        .map(getFixturesFromIds(fixtures))
        .map(getResults())
        .getOrElse([]);
};

export const findLeagueNameForSelectedLeague = (leagues, leagueId) => {
    return Either.fromNullable(findLeague(leagues, leagueId))
        .map(getLeagueName())
        .getOrElse('');
};

export const findTeamNamesAndIdForSelectedLeague = (leagues, teams, leagueId) => {
    return Either.fromNullable(findLeague(leagues, leagueId))
        .map(getLeaguesTeamIds())
        .map(getTeamsFromIds(teams))
        .map(getTeamNamesAndId)
        .getOrElse([]);
};

export const checkNameIsUnique = (items, name, field) => {
    return (items.find(item => item[field] === name)
        ? false
        : true);
};


export const sortTable = (teams, sortColumn, sortOrder) => {
    let sortFields = [];
    (sortColumn === 'default')
        ? sortFields = ['points', 'shotsDifference', 'shotsFor']
        : sortFields = [sortColumn];
    return orderBy(teams, sortFields, [sortOrder, sortOrder, sortOrder]);
};