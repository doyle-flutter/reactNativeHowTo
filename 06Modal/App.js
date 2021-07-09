import React, { useState } from 'react';
import { StyleSheet, Modal, Text, View, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';

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
  let [modalVisible, setModalVisible] = useState(false);
  let [modalVisible2, setModalVisible2] = useState(false);

  return (
    <View style={{flex:1, justifyContent:'space-evenly', alignItems:'center', backgroundColor:'white'}}>
      {/* Modal 1 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems:'flex-end', backgroundColor:'blue', paddingRight: 30, paddingTop: 40,}}>
            <View>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{color: 'white', fontWeight:'bold'}}>{"Close"}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 8, justifyContent:'center', alignItems:'center', backgroundColor: 'white', borderStyle:'solid', borderWidth:2, margin: 50,}}>
            <Text>{"Modal"}</Text>
          </View>
        </View>
      </Modal>

      {/* Modal 2 */}
      <View style={{position:'absolute', top: 0, bottom: 0, left: 0, right: 0, display: modalVisible2 ? 'flex' : 'none', backgroundColor: 'red', zIndex: 99}}>
        <View style={{flex:1, alignItems:'flex-end', justifyContent: 'center', paddingRight: 20}}>
          <TouchableOpacity onPress={() => setModalVisible2(!modalVisible2)}>
            <Text style={{color: 'white', fontWeight:'bold'}}>{"Close"}</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:8, alignItems:'center', justifyContent: 'center', backgroundColor: 'white'}}>
          <Text style={{color: 'black', fontWeight:'bold'}}>{"Modal 2"}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
          <View style={{padding:20, backgroundColor:'blue', borderRadius:10, width:200,}}>
            <Text style={{color:'white', fontWeight:'bold', textAlign:'center'}}>{"ModalButton"}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={()=>setModalVisible2(!modalVisible2)}>
          <View style={{padding:20, backgroundColor:'blue', borderRadius:10, width:200,}}>
            <Text style={{color:'white', fontWeight:'bold', textAlign:'center',}}>{"ModalButton2"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
