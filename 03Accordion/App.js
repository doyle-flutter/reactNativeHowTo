import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.wrapper}>
      <AppBar />
      <Accordion />
    </View>
  );
}

const styles = StyleSheet.create({wrapper: {flex: 1, backgroundColor:'#2196F3'}});

function AppBar(){
  const appBarStyles = {
    wrapper: {backgroundColor:'#2196F3', height: 70, alignItems:'center', paddingTop: 20, paddingBottom: 10},
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

function Accordion(){
  const viewWidth = Dimensions.get("window").width;
  const viewHeight = Dimensions.get("window").height;

  const _datas = [
    {
      'title':'Section 1',
      'des':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      'title':'Section 2',
      'des':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      'title':'Section 3',
      'des':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
  ];

  const styles = {
    wrapper : {flex: 1, backgroundColor:'white'},
    ac : { width: viewWidth, height: 200,}
  }

  return (
    <View style={styles.wrapper}>
      <View>
        {_datas.map( e => (<Ac title={e['title']} des={e['des']} key={e['title']} />) )}
      </View>
    </View>
  );
}

function Ac({title, des}){
  let [check, setState] = useState(false);

  const _onPressed = _ => setState(!check);

  const styles = {
    wrapper: {
      padding: 10,
      margin: 10,
      borderWidth: 2,
      borderColor: 'grey'
    },
    desWrapper: {
      paddingLeft: 10,
      paddingTop: 10,
      marginBottom: 10
    }
  }

  return (
    <TouchableOpacity onPress={_onPressed}>
      <View style={styles.wrapper}>
        <View style={{backgroundColor: !check ? 'white' : 'grey', padding: 10.0}}>
          <Text style={{color: !check ? 'black' : 'white'}}>{title}</Text>
        </View>
        <View style={styles.desWrapper}>
          <Text style={{display: check ? 'flex' : 'none'}}>{des}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
