import { SafeAreaView, View, Text, TextInput, useState, StyleSheet , Button, CheckBox, navigation, Alert, ScrollView} from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from './src/context/AuthContext';


const Signup = ({navigation}) => {
    // const [text, setText] = useState('');
    const [firstName, onChangeFirstName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [password,onChangePassword] = React.useState('');
    
    const {register} = useContext(AuthContext);

  return (
    <SafeAreaView style={{flex:2}}>
      <ScrollView >
      <View  style={{flex:1}}>
        <Text style={styles.texting}> we are inspired from local app</Text>
      </View>
      <View style={{flex:1}}>
          <View  >
            <TextInput
                style={styles.input}
                placeholder= 'First Name'
                onChangeText={onChangeFirstName}
                value={firstName}
            />
            <TextInput
                style={styles.input}
                placeholder= 'Last Name'
                onChangeText={onChangeLastName}
                value={lastName}
            />
          </View>
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
            
            />
          </View>
          
      
          <View style={styles.button}> 
          <Button
            
            title="SignUp"
            onPress={() => register(firstName,lastName,email,password)}
          />
          
          </View>
          <View>
            
            <Text
                  
                  style={styles.signupui}
                  onPress={() => navigation.navigate('Login')}>
                  Already Have account! Login
                </Text>
          </View>
      </View> 
      </ScrollView>
    </SafeAreaView>
  )
}

export default Signup;



const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  button: {
    height: 40,
    margin: 20,
    // borderWidth: 1,
    // padding: 10,
    // borderRadius: 15,
    // backgroundColor: 'black',
    },
    signupui:{
      // alignContent:'center',
      textAlign:'center',

    },
    texting:{
      height: 80,
    margin: 90,
    // borderWidth: 1,
    },
});