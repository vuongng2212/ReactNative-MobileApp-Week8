import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import plusBtn from './assets/plus_button.png'
import deltaiScreen from './components/detailScreen'

function Main({navigation}) {
  const [search, setSearch] = useState('');
  const [dt, setDT] = useState([]);
  const fetchData = fetch('https://670b8f2aac6860a6c2cc6079.mockapi.io/Food');
  fetchData.then((res) => res.json()).then((data) => setDT(data));

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ color: '#000000A6', fontWeight: 'Bold' }}>
          Welcome, Jala!
        </Text>
        <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'Bold' }}>
          Choice you Best food
        </Text>
        <View style={styles.textInput}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#0000004D"
            value={search}
            onChangeText={(search) => setSearch(search)}
          />
        </View>
      </View>
      <View style={styles.navView}>
        <View style={styles.navItem}>
          <TouchableOpacity>
            <Text style={{textAlign:'center', marginTop: 4}}>Donut</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.navItem}>
          <TouchableOpacity>
            <Text style={{textAlign:'center', marginTop: 4}}>Pink Donut</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.navItem}>
          <TouchableOpacity>
            <Text style={{textAlign:'center', marginTop: 4}}>Floating</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={dt}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              source={{
                uri: item.img
              }}
              style={{
                width: 70,
                height: 70,
                marginTop: 10
              }}
            />
            <View>
                <Text style={{margin: 5, fontSize:20, fontWeight: 'Bold'}}>{item.title}</Text>
              <Text style={{color:'#0000008A', margin: 5}}>{item.detail}</Text>
              <View style={{flexDirection: 'row', justifyContent:'space-between', width: 235}}>
                <Text style={{fontSize: 20, fontWeight: 'Bold', margin: 5}}>${item.price}</Text>
              <TouchableOpacity 
              style={{justifyContent: 'flex-end', alignItems: 'flex-end'}} 
              onPress={()=>{
                navigation.navigate('Detail', {img: item.img,title: item.title, detail: item.detail, price: item.price});
              }}>
                <Image source={plusBtn}/>
              </TouchableOpacity>
              </View>

              
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Main}  options={{ headerShown: false }}/>
        <Stack.Screen name="Detail" component={deltaiScreen}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 5,
  },
  navView: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
  },
  navItem: {
    flex: 1,
    textAlign: 'center',
    marginRight: 5,
    borderWidth: 1,
    height: 30,
    borderRadius: 5,
  },
  item: {
    borderRadius: 5,
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#F4DDDD'
  },
});
