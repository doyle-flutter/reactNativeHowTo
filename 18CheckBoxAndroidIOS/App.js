import React, { useState, useRef } from 'react';
import { Animated, StyleSheet, Modal, Text, View, TouchableOpacity, SafeAreaView, Dimensions, Image, ScrollView, FlatList, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialIcons, AntDesign, MaterialCommunityIcons, EvilIcons, Entypo } from '@expo/vector-icons';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { abs, Easing, interpolate } from 'react-native-reanimated';

function CheckBox({backgroundColor = 'white', size = 30, iconColor = 'white' }){return (<View style={{width: size, height: size, borderWidth: 2, borderRadius: 6, margin: 4,  borderColor: 'grey', alignItems: 'center', justifyContent: 'center', backgroundColor: backgroundColor}}><Entypo name="check" size={size-6} color={iconColor} /></View>);}
function Row({children, style}){return (<View style={{flexDirection:'row', ...style}}>{children}</View>);}
function Column({children}){return (<View style={{flexDirection:'column', ...style}}>{children}</View>);}

function BodyView({navigation}){

  const datas = ['One','Two','Three'];

  let [checkValue1, setState1] = useState(0);
  let [checkValue2, setState2] = useState([0]);

  return (
    <View style={{flex: 1, backgroundColor: '#eee', }}>
      <View>
        <View style={{margin: 20, borderBottomColor: 'grey', borderBottomWidth: 2, paddingBottom: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{'CheckBox UI Example'}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
          <CheckBox />
          <CheckBox backgroundColor={'grey'} />
        </View>
      </View>
      <View>

        {/* (1) */}
        <View style={{margin: 20, borderBottomColor: 'grey', borderBottomWidth: 2, paddingBottom: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{"단일"}</Text>
        </View>
        <View>
          {datas.map((e,i) => (<TouchableOpacity key={i} onPress={_ => setState1(i)}>
            <View style={{margin: 20}}>
              <Row
                style={{alignItems: 'center'}} 
                children={(<><CheckBox size={24} backgroundColor={ checkValue1 === i ? 'blue' : null} iconColor={checkValue1 == i ? 'white' : '#eee'} /><Text>{e}</Text></>)} />
            </View>
          </TouchableOpacity>))}
        </View>

        {/* (2) */}
        <View style={{margin: 20, borderBottomColor: 'grey', borderBottomWidth: 2, paddingBottom: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{"복수(2개 이상)"}</Text>
        </View>
        <View>
          {datas.map((e,i) => (<TouchableOpacity key={i} onPress={ () => {
            let index = checkValue2.indexOf(i);
            if(checkValue2.length === 1 && checkValue2[0] === i) return; 
            if(index >= 0) return setState2(checkValue2.filter(ele => ele !== i) );
            return setState2([...checkValue2, i]);
          }}>
            <View style={{margin: 20}}>
              <Row
                style={{alignItems: 'center'}} 
                children={(<><CheckBox size={24} backgroundColor={ checkValue2.indexOf(i) >= 0 ? 'blue' : null} iconColor={checkValue2.indexOf(i) >=0 ? 'white' : '#eee'} /><Text>{e}</Text></>)} />
            </View>
          </TouchableOpacity>))}
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
        <Stack.Screen name="BodyView" component={BodyView} options={{title:"RN - How To"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
