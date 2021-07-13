import React, { useState } from 'react';
import { StyleSheet, Modal, Text, View, TouchableOpacity, SafeAreaView, Dimensions, Image, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

function BodyView({navigation}){

  const imgs = [
    "https://cdn.pixabay.com/photo/2020/01/25/16/56/white-lotus-4792888__480.jpg",
    "https://cdn.pixabay.com/photo/2021/07/05/11/05/pink-beach-6388864__480.jpg",
    "https://cdn.pixabay.com/photo/2021/06/22/16/04/beauty-6356536__480.jpg",
    "https://cdn.pixabay.com/photo/2020/01/25/16/56/white-lotus-4792888__340.jpg",
    "https://cdn.pixabay.com/photo/2021/06/09/20/27/stars-6324434__480.jpg",
    "https://cdn.pixabay.com/photo/2021/07/02/06/49/dog-6381087__480.jpg",
    "https://cdn.pixabay.com/photo/2020/01/25/16/56/white-lotus-4792888__480.jpg",
    "https://cdn.pixabay.com/photo/2021/07/05/11/05/pink-beach-6388864__480.jpg",
    "https://cdn.pixabay.com/photo/2021/06/22/16/04/beauty-6356536__480.jpg",
    "https://cdn.pixabay.com/photo/2020/01/25/16/56/white-lotus-4792888__340.jpg",
    "https://cdn.pixabay.com/photo/2021/06/09/20/27/stars-6324434__480.jpg",
    "https://cdn.pixabay.com/photo/2021/07/02/06/49/dog-6381087__480.jpg",
    "https://cdn.pixabay.com/photo/2020/01/25/16/56/white-lotus-4792888__480.jpg",
    "https://cdn.pixabay.com/photo/2021/07/05/11/05/pink-beach-6388864__480.jpg",
    "https://cdn.pixabay.com/photo/2021/06/22/16/04/beauty-6356536__480.jpg",
    "https://cdn.pixabay.com/photo/2020/01/25/16/56/white-lotus-4792888__340.jpg",
    "https://cdn.pixabay.com/photo/2021/06/09/20/27/stars-6324434__480.jpg",
    "https://cdn.pixabay.com/photo/2021/07/02/06/49/dog-6381087__480.jpg",
  ];

  const counts = [1,2,4];

  let [imgGridCount, setSetate1] = useState(counts[1]);

  const _onPress = e => setSetate1(e);

  return (
    <View style={{flex: 1, backgroundColor: '#ddd'}}>
      <View style={{flexDirection:'row', margin:20, backgroundColor: 'white', borderRadius: 20, shadowColor:'black', shadowOpacity:0.3, shadowRadius: 10, shadowOffset:{width: 4, height:10}}}>
        {
          counts.map((e,i,arr) => (
              <View key={i} style={{flex:1, alignItems:'center'}}>
                <TouchableOpacity onPress={() => _onPress(e)}>
                  <View style={{backgroundColor: imgGridCount == e ? 'green' : '#ddd', padding: 20, margin: 10, borderRadius: 20, }}>
                    <Text style={{color: 'white', fontWeight:'bold'}}>{e}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))
        }
      </View>
      <View style={{flex:1, flexDirection:'row', backgroundColor: 'white'}}>
        <FlatList 
          data={imgs}
          renderItem={({ item }) => (<View><Image source={{uri:item}} style={{width:Dimensions.get('window').width/imgGridCount,height:Dimensions.get('window').width/imgGridCount}} /></View>)}
          numColumns={imgGridCount}
          key={imgGridCount}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BodyView">
        <Stack.Screen name="BodyView" component={BodyView} options={{title:"Image Grid"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
