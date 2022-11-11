import React,{Component} from "react";
import realm from './databases/allSchemas';
import { SafeAreaView,ScrollView, Text,View,FlatList,Alert ,StyleSheet, TouchableOpacity, Button} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { updateIntoTodoList,insertIntoTodoList,deleteTodo, deleteAllTodoList,queryAllTodoList} from "./databases/allSchemas";
// import { Icon } from "react-native-vector-icons/Icon";
import { useNavigation } from '@react-navigation/native';
import TodoForm from './TodoFrom';

const MainPage = () => {
  const navigation = useNavigation();

    return (
        <SafeAreaView>
                <ScrollView style={styles.containertop}>
                <View style={styles.topview}>
                    <Text style={styles.texting}>Hi, Rajveer</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.button1}>
                        <TouchableOpacity
                        // style={styles.button}
                        // onPress={onPress}
                        >
                        <Text style={styles.textbutton}>Done</Text>
            
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button1}>
                        <TouchableOpacity
                        // style={styles.button}
                        // onPress={onPress}
                        >
                        <Text style={styles.textbutton}>Pending</Text>
            
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <ScrollView style={styles.contain}>
                <View style={styles.listing}>
                    <Text style={styles.demo}>
                      HII again 1 {"\n"}
                      {"\n"}
                      <Text style={styles.demo1}> Due Date    22/11/22</Text>
                    </Text>
                    <Text style={styles.demo}>
                      HII again 2 {"\n"}
                      {"\n"}
                      <Text style={styles.demo1}> Due Date    22/11/22</Text>
                    </Text>
                    <Text style={styles.demo}>
                      HII again 3 {"\n"}
                      {"\n"}
                      <Text style={styles.demo1}> Due Date    22/11/22</Text>
                    </Text>
                    <Text style={styles.demo}>
                      HII again 4 {"\n"}
                      {"\n"}
                      <Text style={styles.demo1}> Due Date    22/11/22</Text>
                    </Text>
                    <Text style={styles.demo}>
                      HII again 5 {"\n"}
                      {"\n"}
                      <Text style={styles.demo1}> Due Date    22/11/22</Text>
                    </Text>
                    <Text style={styles.demo}>
                      HII again 6 {"\n"}
                      {"\n"}
                      <Text style={styles.demo1}> Due Date    22/11/22</Text>
                    </Text>
                    <Text style={styles.demo}>
                      HII again 7 {"\n"}
                      {"\n"}
                      <Text style={styles.demo1}> Due Date    22/11/22</Text>
                    </Text>
                    <Text style={styles.demo}>
                      HII again 8 {"\n"}
                      {"\n"}
                      <Text style={styles.demo1}> Due Date    22/11/22</Text>
                    </Text>
                    
                </View>
            </ScrollView>
            <View>
                <TouchableOpacity>
                <Text style={styles.addsign} onPress={() => navigation.navigate('TodoForm')} >+</Text>
                
                </TouchableOpacity>
            </View>
            
            
        </SafeAreaView>
        
        
    )
}

export default MainPage;


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
      marginTop: 20,
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
      
      },
    texting:{
        fontSize:30,
        fontWeight:'bold',
        height: 80,
        margin: 60,
        marginLeft:120,
        color:'#a5c2a6',
        // fontStyle:
    // backgroundColor:'blue'
    // borderWidth: 1,
    },
    signupui:{
    // alignContent:'center',
    textAlign:'center',

    },
    edged:{

    },
    topview:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:'#3978bf',
        backgroundColor:'#bf4080',
        height:160,

    },
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        top:-20,
        marginBottom:35,

        
      },
      button1: {
        backgroundColor: '#ce93cf',
        width: '40%',
        height: 40,
        borderWidth:1,
        borderRadius:5,

      },
      listing:{
        // flex: 1,
        // flexDirection: "column",
        // justifyContent: 'space-around',
        alignItems:"center",
        top:20,
        // backgroundColor:'',

      },
      demo:{
        marginTop:20,
        marginBottom:20,
        // borderColor:'red',
        borderWidth:1,
        width:330,
        height:60,
        borderLeftWidth:7,
        borderLeftColor:'blue',
        borderRightWidth:0,
        borderTopWidth:0,
        paddingLeft:10,
        paddingTop:5,
        


      },
      demo1:{
        paddingBottom:2,
      },
      contain:{
        height:500,
      },
      containertop:{
        height:180,
        position:"relative",
      },
      addsign:{
        fontSize:40,
        borderWidth:1,
        // borderLeftWidth:20,
        // position:
        textAlign:"right",
        marginRight:20,
        marginLeft:320,
        marginBottom:10,
        paddingRight:15,
        borderRadius:50,
        // backgroundColor:'#ff8000',
        backgroundColor:'#bf4080',

      },
      textbutton:{
        paddingLeft:50,
        paddingTop:5,
        fontSize:20,
        fontWeight:"bold",
        color:'blue',
        shadowOffset:1,
        shadowColor:'white',

      }

  });