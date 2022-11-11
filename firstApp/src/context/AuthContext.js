// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import { BASE_URL } from '../config';
import { useNavigation } from '@react-navigation/native';
// import { AsyncStorage } from 'react-native';



export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const navigation = useNavigation();
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);

    const register = (firstName, lastName, email, password) => {
            fetch('http://10.0.2.2:8080/api/user', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  firstName:firstName,
                  lastName:lastName,
                  email:email,
                  password:password
                })
              })
          .then((response) => {
            if (response.status === 200){
              console.log(response.data);
              console.log("success");
            }
            else if (response.status === 401 || response.status === 403) {
              console.log("this failed");
            } else {
              console.log("this failed beyond limit");
            }
          })
          .catch(e => {
            console.log(`login error ${e}`);
            // setIsLoading(false);
          });
        
      };
      

    const login = (email, password) => {
      fetch('http://10.0.2.2:8080/login', {
            
        body:`username=${email}&password=${password}`,
        // body: "username=rajveer@gmail.com&password=bant",
        credentials: "include",
        method: "POST",
        headers: {
            "content-type": "application/x-www-form-urlencoded"
            }
        
      })
          .then((response) => {
            if (response.status === 200){
              console.log(response.data);
              console.log("success");
              
              navigation.navigate('MainPage');
            }
            else if (response.status === 401 || response.status === 403) {
              console.log("this failed");
            } else {
              console.log("this failed beyond limit");
            }
          })
          .catch(e => {
            console.log(`login error ${e}`);
            // setIsLoading(false);
          });
  }


      


      
    return (
        <AuthContext.Provider value={{isLoading,userInfo,register,login}}>{children}</AuthContext.Provider>

    );

}




