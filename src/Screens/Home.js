import React, { useState } from 'react'
import { View, Text, Button, Alert } from 'react-native'
import FormInput from '../Components/FormInput';
import firestore from '@react-native-firebase/firestore';

export default function Home({ navigation }) {
    const [Name, setName] = useState('')
    const [Age, setAge] = useState()

    Save =async () => {
        debugger
        const users = await firestore()
            .collection('users')
            .get();
        const user = await firestore()
            .collection('users')
            .doc('user1')
            .get();
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen </Text>
            <FormInput
                labelValue={Name}
                placeholderText=" Name"
                // iconType="user"
                // keyboardType="email-address"
                onChangeText={(Name) => setName(Name)}
            />

            <FormInput
                labelValue={Age}
                placeholderText="Age"
                // iconType="user"
                // keyboardType="email-address"
                onChangeText={(Age) => setAge(Age)}
            />
            <Button title="Save"
                onPress={() => this.Save()}
            />
            <Button title="Go to Details"
                onPress={() => navigation.navigate('Details')} />
        </View>
    );
}
