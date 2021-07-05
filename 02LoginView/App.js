import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, SafeAreaView, TextInput, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.wrapper}>
      <AppBar />
      <LoginView />
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
        <Text style={appBarStyles.title}>
          {"RN - HowTo"}
        </Text>
      </View>
    </SafeAreaView>
  );
}

function LoginView(){

  const viewWidth = Dimensions.get("window").width;

  return (
    <View style={{flex: 1, backgroundColor:'white'}}>
      <ScrollView>
        <View style={{paddingBottom: 40}}>
          <View>
            <Image style={{width: viewWidth-40, height:viewWidth-40, borderRadius: viewWidth, margin:20,}} source={{uri: "https://cdn.pixabay.com/photo/2020/10/12/22/15/glass-5650335__340.jpg"}} />
          </View>
          <View>
            <View style={{margin:20}}><Text style={{fontSize: 20, fontWeight: 'bold'}}>{"UserName"}</Text></View>
            <View style={{width: viewWidth-40, marginLeft: 20, marginRight:20, borderStyle:'solid', borderWidth: 2}}>
              <TextInput placeholder="ex) rn@google.com" style={{padding: 10}}></TextInput>
            </View>
          </View>
          <View>
            <View style={{margin:20}}><Text style={{fontSize: 20, fontWeight: 'bold'}}>{"Password"}</Text></View>
            <View style={{width: viewWidth-40, marginLeft: 20, marginRight:20, borderStyle:'solid', borderWidth: 2}}>
              <TextInput placeholder="password" secureTextEntry={true} style={{padding: 10}}></TextInput>
            </View>
          </View>
          <View>
            <View style={{width: viewWidth-40, marginHorizontal: 20, marginTop: 40}}>
              <TouchableOpacity style={{backgroundColor: '#2196F3'}}>
                <View style={{ paddingVertical: 10 }}>
                  <Text style={{color: 'white', fontSize:20, fontWeight:'bold',textAlign:'center'}}>{"Submit"}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
