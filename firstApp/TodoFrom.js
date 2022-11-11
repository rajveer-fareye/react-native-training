import React ,{useState} from "react";
import { View , Text, TextInput, StyleSheet, TouchableOpacity,Button} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';


const TodoForm = () => {


    const [number, onChangeNumber] = React.useState('');


    const [mydate, setDate] = useState(new Date());
   const [displaymode, setMode] = useState('date');
   const [isDisplayDate, setShow] = useState(false);
   const changeSelectedDate = (event, selectedDate) => {
   const currentDate = selectedDate || mydate;
   setDate(currentDate);
};
const showMode = (currentMode) => {
   setShow(true);
   setMode(currentMode);
};
const displayDatepicker = () => {
   showMode('date');
};
    
let today = new Date()


    return(
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Enter your Todo"
                keyboardType='ascii-capable'
            />
            {/* <TouchableOpacity>
                <Text>Date</Text>
                <DateTimePicker value={new Date() }  mode="time"/>
            </TouchableOpacity>
            <DateTimePicker value={new Date() }  mode="date"/> */}

            <View>
                <Text> Due Date {(new Date(mydate)).toString()}</Text>
                <Button onPress={displayDatepicker} title="Select due date" />
            </View>
               {isDisplayDate && (
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={mydate}
                     mode={displaymode}
                     is24Hour={true}
                     display="default"
                     onChange={changeSelectedDate}
            />
         )}
            
        </View>
    )
}

export default TodoForm;

const styles = StyleSheet.create({
    input: {
      height: 80,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });