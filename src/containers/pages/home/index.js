/**
 * @author: Artha Prihardana 
 * @Date: 2019-05-27 22:07:46 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-05-27 22:09:07
 */
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Home;