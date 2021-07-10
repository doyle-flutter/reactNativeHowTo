import React, { useState } from 'react';
import { StyleSheet, Modal, Text, View, TouchableOpacity, SafeAreaView, Dimensions, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// * React Navigation
// https://reactnavigation.org/docs/getting-started/

// * React Navigation install
// > npm install @react-navigation/native
// > npm install @react-navigation/stack

function BodyView({navigation}){

  const imgUri = 'https://cdn.pixabay.com/photo/2021/07/05/11/05/pink-beach-6388864__480.jpg';

  let [show1, setSetate1] = useState(false);
  let [show3, setSetate3] = useState(false);

  const onPress1 = _ => setSetate1(!show1);
  const onPress2 = _ => navigation.push("Details", {imgUri});
  const onPress3 = _ => setSetate3(!show3);

  const styles = {
    txtWrapper: {
      padding: 10,
      borderColor: '#548CA8',
      borderStyle: 'solid',
      borderWidth: 2
    },
    txt: {
      fontWeight: 'bold',
      color: '#334257'
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#EEEEEE'}}>
      <TouchableOpacity onPress={onPress1}>
        <View style={styles.txtWrapper}>
          <Text style={styles.txt}>{"Show Image 01"}</Text>
          <Image style={{width: 200, height: 200, margin: 10}} source={{uri: imgUri}} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress2}>
      <View style={styles.txtWrapper}>
          <Text style={styles.txt}>{"Show Image 02"}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress3}>
        <View style={styles.txtWrapper}>
          <Text style={styles.txt}>{"Show Image 03"}</Text>
        </View>
      </TouchableOpacity>
      <View style={{display: show1 ? 'flex' : 'none', position: 'absolute', top:0, left:0, right:0, bottom:0, backgroundColor: 'white'}}>
        <TouchableOpacity onPress={onPress1}>
          <Image style={{width: '100%', height: '100%'}} source={{uri:imgUri}} />
        </TouchableOpacity>
      </View>
      <Modal 
        animationType={'fade'}
        visible={show3}>
          <TouchableOpacity onPress={onPress3}>
          <Image style={{width: '100%', height: '100%'}} source={{uri:imgUri}} />
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

function Details({navigation, route}){
  const { imgUri } = route.params;
  const back = _ => navigation.pop();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TouchableOpacity onPress={back}>
        <Image style={{height:"100%"}} source={{uri: imgUri}} />
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BodyView">
        <Stack.Screen name="BodyView" component={BodyView} options={{title:"Image Modal"}}/>
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
