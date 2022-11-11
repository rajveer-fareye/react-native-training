import { SafeAreaView, View, Text, TextInput, useState,Input, StyleSheet , Button, CheckBox, navigation, Alert, ScrollView, TouchableOpacity, icon} from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from './src/context/AuthContext';
import { BASE_URL } from './src/config';


const Login = () => {
    const navigation = useNavigation();
    const [email, onChangeEmail] = React.useState('');
    const [password,onChangePassword] = React.useState('');
    const [isSecureEntry, setisSecureEntry] = React.useState(true);

    const {login} = useContext(AuthContext);


  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView >
      <View  style={{flex:1}}>
        <Text style={styles.texting}> we are inspired from local app</Text>
      </View>
      
      <View style={{flex:1}} >
      <View>
        <TextInput
            style={styles.input}
            placeholder= 'Email'
            onChangeText={onChangeEmail}
            value={email}
        
        />
      </View>
      <View>
        <TextInput
            style={styles.input}
            placeholder= 'Password'
            onChangeText={onChangePassword}
            value={password}
            secureTextEntry={isSecureEntry}
            icon={<TouchableOpacity onPress={()=> { setisSecureEntry((prev) => !prev)}}>
              <Text>{isSecureEntry?'Show':'Hide'}</Text>
            </TouchableOpacity>}
            
            // iconPosition="right"
        
        />
        
      </View>
      
      <View style= {styles.button}>
      <Button
        // style={styles.button}
        title="Login"
        onPress={() => {login(email,password)}}
      />
      
    </View>
    
      <View >
        <Text style={styles.signupui} onPress={() => navigation.navigate('SignUp')}>Dont have an account? Signup</Text>
            {/* <Button
                title="SignUp"
                onPress={() => navigation.navigate('SignUp')}
            /> */}
        </View>
      
      </View>
      </ScrollView>
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
      borderRadius: 10,
    },
    button: {
      height: 40,
      margin: 20,
      
      },
      texting:{
        height: 80,
      margin: 90,
      // backgroundColor:'blue'
      // borderWidth: 1,
      },
      signupui:{
        // alignContent:'center',
        textAlign:'center',

      },
      edged:{

      }

  });