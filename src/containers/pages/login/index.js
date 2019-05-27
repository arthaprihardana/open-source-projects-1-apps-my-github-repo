/**
 * @author: Artha Prihardana 
 * @Date: 2019-05-27 13:25:47 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-05-27 23:16:21
 */
import React, { Component } from 'react';
import { View, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
import OAuthManager from 'react-native-oauth';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { BACKGROUND_COLOR, WHITE_COLOR } from '../../../assets/colors';
import Button from '../../components/button';
import { CLIENT_ID, CLIENT_SECRET } from '../../../constants';
import { postLogin, getUserLogin } from '../../../actions';
import { displayName } from '../../../../app.json';

class Login extends Component {

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        if(this.props.credential !== prevProps.credential) {
            return { credential: this.props.credential }
        }
        if(this.props.login !== prevProps.login) {
            return { login: this.props.login }
        }
        return null;   
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(snapshot !== null) {
            if(snapshot.credential) {
                this.props.getUserLogin(snapshot.credential.credentials.authorizationHeader)
            }
            if(snapshot.login) {
                Actions.reset('lightbox');
            }
        }
    }
    
    handleGithubAuth = () => {
        const manager = new OAuthManager('repoapps');
        const config =  {
            github: {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET
            }
        }
        manager.configure(config);

        manager.authorize('github')
            .then(resp => {
                console.log(resp);
                if(resp.status == "ok") {
                    this.props.postLogin({
                        authorized: true,
                        credentials: resp.response.credentials
                    });
                } else {
                    Alert.alert(
                        'Info',
                        'Oops, Something went wrong',
                        [
                            {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                            },
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ],
                        {cancelable: false},
                    );
                }
            })
            .catch(err => {
                console.log(err)
                Alert.alert(
                    'Info',
                    'Oops, Something went wrong',
                    [
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        },
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    {cancelable: false},
                );
            });
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{ fontSize: 22  }}>{displayName}</Text>
                    <Ionicons name="logo-github" size={112} />
                    <View style={styles.buttonContainer}>
                        <Button title="Sign In To Github" onPress={() => this.handleGithubAuth()} />
                        <Text style={{ lineHeight: 32 }}>- Or -</Text>
                        <TouchableOpacity>
                            <Text>Register Here</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={{ fontSize: 10 }}>Copyright 2019</Text>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
        paddingHorizontal: 16
    },
    header: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        width: '100%',
        marginTop: 16,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps = ({ LoginReducer }) => {
    const { credential, login } = LoginReducer;
    return { credential, login }
}

export default connect(mapStateToProps, {
    postLogin,
    getUserLogin
})(Login);