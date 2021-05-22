import React from 'react';
import axios from 'axios';

class AxiosAPI extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            totalReactPackages: null
        };
    }

    componentDidMount() {
        // Simple GET request using axios
        axios.get('http://admin:admin@172.26.131.149:5984/aurin-geo/bne', {
        headers: {'Authorization': 'Basic YWRtaW46YWRtaW4='}
        }).then(
            response => {
                this.setState({ totalReactPackages: response.data });
                console.log(response)
            }
        );
    }

    render() {
        this.componentDidMount();
        const { totalReactPackages } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">
                    Total react packages: {totalReactPackages}
                </div>
            </div>
        );
    }
}

export { AxiosAPI }; 