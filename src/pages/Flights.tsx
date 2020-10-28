import * as React from 'react';
import {
    ReflexContainer,
    ReflexSplitter,
    ReflexElement,
    ReflexHandle
} from 'react-reflex';

type Props = {

}

type State = {

}

class Flights extends React.Component<Props, State> {
    render() {
        return (
            <ReflexContainer orientation="horizontal">
                <ReflexElement minSize={36}>
                    <div className="handle">
                        Top Pane Header
                    </div>
                    <div className="pane-content">
                        <label>
                            Top Pane
                        </label>
                    </div>
                </ReflexElement>

                <ReflexSplitter />

                <ReflexElement minSize={36} className="reflex-element-bottom">
                    <ReflexHandle className="handle ">

                    </ReflexHandle>
                    <div className="pane-content">
                        <label>
                            Bottom Pane
                        </label>
                    </div>
                </ReflexElement>

            </ReflexContainer>)
    }
}

export default Flights;