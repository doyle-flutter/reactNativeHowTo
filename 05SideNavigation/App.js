import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';

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

function Body(){

  const menuDatas = ["menu1", "menu2", "menu3"];

  const viewWidth = Dimensions.get("window").width;
  const viewHeight = Dimensions.get("window").height;

  let [check, setState] = useState(false);

  let start = 120;
  let end = viewWidth/2;
  let increaseValue = 4;
  let [animValue, animSetState] = useState(start);
  let [check2, setState2] = useState(false);

  const _click = _ => setState(!check);

  const _animClick = _ => setTimeout(() => {
    if(check2){
      animSetState(start);
      setState2(false)
      return;
    }
    if(!check2) setState2(true);
    if(animValue >= end) return;
    animSetState(animValue+=increaseValue);
    _animClick();
  }, 10);

  const menuView = _ => menuDatas.map(e => (
    <View key={e}>
      <TouchableOpacity>
        <View style={{padding: 20}}>
          <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>{e}</Text>
        </View>
      </TouchableOpacity>
    </View>
    ));

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
      <View>
        <TouchableOpacity onPress={_click}>
          <View style={{padding:20, backgroundColor:'blue', borderRadius:10, width:200,}}>
            <Text style={{color:'white', fontWeight:'bold', textAlign:'center'}}>{"Side"}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={_animClick}>
          <View style={{padding:20, marginTop:20, backgroundColor:'blue', borderRadius:10, width:200,}}>
            <Text style={{color:'white', fontWeight:'bold', textAlign:'center'}}>{"Side2Anim"}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{display: check ? 'flex' : 'none', position:'absolute', top:0, bottom:0, left:0, right:viewWidth/2, backgroundColor:'red'}}>{menuView()}</View>
      <View style={{display: check2 ? 'flex' : 'none', position:'absolute', top:0, bottom:0, left:0, width:animValue, backgroundColor:'red'}}>{menuView()}</View>
    </View>
  );
}
