import * as React from 'react';
import { History } from "history";
import { Store } from "redux";
import { Provider } from 'react-redux';
import { ApplicationState } from '../store';
import {
    ReflexContainer,
    ReflexSplitter,
    ReflexElement,
    ReflexHandle
} from 'react-reflex';





interface MainProps {
    store: Store <ApplicationState>,
    history: History 
}

const Main: React.FC<MainProps> = ({ store, history }) => {
    return (<Provider store={store}>
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

            <ReflexElement minSize={36}>
                <ReflexHandle className="handle">
                    Bottom Pane Header: I am a draggable handle!
                    Drag me to resize ...
          </ReflexHandle>
                <div className="pane-content">
                    <label>
                        Bottom Pane
            </label>
                </div>
            </ReflexElement>

        </ReflexContainer>
    </Provider>)
}

export default Main;