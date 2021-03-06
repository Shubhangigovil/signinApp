import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Details({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Button title="Go to Details Again"
            onPress={() => navigation.navigate('Home')} />
        </View>
      );
}
