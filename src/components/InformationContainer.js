import React, { Component } from 'react';
import InformationArea from './InformationArea';

class InformationContainer extends Component {
    constructor() {
        super();
        this.state = {
            contact: [
                {   tell: '010-1234-5678',
                    information: 'Hello React',
                },
            ]
        };
    }

    render() {
        return(
            <div>
                <InformationArea {...this.state.contact[0]}/>
            </div>
        );
    }
}

export default InformationContainer;