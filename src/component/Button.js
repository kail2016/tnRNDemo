/**
 * Created by mac on 2018/3/28.
 */
import React from 'react';
import {Component, PropTypes} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class Button extends Component {
    // static propTypes = {
    //     text: PropTypes.string.isRequired,
    //     onClick: PropTypes.func.isRequired,
    // };

    render() {
        const {text, onClick} = this.props;
        return (
            <TouchableOpacity style={styles.Button} onPress={onClick}>
                <Text>{text}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    Button: {
        width: 60,
        height: 20,
        borderWidth: 1,
        borderColor: 'lightgray',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
})