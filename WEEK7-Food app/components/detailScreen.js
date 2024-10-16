import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import vector from '../assets/Vector.png';
export default function deltaiScreen({ route, navigation }) {
  const { title, detail, price, img } = route.params;
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image
          source={{ uri: img }}
          style={{
            width: 250,
            height: 250,
            marginTop: 10,
          }}
        />
      </View>
      <Text style={{ fontSize: 20, fontWeight: 'Bold', marginLeft: 20 }}>
        {title}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 5,
        }}>
        <Text style={{ color: '#0000008A', marginLeft: 20 }}>{detail}</Text>
        <Text style={{ marginRight: 30, fontSize: 20, fontWeight: 'Bold' }}>
          ${price}
        </Text>
      </View>
      <View style={{ flexDirection: 'row', marginLeft: 20 }}>
        <Image source={vector} />
        <Text style={{ color: '#0000008A', fontSize: 15 }}>Delivery in </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ marginLeft: 20 }}>30 min</Text>
        <View style={{ flexDirection: 'row', marginRight: 30 }}>
          <TouchableOpacity
            style={styles.plusMinusBtn}
            onPress={() => {
              setQuantity((quantity) => (quantity -= 1));
            }}>
            <Text style={{ textAlign: 'center' }}>-</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: 'Bold' }}>{quantity}</Text>
          <TouchableOpacity
            style={styles.plusMinusBtn}
            onPress={() => {
              setQuantity((quantity) => (quantity += 1));
            }}>
            <Text style={{ textAlign: 'center' }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={{marginLeft: 20, marginTop: 5, fontSize: 20, fontWeight: 'bold'}}>Restaurants info</Text>
        <Text style={{marginLeft: 20, marginTop: 5}}>
          Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.   
        </Text>
        <TouchableOpacity style={styles.addToCardBtn}>
          <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', margin: 15, color: 'white'}}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusMinusBtn: {
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: '#F1B000',
    width: 20,
    height: 20,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 4,
  },
  addToCardBtn: {
    backgroundColor: '#F1B000',
    margin: 20,
    borderRadius: 5,
  },
});
