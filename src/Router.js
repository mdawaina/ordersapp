import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Sizes from './components/Sizes';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="sizes" component={Sizes} title="Chose Size" initial/>
            </Scene>
        </Router>
    )
};

export default RouterComponent;