import { SafeAreaView, View, Text, TextInput, useState, StyleSheet , Button, CheckBox, navigation, Alert} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Login = ({navigation}) => {
    // const [text, setText] = useState('');
    const [name, onChangeName] = React.useState('');
    const [password,onChangePassword] = React.useState('');
    const [confirmPassword, onChangeConfirmPassword] = React.useState('');

  return (
    <SafeAreaView>
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
      <View>
        <TextInput
            style={styles.input}
            placeholder= 'Confirm Password'
            onChangeText={onChangeConfirmPassword}
            value={confirmPassword}
        
        />
      </View>
      
      <View>
      <Button
        style={styles.button}
        title="SignUp"
        onPress={() => Alert.alert('Signup Failed')}
      />
      
    </View>
    <View>
        {/* <Text> have an account? SignUp</Text> */}
        <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('Login')}>
              Already Have account
            </Text>
      </View>
      
      
    </SafeAreaView>
  )
}

export default Login;



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
    borderWidth: 1,
    // padding: 10,
    // borderRadius: 15,
    // backgroundColor: 'black',
    },
});