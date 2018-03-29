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

    getNumber() {
        var p = new Promise(function(resolve, reject){
            //做一些异步操作
            setTimeout(function(){
                var num = Math.ceil(Math.random() * 10); //生成1-10的随机数
                if(num < 5){
                    resolve(num);
                }else {
                    reject('数字太大了');
                }
            }, 2000);
        });
        return p;
    }

    test(){

        //----串行执行任务------
        // runAsync1()
        //     .then(function(data){
        //         console.log(data);
        //         return runAsync2();
        //     })
        //     .then(function(data){
        //         console.log(data);
        //         return runAsync3();  //这里直接返回数据
        //     })
        //     .then(function(data){
        //         console.log(data);
        //     });


        // this.getNumber()
        //     .then( function(data){  //第一个对应resolve的回调，第二个对应reject的回调 ;
        //             console.log('resolved');
        //             console.log(data);
        //         },
        //         function(reason, data){
        //             console.log('rejected');
        //             console.log(reason);
        //         });

        //getNumber()
        //     .then(function(data){
        //         console.log('resolved');
        //         console.log(data);
        //         console.log(somedata); //此处的somedata未定义
        //     })
        //     .catch(function(reason){
        // 在执行resolve的回调（也就是上面then中的第一个参数）时，如果抛出异常了（代码出错了），
        // 那么并不会报错卡死js，而是会进到这个catch方法中
        //         console.log('rejected');
        //         console.log(reason);
        //     });

        //三个异步操作的并行执行的，等到它们都执行完后才会进到then；返回结果按顺序存放在数组里面
        // Promise
        //     .all([runAsync1(), runAsync2(), runAsync3()])
        //     .then(function(results){
        //         console.log(results);
        //     })

        Promise
            .race([runAsync1(), runAsync2(), runAsync3()])
            .then(function(results){
                console.log(results);
            });
    }

    render() {
        const {user} = this.props.navigation;
        const {count, incrementFn, decrementFn} = this.props;
        return (
            <View style={styles.container}>
                <Counter counter={count} decrementFn={decrementFn} incrementFn={incrementFn}/>

                <TouchableOpacity onPress={this.logout.bind(this)} style={{marginTop: 50}}>
                    <View>
                        <Text>退出登录</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.test.bind(this)} style={{marginTop: 20}}>
                    <View>
                        <Text>Promise函数测试</Text>
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
        incrementFn: () => dispatch(counterAction.addAsy()),
        decrementFn: () => dispatch(counterAction.decrement()),
    };
}


function runAsync1(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务1执行完成');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;
}
function runAsync2(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务2执行完成');
            resolve('随便什么数据2');
        }, 2000);
    });
    return p;
}
function runAsync3(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务3执行完成');
            resolve('随便什么数据3');
        }, 2000);
    });
    return p;
}

// export  default MainPage;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage)