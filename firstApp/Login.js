import { SafeAreaView, View, Text, TextInput, useState, StyleSheet , Button, CheckBox, navigation, Alert} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';



const Login = () => {
    const navigation = useNavigation();
    const [name, onChangeName] = React.useState('');
    const [password,onChangePassword] = React.useState('');

  return (
    <SafeAreaView style={{flex:3}}>
      <View style={{flex:1}}>
        <Text style={styles.texting}> we are inspired from local app</Text>
      </View>

      <View style={{flex:2}}>
      <View>
        <TextInput
            style={styles.input}
            placeholder= 'Username'
            onChangeText={onChangeName}
            value={name}
        
        />
      </View>
      <View>
        <TextInput
            style={styles.input}
            placeholder= 'Password'
            onChangeText={onChangePassword}
            value={password}
        
        />
      </View>
      
      <View style= {styles.button}>
      <Button
        // style={styles.button}
        title="Login"
        onPress={() => Alert.alert('Login Failed')}
      />
      
    </View>
    
      <View >
        <Text onPress={() => navigation.navigate('SignUp')}>Dont have an account? Signup</Text>
            {/* <Button
                title="SignUp"
                onPress={() => navigation.navigate('SignUp')}
            /> */}
        </View>
      
      </View>
    </SafeAreaView>
  )
}

export default Login;



const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 20,
      borderWidth: 1,
      padding: 10,
      borderRadius: 15,
    },
    button: {
      height: 40,
      margin: 20,
      borderWidth: 1,
      // padding: 10,
      // borderRadius: 15,
      // backgroundColor: 'black',
      },
      texting:{
        height: 80,
      margin: 90,
      // borderWidth: 1,
      }
  });