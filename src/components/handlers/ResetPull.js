import React, {Component} from 'react';
import {connect} from 'react-redux';

import resetPullActions from '../../actions/questionPullActions';

class ResetPull extends Component {
    constructor(){
        super();
        this.resetPull = this.resetPull.bind(this);
    }
    resetPull() {
        const {resetPull} = this.props;
        resetPull();
    }
    render() {
        return (
            <div>
                <button onClick={this.resetPull}>Reset Pull</button>
            </div>
        )
    }
}

export default connect(null, {
    ...resetPullActions,
})(ResetPull);
