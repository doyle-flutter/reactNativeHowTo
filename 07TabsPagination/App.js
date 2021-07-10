import React, { useState } from 'react';
import { StyleSheet, Modal, Text, View, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  return (
    <View style={styles.wrapper}>
      <AppBar />
      <Body />
    </View>
  );
}

const styles = StyleSheet.create({wrapper: {flex:1, backgroundColor:'#2196F3'}});

function AppBar(){
  const appBarStyles = {
    wrapper: {backgroundColor:'#2196F3', height:50, alignItems:'center', justifyContent:'center', paddingTop:10},
    title: {flex:1, textAlignVertical:"center", color:'white', fontWeight:'bold', fontSize:16 }
  };
  return (
    <SafeAreaView>
      <View style={appBarStyles.wrapper}>
        <Text style={appBarStyles.title}>{"RN - HowTo"}</Text>
      </View>
    </SafeAreaView>
  );
}

// * React Navigation
// https://reactnavigation.org/docs/getting-started/

// * React Navigation install
// > npm install @react-navigation/native
// > npm install @react-navigation/bottom-tabs
// > expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

const Tab = createBottomTabNavigator();

function Body(){
  let [modalVisible, setModalVisible] = useState(false);
  let [modalVisible2, setModalVisible2] = useState(false);

  return (
    // (1)
    <NavigationContainer>
      <Tab.Navigator initialRouteName={Fir}>
        <Tab.Screen name="Fir" component={Fir} />
        <Tab.Screen name="Sec" component={Sec} />  
      </Tab.Navigator>
    </NavigationContainer>

    // (2)
    // <NavigationContainer>
    //   <Tab.Navigator initialRouteName={Fir} tabBarOptions={{showLabel: false, style:{ position:'absolute', margin: 40, paddingBottom: 0, borderRadius: 20, shadowColor: 'grey', shadowOffset:{width:0, height:10}, shadowOpacity:0.25, shadowRadius: 3.5, elevation: 5}}}>
    //     <Tab.Screen name="Fir" component={Fir} options={{tabBarIcon: ({focused, color, size}) => (
    //       <View style={{alignContent: 'center', justifyContent:'center'}}><Text style={{fontSize: focused ? 20 : 14, color: focused ? 'red' : 'grey'}}>{"FIR"}</Text></View>
    //     )}} />
    //     <Tab.Screen name="Sec" component={Sec} options={{tabBarIcon: ({focused, color, size}) => (
    //       <View style={{alignContent: 'center', justifyContent:'center'}}><Text style={{fontSize: focused ? 20 : 14, color: focused ? 'blue' : 'grey'}}>{"SEC"}</Text></View>
    //     )}} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}

function Fir({navigation}){
  return (
    <View style={{flex:1, justifyContent: 'center', alignContent:'center', backgroundColor: 'red'}}>
      <Text style={{textAlign:'center', color: 'white', fontWeight:'bold', margin: 20}}>{"Fir"}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Sec')}>
        <View style={{padding: 10, margin: 10, borderWidth:2, borderStyle: 'solid', borderColor: 'white'}}>
          <Text style={{textAlign:'center', color: 'white'}}>{"Go to Sec"}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function Sec({navigation}){
  return (
    <View style={{flex:1, justifyContent: 'center', alignContent:'center', backgroundColor: 'blue'}}>
      <Text style={{textAlign:'center', color: 'white', fontWeight:'bold', margin: 20}}>{"Sec"}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Fir')}>
        <View style={{padding: 10, margin: 10, borderWidth:2, borderStyle: 'solid', borderColor: 'white'}}>
          <Text style={{textAlign:'center', color: 'white'}}>{"Go to Fir"}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
