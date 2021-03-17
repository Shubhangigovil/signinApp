import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import FormButton from '../Components/FormButton'
import FormInput from '../Components/FormInput'
import SocialButton from '../Components/SocialButton'
import auth from '@react-native-firebase/auth'
import { AuthContext } from '../../App'
import { GoogleSignin } from '@react-native-community/google-signin';
import { Card, CardItem, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Login({ navigation }) {


    const [email, useEmail] = useState("")
    const [password, usePassword] = useState("")
    const u = useContext(AuthContext)


    login = () => {
        if (email == "" || password == "") {
            Alert.alert("Enter values")
        }
        else {
            auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('User signed in!');
                    navigation.navigate('Home')
                })
                .catch(error => {
                    if (error.code === 'auth/user-not-found') {
                        Alert.alert('User not found! Plz register first');
                    }
                    if (error.code === 'auth/wrong-password') {
                        Alert.alert('Incorrect password');
                    }

                    if (error.code === 'auth/invalid-email') {
                        Alert.alert('That email address is invalid!');
                    }

                    console.error(error);
                });
        }
        console.log("user context is", u)
    }

    GoogleLogin = async () => {
        debugger
        try {
            const { idToken } = await GoogleSignin.signIn();
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            await auth().signInWithCredential(googleCredential);
            navigation.navigate('Home')
            Alert.alert("google login")
        }
        catch (e) {
            console.log(e)
        }

    }

    return (
        <View style={styles.containerStyle}>
            <ScrollView  >
                <ImageBackground
                    source={require('../assets/bg-img1.jpg')}
                    resizeMode='cover'
                    style={styles.bgStyle}
                >


                    <Card style={styles.card}  >
                        <CardItem header={true}
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', justifyContent:'center' }}
                        >
                            <View style={{alignSelf:'center'}}>
                                <Icon name="user-circle" size={50} color="#00ccff" 
                                style={{marginTop:'-50%'}} 
                                />
                            </View>
                        </CardItem>
                        <CardItem transparent cardDefaultBg='red' style={styles.cardItem}>
                            <FormInput
                                labelValue={email}
                                placeholderText=" UserName"
                                iconType="user"
                                keyboardType="email-address"
                                onChangeText={(email) => useEmail(email)}
                            />
                            <FormInput
                                labelValue={password}
                                placeholderText=" Password"
                                iconType="lock"
                                secureTextEntry={true}
                                //passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
                                onChangeText={(password) => usePassword(password)}
                            />


                            <FormButton btnTitle="Login"
                                onPress={() => this.login()}
                            />


                            <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
                                <Text style={styles.navButtonText}>Forgot Password?</Text>
                            </TouchableOpacity>



                        </CardItem>


                    </Card>

                    <View style={styles.socialBtn}>
                        <SocialButton
                            iconName="facebook"
                            bgcolor="#3b5998"
                            btnText="Login with Facebook"

                        />
                        <SocialButton
                            iconName="google"
                            bgcolor="#dd4b39"
                            btnText="Login with Google"
                            onPress={()=>this.GoogleLogin()}
                        />
                        <TouchableOpacity
                            style={styles.forgotButton}
                            onPress={() => navigation.navigate('Signup')}>
                            <Text style={styles.navButtonText}>
                                Don't have an acount? Create here
                    </Text>
                        </TouchableOpacity>
                    </View>
                    <View>

                    </View>
                </ImageBackground>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginTop:'4%'
    },
    socialBtn: {
        flexDirection: 'column',
    },
    forgotButton: {
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
    forgotButton: {
    },
    bgStyle: {
        height: '100%',
        alignItems: 'center'
    },
    cardItem: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10
    },
    card: {
        width: '80%',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        borderRadius: 10
    }
})
