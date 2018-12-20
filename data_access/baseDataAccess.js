import axios from 'axios'

// Development
//const baseUrl = 'http://ddt.dev.local/nab-mobile-responsive/1.0'
// Acceptance
const baseUrl = 'https://nab-api.markitqa.com/nab-mobile-responsive/1.0';
// Production
//const baseUrl = 'https://nab.api.markitondemand.com/nab-mobile-responsive/1.0';

const getAccessToken = custNum => {
    // TODO: Get a real access token
    // Get this from here for now:
    // http://se-wwwa701.qa.mdgapp.net:12480/tools/oauth/samlgranttester?userId=testuser&clientId=nab&issuer=http%3A%2F%2Fnabapidev3.nabdev.com.au&scope=nab-mobile&attrs%5B0%5D.Key=&attrs%5B0%5D.Value=&attrs%5B1%5D.Key=&attrs%5B1%5D.Value=&attrs%5B2%5D.Key=&attrs%5B2%5D.Value=&attrs%5B3%5D.Key=&attrs%5B3%5D.Value=&attrs%5B4%5D.Key=&attrs%5B4%5D.Value=&attrs%5B5%5D.Key=&attrs%5B5%5D.Value=&generate=true
    return 'VQWm3QEWnQq2xJclEqqhlEIII9Nk';
}

const buildUrl = (custNum, endpoint, queryParams) => {
    const accessToken = getAccessToken(custNum);

    let url = `${baseUrl}${endpoint}?`;

    for (const key in queryParams) {
        url = `${url}${key}=${queryParams[key]}&`;
    }

    return `${url}access_token=${accessToken}`
}

module.exports = {
    get: (custNum, endpoint, queryParams) => {
        return axios({
            method: 'get',
            responseType: 'json',
            url: buildUrl (custNum, endpoint, queryParams),
            crossorigin: true
        })
        .then(response => {
            console.log(`Response recieved ${response.status} ${response.statusText}`);

            if (response.status == 200) { return Promise.resolve(response.data.data); }
            // TODO: Error handling / logging
        })
        .catch(error => {
            console.log("Error *** : " + error);
        });
    },
    put: () => {},
    post: () => {},
    delete: () => {},
}
