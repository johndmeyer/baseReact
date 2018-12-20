import { get } from './baseDataAccess';

module.exports = {
    getTestData: (custNum, queryParams) => {
        const endpoint = '/stocks/header'; // TODO: make this into a constant

        return get(custNum, endpoint, queryParams)
            .then(response => {
                return Promise.resolve(response);
            })
    }
}
