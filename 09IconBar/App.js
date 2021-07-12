import React, { useState } from 'react';
import { StyleSheet, Modal, Text, View, TouchableOpacity, SafeAreaView, Dimensions, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

// npm i -s @expo/vector-icons

function BodyView({navigation}){

  const datas = [
    {'title':'Title1', 'des':'DES....'},
  ];

  let [hIconIndex, setSetate1] = useState(0);
  let [vIconIndex, setSetate2] = useState(0);

  const onPress1 = e => setSetate1(e);
  const onPress2 = e => setSetate2(e);

  const styles = {
    iconButton : {
      padding: 10,
    }
  };

  const icons = [
    <MaterialIcons name="home" size={24} />,
    <AntDesign name="search1" size={24} />,
    <MaterialCommunityIcons name="message-processing-outline" size={24} />,
    <Ionicons name="person-outline" size={24} />
  ];

  const icons2 = [
    <MaterialIcons name="home" size={24} />,
    <AntDesign name="search1" size={24} />,
    <MaterialCommunityIcons name="message-processing-outline" size={24} />,
    <Ionicons name="person-outline" size={24} />
  ];

  return (
    <View style={{flex: 1, backgroundColor: '#EEEEEE'}}>
      
      <View style={{flex: 1, justifyContent:'center', borderWidth: 2, borderColor: 'black', margin: 10}}>
        <View style={{flexDirection: 'row', margin: 20, justifyContent:'space-around', alignItems:'center', backgroundColor: 'white', padding: 10}}>
          {
            icons.map((e,i,arr) => {
                return (
                  <TouchableOpacity key={i} onPress={() => onPress1(i)}>
                    <View style={{ borderRadius: 10, borderWidth: 2, borderColor: hIconIndex == i ? 'green' : 'white', ...styles.iconButton }}>
                      {e}
                    </View>
                  </TouchableOpacity>
                );
              }
            )
          }
        </View>
      </View>
      <View style={{flex: 1, alignItems:'center', borderWidth: 2, borderColor: 'black', margin: 10}}>
        <View style={{flex:1, margin: 20, justifyContent:'space-around', alignItems:'center', backgroundColor: 'white', padding: 10}}>
          {
            icons2.map((e,i,arr) => {
                return (
                  <TouchableOpacity key={i} onPress={() => onPress2(i)}>
                    <View style={{ borderRadius: 10, borderWidth: 2, borderColor: vIconIndex == i ? 'green' : 'white', ...styles.iconButton }}>
                      {e}
                    </View>
                  </TouchableOpacity>
                );
              }
            )
          }
        </View>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BodyView">
        <Stack.Screen name="BodyView" component={BodyView} options={{title:"IconBar - Horizontal & Vertical"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
