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

const styles = StyleSheet.create({wrapper: {flex: 1, backgroundColor:'#2196F3'}});

function AppBar(){
  const appBarStyles = {
    wrapper: {backgroundColor:'#2196F3', height: 50, alignItems:'center', justifyContent:'center', paddingTop:10},
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

  const styleBody = {
    bodyWrapper: {
      flex: 1,
      alignItems: "center",
      alignConntents: "center"
    }
  }

  const _click = _ => setState(!check);

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
      <View>
        <TouchableOpacity onPress={_click}>
          <View style={{padding: 20, backgroundColor: 'blue', borderRadius: 10, width:200,}}>
            <Text style={{color: 'white', fontWeight: 'bold', textAlign:'center'}}>{"DropDown"}</Text>
          </View>
          <View style={{display: check ? 'flex':'none', position:'absolute', top:48, left:0, right:0, padding:10}}>
            {
              menuDatas.map(e => (
                <TouchableOpacity key={e}>
                  <View style={{padding: 10, margin:1, borderWidth:1, borderStyle:'solid'}}>
                    <Text>{e}</Text>
                  </View>
                </TouchableOpacity>
                )
              )
            }
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
