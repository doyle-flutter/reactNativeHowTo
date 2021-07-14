import React, { useState, useRef } from 'react';
import { Animated, StyleSheet, Modal, Text, View, TouchableOpacity, SafeAreaView, Dimensions, Image, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { abs, Easing } from 'react-native-reanimated';

function BodyView({navigation}){
  return (  
    <View style={{flex: 1, backgroundColor: '#eee'}}>
      <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
        <TouchableOpacity>
          <View>
            <Ionicons name="notifications" size={40} color="black" />
            <View style={{position: 'absolute', top: -12 , right: -8, borderRadius: 30, width:30, height:30, backgroundColor: 'red', justifyContent:'center'}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12, zIndex: 20, textAlign: 'center', textAlignVertical: 'center'}}>
                {1}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View style={{position:'absolute', bottom: 50, right: 50, borderRadius: 50, backgroundColor: 'blue', width: 50, height: 50, justifyContent: 'center', alignItems: 'center', shadowColor: 'black', shadowOpacity: 0.3, shadowRadius: 1, shadowOffset:{width:2, height: 4}, zIndex: 10, elevation: 10}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>{"FAB"}</Text>
        </View>
      </TouchableOpacity>
    </View>
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
