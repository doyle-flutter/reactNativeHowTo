import React, { useState, useRef } from 'react';
import { Animated, StyleSheet, Modal, Text, View, TouchableOpacity, SafeAreaView, Dimensions, Image, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { abs, Easing } from 'react-native-reanimated';

function BodyView({navigation}){

  let _scCurrentPosition = 0;
  const _scrollController = useRef();
  const _handleScroll = e => _scCurrentPosition = e.nativeEvent.contentOffset.y;
  const _onPress = _ =>  {
    if(_scCurrentPosition <= 100) return _scrollController.current.scrollTo({y:2000}); 
    if(_scCurrentPosition > 100 && _scCurrentPosition <= 2500) return _scrollController.current.scrollToEnd();
    _scCurrentPosition = 0;
    return _scrollController.current.scrollTo({y:0, x:0, animated: false});
  }

  return (  
    <View style={{flex: 1, backgroundColor: '#eee'}}>
      <ScrollView ref={_scrollController} onMomentumScrollEnd={_handleScroll}>
        <View style={{justifyContent:'center', alignItems: 'center'}}>
        <View style={{marginVertical: 200}}><Text style={{}}>{"Begin"}</Text></View>
          <View style={{width: Dimensions.get('window').width, height: 2000, backgroundColor: 'blue'}}></View>
          <View style={{marginVertical: 200}}><Text style={{}}>{"ScrollController"}</Text></View>
          <View style={{width: Dimensions.get('window').width, height: 2000, backgroundColor: 'red'}}></View>
          <View style={{marginVertical: 200}}><Text style={{}}>{"END"}</Text></View>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={_onPress}>
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
