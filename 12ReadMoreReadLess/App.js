import React, { useState, useRef } from 'react';
import { Animated, StyleSheet, Modal, Text, View, TouchableOpacity, SafeAreaView, Dimensions, Image, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { abs, Easing } from 'react-native-reanimated';

function BodyView({navigation}){

  let [examCheck1, setState1] = useState(false);
  let [examCheck2, setState2] = useState(false);

  const examData1 = {
    title: "ExamTitle 1",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta."
  },
  examData2 = {
    title: "ExamTitle 2",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta."
  };

  const exam1 = ({examData1}) => (
      <View key={examData1.title}>
        <View style={{padding: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>{examData1.title}</Text>
        </View>
        <View style={{margin: 20, padding: 10, borderWidth: 2, borderColor: 'grey'}}>
          <Text numberOfLines={examCheck1 ? null : 1}>{examData1.des}</Text>
        </View>
        <TouchableOpacity onPress={() => setState1(!examCheck1)}>
          <View style={{backgroundColor: !examCheck1 ? 'red' : 'grey', margin: 20, padding: 10, width: 100, alignItems: 'center', alignSelf:'center'}}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>{!examCheck1 ? "more" : "less"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );

  const exam2 = ({examData2}) => (
    <View key={examData2.title}>
      <View style={{padding: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{examData2.title}</Text>
      </View>
      <View style={{margin: 20, padding: 10, borderWidth: 2, borderColor: 'grey', overflow: !examCheck2 ? 'hidden' : 'visible', height:!examCheck2 ? 100 : null}}>
        <Text numberOfLines={examCheck2 ? null : 1}>{examData2.des}</Text>
        {['red', 'blue', 'yellow', 'black'].map((_, i, __) => (<View key={i} style={{margin: 20, height: 400, backgroundColor: _}}></View>))}
      </View>
      <TouchableOpacity onPress={() => setState2(!examCheck2)}>
        <View style={{margin: 20,backgroundColor: !examCheck2 ? 'purple' : 'grey', margin: 20, padding: 10, width: 100, alignItems: 'center', alignSelf:'center'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>{!examCheck2 ? "more" : "less"}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (  
    <ScrollView>
      <View style={{flex: 1, backgroundColor: '#eee'}}>
          {exam1({examData1})}
          {exam2({examData2})}
      </View>
    </ScrollView>
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
