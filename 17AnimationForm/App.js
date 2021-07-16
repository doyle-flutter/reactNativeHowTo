import React, { useState, useRef } from 'react';
import { Animated, StyleSheet, Modal, Text, View, TouchableOpacity, SafeAreaView, Dimensions, Image, ScrollView, FlatList, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialIcons, AntDesign, MaterialCommunityIcons, EvilIcons, Entypo } from '@expo/vector-icons';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { abs, Easing, interpolate } from 'react-native-reanimated';

function BodyView({navigation}){

  const _start = 100,
        _end = Dimensions.get('screen').width-40,
        _time = 2000,
        _animValue = useRef(new Animated.Value(_start)).current,
        [check, setState] = useState(false),
        animation = _ => {
          const anim = Animated.timing(_animValue, {
            toValue: _end,
            duration: _time,
            useNativeDriver: false,
          });
          !check ? anim.start() : anim.reset();
          setState(!check);
        }

  return (
    <View style={{flex: 1}}>
      <Animated.View style={{width: _animValue, padding: 20, margin:20, borderWidth: 2, borderColor: 'black'}}>
        <TextInput placeholder={"TextInput Animation"} numberOfLines={1} />
      </Animated.View>
        <View style={{position:'absolute', bottom: 50, right: 50,}}>
          <TouchableOpacity onPress={animation}>
            <View style={{paddingHorizontal: 10, paddingVertical: 14, backgroundColor: check ? 'red' : 'blue', borderRadius: 30}}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>{"FAB"}</Text>
            </View>
          </TouchableOpacity>
        </View>
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
