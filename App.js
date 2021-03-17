import React, { createContext, useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, Button } from 'react-native';
import Login from './src/Screens/Login';
import Signup from './src/Screens/Signup';
import auth from '@react-native-firebase/auth'
//import FontAwesome5Icon from 'react-native-vector-icons/fontawesome5';
import { GoogleSignin } from '@react-native-community/google-signin';
import Home from './src/Screens/Home';
import Details from './src/Screens/Details';

const Stack = createStackNavigator();
export const AuthContext = createContext();



// function HomeScreen({ navigation }) {
//   const u = useContext(AuthContext)
//   console.log("user is", u)
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen </Text>
//       <Button title="Go to Details"
//         onPress={() => navigation.navigate('Details')} />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Button title="Go to Details Again"
//         onPress={() => navigation.navigate('Home')} />
//     </View>
//   );
// }




const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '845187011235-ihrs9q45pvsqukmbv5qvho1pj073pp5c.apps.googleusercontent.com',
  });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber

  }, [])

  const onAuthStateChanged = (user) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup}

            options={({ navigation }) => ({
              title: '',
              // headerStyle: {
              //   backgroundColor: '#f9fafd',
              //   shadowColor: '#f9fafd',
              //   elevation: 0,
              // },
              // headerLeft: () => (
              //   <View style={{ marginLeft: 10 }}>
              //     <Icon
              //       name="hand-point-left"
              //       size={25}
              //       backgroundColor="#f9fafd"
              //       color="#333"
              //       onPress={() => navigation.navigate('Login')}
              //     />
              //   </View>
              // )
            })}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
