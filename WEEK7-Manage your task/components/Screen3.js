import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Button,
} from 'react-native';
import backIcon from '../assets/backIcon.png';
import task from '../assets/task.png';

const Screen3 = ({ navigation, route }) => {
  const { userName } = route.params;

  const [input, setInput] = useState('');

  const addData = (txt) => {
    fetch('https://6707423da0e04071d22993f5.mockapi.io/todos', {
      method: 'POST',
      body: JSON.stringify({
        title: txt,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backIcon} />
        </TouchableOpacity>
        <View style={styles.textHeaderView}>
          <Text style={styles.text}>Hi, {userName}!</Text>
          <Text style={styles.text}>Have agrate day a head</Text>
        </View>
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'Bold',
          marginTop: 35,
        }}>
        INPUT YOUR JOB
      </Text>
      <View style={styles.inputContainer}>
        <Image source={task} style={{ width: 10, height: 10, margin: 5 }} />
        <TextInput
          placeholder="input your job"
          placeholderTextColor="#A4A4A4"
          onChangeText={setInput}
          value={input}
        />
      </View>
      <View style={{ marginLeft: 100, marginRight: 100, marginTop: 20 }}>
        <Button title="Finish" onPress={()=>{
          addData(input);
          navigation.goBack();

        }}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'space-between',
  },
  text: {
    fontSize: 15,
    margin: 5,
  },
  textHeaderView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#A4A4A4',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 50,
  },
});

export default Screen3;
