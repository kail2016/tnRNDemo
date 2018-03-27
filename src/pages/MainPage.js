/**
 * Created by mac on 2018/3/26.
 */
import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
// import {connect} from 'react-redux'; // 引入connect函数
import {NavigationActions} from "react-navigation";

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
        return (
            <View style={styles.container}>
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


export  default MainPage;

// export default connect(
//     (state) => ({
//         count: state.counter.count,
//     }),
//     (dispatch) => ({
//         incr
// ementFn: () => dispatch(counterAction.increment()),
//         decrementFn: () => dispatch(counterAction.decrement()),
//     })
// )(MainPage)