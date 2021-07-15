import React, { useState, useRef } from 'react';
import { Animated, StyleSheet, Modal, Text, View, TouchableOpacity, SafeAreaView, Dimensions, Image, ScrollView, FlatList, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialIcons, AntDesign, MaterialCommunityIcons, EvilIcons, Entypo } from '@expo/vector-icons';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { abs, Easing, interpolate } from 'react-native-reanimated';

function BodyView({navigation}){

  const menuDatas = [
    "서울",
    "인천",
    "경기",
    "대전",
    "대구",
    "울산",
    "부산",
    "광주",
    "세종",
    "제주",
    "강원",
    "충북",
    "충남",
    "전북",
    "전남",
    "전북",
    "경북",
    "경남",
    "서울"
  ];

  const style = StyleSheet.create({
    wrapper: {paddingBottom: 60, backgroundColor: 'white'},
    container: {margin: 20, zIndex: 1},
    inputTxtWrapper: {marginTop: 10},
    inputTitle: {fontWeight: 'bold', fontSize: 16},
    inputTxt: {padding: 20, borderRadius: 4, borderColor: 'grey', borderWidth: 1},
    area: {height: 200, borderWidth: 1, borderColor: 'grey', borderRadius: 4, padding: 10}
  });

  return (
    <ScrollView>
      <View style={style.wrapper}>
        <View style={style.container}>
          <View><Text style={style.inputTitle}>{'Full Name'}</Text></View>
          <View style={style.inputTxtWrapper}><TextInput placeholder={'Your Name'} style={style.inputTxt} clearButtonMode={'always'} autoCapitalize={'none'} /></View>
        </View>
        <View style={style.container}>
          <View><Text style={style.inputTitle}>{'Last Name'}</Text></View>
          <View style={style.inputTxtWrapper}><TextInput placeholder={'Your Last Name'} style={style.inputTxt} clearButtonMode={'always'} autoCapitalize={'none'} /></View>
        </View>
        <DropDownMenu datas={menuDatas} />
        <View style={style.container}>
          <View><Text style={style.inputTitle}>{'Subject'}</Text></View>
          <View style={style.inputTxtWrapper}><TextInput placeholder={'Write something...'}  multiline={true} style={style.area} textAlignVertical={"top"} autoCapitalize={'none'} /></View>
        </View>
        <TouchableOpacity>
          <View style={{alignItems: 'center', margin: 20, backgroundColor: 'blue', padding: 20, borderRadius: 10, zIndex: 20}}><Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>{'Send'}</Text></View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function DropDownMenu({datas}){
  let [check, setState] = useState(false);
  const menuDatas = Array.from(new Set(datas), x => x);
  let [menuTitle, menuSetState] = useState(menuDatas[0]);

  const _onPress = _ => setState(!check);

  return (
    <View style={{ zIndex: 3, backgroundColor: 'white'}}>
      <View style={{margin: 20, }}><Text style={{fontWeight: 'bold', fontSize: 16}}>{"Address"}</Text></View>
      <View style={{backgroundColor: 'grey', zIndex: 3, marginHorizontal: 20, marginBottom: 20, borderRadius: 8}}>
        <TouchableOpacity onPress={_onPress}>
          <View style={{padding: 20, margin: 5, backgroundColor: 'white',  borderRadius: 8, borderWidth: 2, borderColor: 'grey'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: 'bold'}}>{menuTitle}</Text>
              <AntDesign name="caretdown" size={18} color="black" />
            </View>
          </View>
        </TouchableOpacity>
        { check 
          ? (<View style={{position: 'absolute', top: 0, left: 0, right: 0, height: 300, backgroundColor: 'purple', overflow:'hidden', zIndex: 8, borderRadius: 8}}>
              <ScrollView>
                <View style={{backgroundColor: 'grey'}}>
                  {menuDatas.map((e,i) => (
                    <TouchableOpacity key={i} onPress={() => {menuSetState(e); setState(!check);}}>
                      <View style={{backgroundColor: menuTitle === e? 'blue': 'white', margin: 10, padding: 20, alignItems: 'center', borderRadius: 10, }}>
                        <Text style={{ color: menuTitle === e ? 'white' : 'black', fontWeight: 'bold' }}>{e}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>)
          : (<View></View>)
        }
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
