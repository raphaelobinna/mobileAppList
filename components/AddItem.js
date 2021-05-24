import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const AddItem = ({addItem}) => {

    const [text, setText] = useState('')

    const onChange = value => setText(value)
    return (
        <View>
            <TextInput placeholder="Add Item..."  style={styles.input} onChangeText={onChange}/>
            <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
                <Text style={styles.btnText}> 
                <FontAwesome name="plus" size={20} /> Add Item
                </Text>
            </TouchableOpacity>
        </View>
    )
};
 
const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default AddItem;