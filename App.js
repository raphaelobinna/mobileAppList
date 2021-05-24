
import React, { useState } from 'react';
import Header from './components/Header'
import uuid from 'uuidv4'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'
import {View, Text, StyleSheet, Alert, Image, FlatList} from 'react-native'

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'}
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (item) => {
    console.log('it is',item)
    if(!item){
      console.log('mall')
    }
    if(!item) {
      Alert.alert('Error', 'Text field is null!', [
        {
          text: "Ok",
          onPress: () => console.log("Okay Pressed"),
          style: "cancel"
        },
        //{ text: "OK", onPress: () => console.log("OK Pressed") }
      ])
    } else {
      setItems(prevItems => {
        return [{id: uuid(), text: item}, ...prevItems];
      })
    }
  }
  return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <AddItem addItem={addItem}/>
      <FlatList 
        data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
})

export default App;