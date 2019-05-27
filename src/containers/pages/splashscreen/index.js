/**
 * @author: Artha Prihardana 
 * @Date: 2019-05-27 13:41:21 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-05-27 23:31:14
 */
import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';

let timer = 3000;
const { width, height } = Dimensions.get("window");

class SplasScreen extends Component {

    componentDidMount() {
        setTimeout(() => {
            if(this.props.credential !== null && this.props.credential.authorized) {
                Actions.reset('lightbox');
            } else {
                Actions.reset('login');
            }
        }, timer)
    }

    render() {
        return (
            <View style={styles.container}>
                <Feather name="github" size={56} />
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Github Repository</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerTitle: {
        width: width / 2
    },
    title: {
        textAlign: 'center'
    }
});

const mapStateToProps = ({ LoginReducer }) => {
    const { credential } = LoginReducer;
    return { credential }
}

export default connect(mapStateToProps, {})(SplasScreen);