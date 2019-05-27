/**
 * @author: Artha Prihardana 
 * @Date: 2019-05-27 22:13:53 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-05-27 22:26:49
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { WHITE_COLOR } from '../../../assets/colors';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get("window");

class NavBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    { this.props.isMenu && 
                    <TouchableHighlight style={styles.leftMenu} onPress={this.props.onPressMenu} underlayColor={'rgba(255,255,255,0.3)'}>
                        <Feather name="menu" size={28} />
                    </TouchableHighlight> }
                </View>
                <View style={styles.centerContainer}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <View style={styles.rightContainer}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        width: width, 
        height: 56,
        backgroundColor: WHITE_COLOR,
        justifyContent: 'flex-start', 
        alignItems: 'center'
    },
    leftContainer: {
        width: 56, 
        height: 56, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    leftMenu: {
        width: 56, 
        height: 56, 
        borderRadius: 28,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    centerContainer: {

    },
    rightContainer: {

    },
    title: {
        fontWeight: '600', 
        fontSize: 18
    }
})

export default NavBar;