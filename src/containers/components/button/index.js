/**
 * @author: Artha Prihardana 
 * @Date: 2019-05-27 14:20:22 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-05-27 14:23:04
 */
import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { WHITE_COLOR, BUTTON_PRIMARY } from '../../../assets/colors';

class Button extends Component {

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <Text style={styles.title}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BUTTON_PRIMARY
    },
    title: {
        color: WHITE_COLOR,
        fontSize: 16
    }
});

export default Button;