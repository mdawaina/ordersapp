import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MainList from './containers/MainList';
import Sizes from './components/Sizes';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="olivelist" component={MainList} title="Olive List" initial/>
                <Scene key="sizes" component={Sizes} title="Chose Size" />
            </Scene>
        </Router>
    )
};

export default RouterComponent;