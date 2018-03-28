/**
 * Created by mac on 2018/3/26.
 */
import React, {Component} from "react";
import LoginPage from "../pages/LoginPages";
import MainPage from "../pages/MainPage";

import {StackNavigator} from "react-navigation";    //StackNavigator,用于app界面窗口之间的切换
const App = StackNavigator({
    Login: {screen: LoginPage},
    Main: {screen: MainPage},
},{
    initialRouteName: 'Login', // 默认显示界面
    // navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
    //     header: {  // 导航栏相关设置项
    //         backTitle: '返回',  // 左上角返回键文字
    //         style: {
    //             backgroundColor: '#fff'
    //         },
    //         titleStyle: {
    //             color: 'green'
    //         }
    //     },
    //     cardStack: {
    //         gesturesEnabled: true
    //     }
    // },
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
    onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调
});

export default App;
