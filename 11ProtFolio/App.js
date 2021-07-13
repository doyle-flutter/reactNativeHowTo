// * ./app.json
// "orientation": "default",

import React, { useState } from 'react';
import { StyleSheet, Modal, Text, View, TouchableOpacity, SafeAreaView, Dimensions, Image, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

function BodyView({navigation}){

  const contents = [
    {
      img : 'https://www.w3schools.com/w3images/mountains.jpg',
      title : 'My Work',
      des : 'Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.'
    },
    {
      img : 'https://www.w3schools.com/w3images/lights.jpg',
      title : 'My Work',
      des : 'Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.'
    },
    {
      img : 'https://www.w3schools.com/w3images/nature.jpg',
      title : 'My Work',
      des : 'Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.'
    },
    {
      img : 'https://www.w3schools.com/w3images/mountains.jpg',
      title : 'My Work',
      des : 'Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.'
    },
  ];

  const desData = {
    img : 'https://www.w3schools.com/w3images/p3.jpg',
    title : 'Some Other Work',
    des : 'Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.',
  }

  const { landscape } = useDeviceOrientation();
  const {width} = Dimensions.get('screen');
  const _imgMargin = 20;
  let _imgSize = landscape ? width/4-(_imgMargin*2) : width/2-(_imgMargin*2);

  return (  
    <ScrollView>
      <View style={{flex: 1, }}>
        <View style={{ width:width, padding: 20, backgroundColor: 'white', borderBottomColor:'#eee', borderBottomWidth: 2}}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>{"Logo"}</Text>
        </View>
        <View>
          <View style={{ width:width, padding: 20, backgroundColor: 'white', }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, }}>{"PORTFOLIO"}</Text>
          </View>
          <View style={{flexDirection:'row', flexWrap: 'wrap', backgroundColor: 'white'}}>
            { 
              contents.map((item, i, arr) => (
                <View key={i} style={{width: _imgSize, margin: _imgMargin }}>
                  <Image style={{width: _imgSize, height: _imgSize}} source={{uri: item.img}} />
                  <View style={{padding: 10}}>
                    <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
                  </View>
                  <Text>{item.des}</Text>
                </View>
              )) 
            }
          </View>
        </View>
        <View>
          {
            ((item) => (
              <View key={"btm"} style={{margin: 20}}>
                <Image style={{width: width-40, height: width-40}} source={{uri: item.img}} />
                <View style={{margin: 20}}>
                  <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
                </View>
                <View style={{marginBottom: 40, paddingHorizontal: 20}}>
                  <Text>{item.des}</Text>
                </View>
              </View>
            ))(desData)
          }
        </View>
      </View>
    </ScrollView>
  );
}

const Stack = createStackNavigator();

export default function App() {

  return (  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BodyView">
        <Stack.Screen name="BodyView" component={BodyView} options={{title:"RN - How To"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
