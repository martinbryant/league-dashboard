import axios from'axios';

const apiUrl = 'http://localhost:8000/api/';

export function getLeagues() {
    return axios.get(apiUrl)
        .then(response => response.data)
        .catch(error => {
            throw (error);
        });
}

export function amendLeagueName(leagueId, newLeagueName) {
    return axios({
        url: apiUrl + 'league/' + leagueId,
        method: 'put',
        data: {
            leagueName: newLeagueName
        },
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then(response => response.data)
        .catch(error => {
            throw (error);
        });
}