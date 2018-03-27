/**
 * Created by mac on 2018/3/26.
 */
import React, {Component} from "react";
import LoginPage from "../pages/LoginPages";
import MainPage from "../pages/MainPage";

import {StackNavigator} from "react-navigation";

const App = StackNavigator({
    Login: {screen: LoginPage},
    Main: {screen: MainPage},
});

export default App;
