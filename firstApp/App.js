

// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TextInput,
//   useColorScheme,
//   View,
//   Button,
//   TouchableOpacity,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
  
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import Header from './Header';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const App = ()=>{
//   const [username, onChangeText] = React.useState('');
//   const [password,onChangePassword] = React.useState('');

// return(
//   <SafeAreaView>
//     <Text>Welcome to the APP</Text>
//     <View>
//     <TextInput
//         style={styles.input}
//         placeholder="Type Username or Email"
//         onChangeText={onChangeText}
//         value={username}
        
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Type Password"
//         onChangeText={onChangePassword}
//         value={password}
        
//       />
//       <TouchableOpacity>
//       <Button
//         title="Login"
//         onPress={() => Alert.alert('Simple Button pressed')}
//       />
//       </TouchableOpacity>
      
//     </View>
//     <View>
//       <TouchableOpacity>
//         <Text>Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//   </SafeAreaView>
  
// )

// };

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });



// export default App;


import React from "react";
import { View , Text} from "react-native";
import Login from "./Login";
import SignUp from "./SignUp";
import MainPage from "./MainPage";
import TodoForm from "./TodoFrom";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from "@react-navigation/native-stack"
import { AuthProvider } from "./src/context/AuthContext";


const App = () => {
  const Stack  = createNativeStackNavigator();
  return(
    <NavigationContainer>
       {/* <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
      </Stack.Navigator>  */}
      {/* <Login/> */}
      <NavStack/>
    </NavigationContainer>
    
    
  )
}

export default App;

function NavStack() {
  const Stack  = createNativeStackNavigator();
  return (
    <AuthProvider>
     <Stack.Navigator
        
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#621FF7',},
          headerTintColor: '#fff',
          headerTitleStyle :{fontWeight: 'bold'},
          
          
        }}
      >
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }}
        
      />
      <Stack.Screen 
        name="SignUp" 
        component={SignUp} 
        options={ { headerShown: false }}
      />
      <Stack.Screen 
        name="MainPage" 
        component={MainPage} 
        options={ { headerShown: false }}
        
      />
      <Stack.Screen 
        name="TodoForm" 
        component={TodoForm} 
        options={ { headerShown: false }}
        
      />
    </Stack.Navigator>
    </AuthProvider>
  );
}
