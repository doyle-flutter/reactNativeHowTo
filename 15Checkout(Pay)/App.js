import React, { useState, useRef } from 'react';
import { Animated, StyleSheet, Modal, Text, View, TouchableOpacity, SafeAreaView, Dimensions, Image, ScrollView, FlatList, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialIcons, AntDesign, MaterialCommunityIcons, EvilIcons, Entypo } from '@expo/vector-icons';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { abs, Easing, interpolate } from 'react-native-reanimated';

function BodyView({navigation}){

  const items = [
    {title: 'item 1',price: '$4',},
    {title: 'item 2',price: '$11',},
    {title: 'item 3',price: '$22',},
  ];

  return (
    <ScrollView>
      <View style={{marginBottom: 60}}>
        <View style={{backgroundColor: 'white', marginTop: 20, marginHorizontal: 20, paddingVertical: 20,}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 20,}}>
            <View style={{justifyContent:'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 22}}>{"Cart"}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{marginRight: 10}}>
                <Entypo name="shopping-cart" size={20} color="black" />
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>{"3"}</Text>
            </View>
          </View>
          <View>
            {
              items.map((e,_,__) => (
                <View key={_} style={{flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: 'white', paddingVertical: 20}}>
                  <View><Text style={{color: 'blue', fontWeight: 'bold'}}>{e.title}</Text></View>
                  <View><Text>{e.price}</Text></View>
                </View>
              ))
            }
          </View>
          <View style={{borderTopColor: 'grey', borderWidth: 1, marginTop: 20, marginHorizontal: 20}}></View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingVertical: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{"Total"}</Text>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{
              '$ ' + items.map((e,_,__) => e.price.split('$')[1])
                .reduce((prev, cur) => {
                  prev = Number.parseInt(prev), cur = Number.parseInt(cur); 
                  return prev + cur;
                }).toString()
            }</Text>
          </View>
        </View>

        <View style={{marginTop: 20, marginHorizontal:20, padding: 20, padding: 20, backgroundColor: 'white'}}>
          <View style={{marginBottom: 20}}><Text style={{fontWeight: 'bold', fontSize: 20}}>{"Biling Address"}</Text></View>
          {['FullName', 'E-Mail', 'Address'].map((e, _, __) => (<View key={_} style={{marginVertical: 20}}><TextInput placeholder={e} style={{padding: 20, borderWidth: 1, borderColor: 'grey', borderRadius: 5,}} clearButtonMode={'always'} autoCapitalize={'none'}></TextInput></View>))}
        </View>

        <View style={{marginBottom: 20, marginHorizontal:20, padding: 20, backgroundColor: 'white'}}>
          <View><Text style={{fontWeight: 'bold', fontSize: 20}}>{"Payment"}</Text></View>
          <View><Text style={{fontSize: 16}}>{"Accepted Card"}</Text></View>
          <View style={{flexDirection: 'row'}}>
            {
              [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9xgC0lMLOKurgNoZhPt7ELxiv5LqHXxlw22BSzYidJXQHs77_ooe1aDwnFYoKX4nRHiM&usqp=CAU",
                "http://www.businesskorea.co.kr/news/photo/201811/26647_37722_41.png"
              ].map((e, i) => <View key={i} style={{marginRight: 20, marginTop: 10}}><Image source={{uri:e}} style={{width: 30, height: 30, borderRadius: 8}} /></View>)
            }
          </View>
          {['Name on Card', 'Credit card number'].map((e, _, __) => (<View key={_} style={{marginVertical: 20}}><TextInput placeholder={e} style={{padding: 20, borderWidth: 1, borderColor: 'grey', borderRadius: 5,}} clearButtonMode={'always'} autoCapitalize={'none'}></TextInput></View>))}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {['Month', '', 'Year'].map((e, _, __) => (_ == 1 ? <View key={_} style={{justifyContent: 'center', alignItems: 'center', flex: 1}}><Text>{'/'}</Text></View> : <View key={_} style={{marginVertical: 20, flex: 2}}><TextInput placeholder={e} style={{padding: 20, borderWidth: 1, borderColor: 'grey', borderRadius: 5,}} clearButtonMode={'always'} autoCapitalize={'none'}></TextInput></View>))}
          </View>
          <View style={{marginVertical: 20}}><TextInput placeholder={'cvv'} style={{padding: 20, borderWidth: 1, borderColor: 'grey', borderRadius: 5,}} clearButtonMode={'always'} autoCapitalize={'none'}></TextInput></View>
        </View>

        <TouchableOpacity>
          <View style={{alignItems: 'center', margin: 20, backgroundColor: 'blue', padding: 20, borderRadius: 10}}><Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>{'Continue to checkout'}</Text></View>
        </TouchableOpacity>
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
