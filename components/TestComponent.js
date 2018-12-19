import React from 'react'
import Axios from 'axios'

export default class TestComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: {},
            dateRequestAsOf: ''
        };
    }

    componentWillMount (){
        Axios({
            method: 'get',
            responseType: 'json',
            url: 'https://nab-api.markitqa.com/nab-mobile-responsive/1.0/stocks/header?exchange=ASX&symbol=BHP&access_token=8nE5EFl5lIjKIC6zBIA1mp0dCkqR',
            crossorigin: true
        })
        .then(response => {
            this.setState({
                header: response.data.header,
                dateRequestAsOf: response.data.dateRequestAsOf
            });
            console.log('Response recieved ' + response);
        })
        .catch(error => {
            console.log("Error *** : " + error);
        });
    }

    render() {
        return (
            <div className="securityDetailsScreen">
                //this.state.header.name
                this.state.data
            </div>
        );
    }
}
