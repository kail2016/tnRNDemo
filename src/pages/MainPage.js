/**
 * Created by mac on 2018/3/26.
 */
import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from 'react-redux'; // 引入connect函数
import {NavigationActions} from "react-navigation";
import Counter from "../component/Counter";
import *as counterAction from '../actions/counterAction';

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'Login'})
    ]
});

class MainPage extends Component {
    static navigationOptions = {
        title: 'MainPage',
    };

    logout() {
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        const {user} = this.props.navigation;
        const {count, incrementFn, decrementFn} = this.props;
        return (
            <View style={styles.container}>
                <Counter counter={count} decrementFn={decrementFn} incrementFn={incrementFn}/>

                <TouchableOpacity onPress={this.logout.bind(this)} style={{marginTop: 50}}>
                    <View>
                        <Text>退出登录
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
        backgroundColor: '#F5FFFF'
    }
});

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
    return {
        count: state.counter.count,
    };
}
// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
    return {
        incrementFn: () => dispatch(counterAction.increment()),
        decrementFn: () => dispatch(counterAction.decrement()),
    };
}


// export  default MainPage;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage)