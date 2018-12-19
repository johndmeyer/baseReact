import React from 'react';

import { getTestData } from './../data_access/tester';

export default class TestComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: {},
            dateRequestAsOf: '',
            isLoading: true
        };
    }

    componentWillMount () {
        const custNum = '';
        const queryParams = { exchange: 'ASX', symbol: 'BHP' };
        getTestData(custNum, queryParams)
            .then(response => {
                this.setState({
                    header: response.header,
                    dateRequestAsOf: response.dateRequestAsOf,
                    isLoading: false
                });
            })
    }

    render() {
        return (
            <div>
                {this.state.dateRequestAsOf}
                {this.state.header.name}
            </div>
        );
    }
}
