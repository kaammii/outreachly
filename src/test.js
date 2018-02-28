import React, { Component } from 'react';
import {TextField} from 'material-ui';

class Test extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            	<TextField floatingLabelText={'Hello World'}  />
            </div>
        );
    }
}

export default Test;
