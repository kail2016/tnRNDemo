/**
 * Created by mac on 2018/3/26.
 */

import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

import {connect} from "react-redux"; // 引入connect函数
import *as loginAction from "../actions/loginAction"; // 导入action方法
import {NavigationActions} from "react-navigation";
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'Main'})
    ]
});

class LoginPage extends Component {


    static navigationOptions = {
        title: 'LoginPage',    //设置标题
    };

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        // 登录完成,切成功登录
        if (nextProps.isSuccess) {
            this.props.navigation.dispatch(resetAction);
            return false;
        }
        return true;
    }

    render() {
        const {user, login} = this.props;
        let age = 0, name = "--";
        if (user != null) {
            age = user.age;
            name = user.name;
        }
        return (
            <View style={styles.container}>
                <Text>状态: {this.props.status}</Text>
                <Text> 欢迎来自南京的{age}岁的{name}</Text>
                <TouchableOpacity onPress={() => login()} style={{marginTop: 50}}>
                    <View style={styles.loginBtn}>
                        <Text>登录
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
    loginBtn: {
        borderWidth: 1,
        padding: 5,
    }
});

export default connect(
    (state) => ({
        status: state.loginIn.status,
        isSuccess: state.loginIn.isSuccess,
        user: state.loginIn.user,
    }),
    (dispatch) => ({
        login: () => dispatch(loginAction.login()),
    })
)(LoginPage)