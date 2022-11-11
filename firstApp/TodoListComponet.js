import React,{Component} from "react";
import realm from './databases/allSchemas';
import { SafeAreaView,ScrollView, Text,View,FlatList,Alert ,StyleSheet, TouchableOpacity} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { updateIntoTodoList,insertIntoTodoList,deleteTodo, deleteAllTodoList,queryAllTodoList} from "./databases/allSchemas";
import Swipeout from "react-native-swipeout";

let FlatListItem= props => {
    const{itemIndex, id, name, creationDate}
}

export default class TodoListComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            todoLists : []
        };
    }

    reloadData = () =>{
        queryAllTodoList().then((todoLists) =>{
            this.setState({todoLists:todoLists})
        }).catch((error) => {
            this.setState({todoLists:[]})
        });
    }

    render(){
        return(
            <View style={StyleSheet.container}>
                <HeaderComponent/>
                <FlatList 
                style={Styles.flatlist } 
                data = {this.state.todoLists}
                renderItem={({item,index})=> <FlatListItem {...item} itemIndex = {index}
                onPressItem={()=> {
                    alert("you pressed item");
                }}/>}
                keyExtractor= {item => item.id}
                />
            </View>

        );
    }


}