import { get } from './baseDataAccess';

module.exports = {
    getTestData: (custNum, queryParams) => {
        const endpoint = '/stocks/header';

        return get(custNum, endpoint, queryParams)
            .then(response => {
                return Promise.resolve(response);
            })
    }
}
