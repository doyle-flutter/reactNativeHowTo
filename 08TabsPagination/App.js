import React, { useState } from 'react';
import { StyleSheet, Modal, Text, View, TouchableOpacity, SafeAreaView, Dimensions, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// * React Navigation
// https://reactnavigation.org/docs/getting-started/

// * React Navigation install
// > npm install @react-navigation/native
// > npm install @react-navigation/stack

function BodyView({navigation}){

  const datas = [
    {'title':'Title1', 'des':'DES....'},
    {'title':'Title2', 'des':'DESDES........'},
    {'title':'Title3', 'des':'DESDESDESDES........'},
    {'title':'Title4', 'des':'DESDESDESDESDESDESDESDES........'},
  ];
  const datas2 = [
    {'title':'Title1', 'des':'DES....'},
    {'title':'Title2', 'des':'DESDES........'},
    {'title':'Title3', 'des':'DESDESDESDES........'},
    {'title':'Title4', 'des':'DESDESDESDESDESDESDESDES........'},

    {'title':'Title11', 'des':'DES....'},
    {'title':'Title22', 'des':'DESDES........'},
    {'title':'Title33', 'des':'DESDESDESDES........'},
    {'title':'Title44', 'des':'DESDESDESDESDESDESDESDES........'},

    {'title':'Title111', 'des':'DES....'},
    {'title':'Title222', 'des':'DESDES........'},
    {'title':'Title333', 'des':'DESDESDESDES........'},
    {'title':'Title444', 'des':'DESDESDESDESDESDESDESDES........'},

    {'title':'Title1111', 'des':'DES....'},
    {'title':'Title2222', 'des':'DESDES........'},
    {'title':'Title3333', 'des':'DESDESDESDES........'},
    {'title':'Title4444', 'des':'DESDESDESDESDESDESDESDES........'},

    {'title':'22Title1', 'des':'DES....'},
    {'title':'22Title2', 'des':'DESDES........'},
    {'title':'22Title3', 'des':'DESDESDESDES........'},
    {'title':'22Title4', 'des':'DESDESDESDESDESDESDESDES........'},

    {'title':'333Title1', 'des':'DESDESDESDES........'},
    {'title':'333Title2', 'des':'DESDESDESDESDESDESDESDES........'},
  ];

  let [tabsIndex, setSetate1] = useState(0);
  let [pageIndex, setSetate2] = useState(0);
  let pageEa = 4;

  const onPress1 = e => setSetate1(e);
  const onPress2 = e => setSetate2(e);

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
    <View style={{flex: 1, backgroundColor: '#EEEEEE'}}>
      <View style={{flex: 1, backgroundColor: 'white', margin: 30, shadowColor: 'black', elevation: 5, shadowOpacity:0.2, shadowOffset:{width: 10, height:10} }}>
        <View style={{padding: 20}}><Text style={{fontWeight:'bold'}}>{"@Tabs"}</Text></View>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {datas.map( (e, i) => (
                <TouchableOpacity key={e.title} onPress={_ => onPress1(datas.indexOf(e))}>
                  <View style={{paddingHorizontal: 28, paddingVertical: 10, marginVertical: 5,backgroundColor: tabsIndex == i ? 'blue' : 'grey', marginRight: 10, shadowColor: 'black', elevation: 5, shadowOpacity:0.2, shadowOffset:{width: 5, height:5} }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>{e.title}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={{flex:1, padding: 10, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontWeight:'bold'}}>{datas[tabsIndex].des}</Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: 'white', margin: 30, shadowColor: 'black', elevation: 5, shadowOpacity:0.2, shadowOffset:{width: 10, height:10}}}>
        <View style={{padding: 20}}><Text style={{fontWeight:'bold'}}>{"@Pagination"}</Text></View>
        <View style={{flex:2, justifyContent:'center'}}>{
          datas2.slice(
            pageIndex === 0 ? 0 : pageIndex*pageEa, 
            pageIndex === 0 
              ? pageEa 
              : (pageIndex+1) * pageEa > datas2.length 
                ? datas2.length
                : (pageIndex+1) * pageEa 
          ).map((e,i,arr) => <View key={i}>
              <View style={{flexDirection:'row', justifyContent:'space-around', padding: 10, margin:10}}>
                <View style={{flex:1}}>
                  <Text>{e.title}</Text>
                </View>
                <View style={{flex:1}}>
                  <Text numberOfLines={1}>{e.des}</Text>
                </View>
              </View>
              
            </View>)
          }
        </View>
        <View style={{flexDirection:'row', flex: 1, alignItems: 'center', justifyContent:'center', shadowColor: 'black', elevation: 5, shadowOpacity:0.2, shadowOffset:{width: 5, height:5}}}>
          {new Array(
            datas2.length%pageEa > 0 ? Math.floor(datas2.length/pageEa)+1 : datas2.length/pageEa
            ).fill(0).map((e,i,arr) => (
            <TouchableOpacity key={i} onPress={_ => onPress2(i)} >
              <View style={{padding: 10, margin:5, backgroundColor: pageIndex == i ? 'blue' : 'grey'}}>
                  <Text style={{color: 'white', fontWeight:'bold'}}>{i+1}</Text>
              </View>
            </TouchableOpacity>
          ))}
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
        <Stack.Screen name="BodyView" component={BodyView} options={{title:"Tabs & PagiNation"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
