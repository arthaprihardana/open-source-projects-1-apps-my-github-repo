/**
 * @author: Artha Prihardana 
 * @Date: 2019-05-27 23:18:15 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-05-27 23:39:03
 */
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { GREY_COLOR } from '../../../assets/colors';

class Drawer extends Component {
    render() {
        const { login } = this.props;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Image source={{ uri: login.avatar_url }} style={styles.image} resizeMode="cover" />
                    <Text style={{ fontSize: 16 }}>{login.name}</Text>
                    <Text style={{ fontSize: 12 }}>{login.email}</Text>
                </View>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.itemContent}>
                        <Text>Your profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContent}>
                        <Text>Your repositories</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContent}>
                        <Text>Your projects</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContent}>
                        <Text>Your start</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContent}>
                        <Text>Your gists</Text>
                    </TouchableOpacity>
                    <View style={{ borderWidth: .5, borderColor: GREY_COLOR, width: '100%' }} />
                    <TouchableOpacity style={styles.itemContent}>
                        <Text>Help</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContent}>
                        <Text>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemContent}>
                        <Text>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: '100%',
        minHeight: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GREY_COLOR
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20
    },
    content: {
        flexDirection: 'column'
    },
    itemContent: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 16
    }
});

const mapStateToProps = ({ LoginReducer }) => {
    const { login } = LoginReducer;
    return { login }
}

export default connect(mapStateToProps, {})(Drawer);