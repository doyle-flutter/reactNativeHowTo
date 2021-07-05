import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.wrapper}>
      <AppBar />
      <Content />
    </View>
  );
}

const styles = StyleSheet.create({wrapper: {flex: 1}});

function AppBar(){
  const appBarStyles = {
    wrapper: {backgroundColor:'#2196F3', height:70, alignItems:'center', paddingTop: 10},
    title: {flex:1, textAlignVertical:"center", color:'white', fontWeight:'bold', fontSize:16 }
  };
  return (
    <View style={appBarStyles.wrapper}>
      <Text style={appBarStyles.title}>
        {"RN - HowTo"}
      </Text>
    </View>
  );
}

function Content(){

  const imgs = [
    {
      id: 1,
      src: "https://cdn.pixabay.com/photo/2021/06/29/18/55/mountain-slope-6374980__480.jpg"
    },
    {
      id: 2,
      src: "https://cdn.pixabay.com/photo/2021/05/02/23/26/red-6224930__480.jpg"
    },
    {
      id: 3,
      src: "https://cdn.pixabay.com/photo/2020/12/15/14/20/aerial-view-5833791__480.jpg"
    },
    {
      id: 4,
      src: "https://cdn.pixabay.com/photo/2021/03/31/10/48/tv-tower-6139241__480.jpg"
    },
    {
      id: 5,
      src: "https://cdn.pixabay.com/photo/2021/06/29/18/55/mountain-slope-6374980__480.jpg"
    },
  ];

  const contentStyle = {wrapper: {flex: 1, backgroundColor: 'red'},};

  const viewWidth = Dimensions.get('window').width;
  
  const viewHeight = Dimensions.get('window').height;

  let [cIndex, cSetState] = useState(0);
  let [btnCheck, bSetState] = useState(true);

  const fCt = React.createRef();

  const _rightFunc = () => {
    if(cIndex >= imgs.length-1) return;
    bSetState(false);
    cIndex+=1;
    fCt.current.scrollToIndex({index:cIndex});
    setTimeout(_ => bSetState(true), 400);
  }

  const _leftFunc = () => {
    if(cIndex <= 0) return;
    bSetState(false);
    cIndex-=1;
    fCt.current.scrollToIndex({index:cIndex})
    setTimeout(_ => bSetState(true), 400);
  }
  
  const _onScroll = e => cSetState(Math.min(Math.max(Math.floor(e.nativeEvent.contentOffset.x / viewWidth + 0.5), 0), imgs.length));
  
  const _onScrollBeginDrag = e => bSetState(false);
  
  const _onScrollEndDrag = e => setTimeout(() => bSetState(true), 400);

  const renderItem = ({ item }) => ( <Image 
      source={{ uri:item.src }} 
      style={{ width: viewWidth, height: viewHeight }} 
    /> );

  return (
    <View style={contentStyle.wrapper}>
      <FlatList 
        ref = {fCt}
        data={imgs} 
        pagingEnabled={true}
        onScroll={_onScroll}
        onScrollBeginDrag = {_onScrollBeginDrag}
        onScrollEndDrag = {_onScrollEndDrag}
        renderItem={renderItem}
        keyExtractor={item => `item:${item.id}`}
        horizontal={true}
      />
      {!btnCheck 
        ? (<View></View>)
        : (<>
            {cIndex === 0 
            ? (<View></View>)
            : (<View style={{position: 'absolute', top: viewHeight/2, left: 10, backgroundColor:'red', transform: [{translateY:-50}], padding:20}}>
                <TouchableOpacity onPress={_leftFunc}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>{"Left"}</Text>
                </TouchableOpacity>
              </View>)}
            {cIndex === imgs.length-1
            ? (<View></View>)
            : (<View style={{position: 'absolute', top: viewHeight/2, right: 10, backgroundColor:'red', transform: [{translateY:-50}], padding:20}}>
              <TouchableOpacity onPress={_rightFunc}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>{"Right"}</Text>
              </TouchableOpacity>
            </View>)}
          </>)
      }
    </View>
  );
}
