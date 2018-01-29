import React, {Component} from 'react';

import Attempts from '../layouts/Attempts';
import ControlButtons from './ControlButtons';

import GoToQuestion from '../handlers/GoToQuestion';

import '../../styles/buttons.css';
import '../../styles/control-block.css'

class ControlBlock extends Component {
    render() {
        return (
            <div className="control-block">
                <div className="button-question-block">
                    <ControlButtons/>
                    <GoToQuestion />
                </div>
                <Attempts />
            </div>
        )
    }
}

export default ControlBlock;
