import React,{useRef,useEffect} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Statusbar from './statusbar';
import SplashScreen from 'react-native-splash-screen';
import{WebView} from 'react-native-webview';
const AppMajor = () =>{
  const webViewRef = useRef(null);
  const goback = () =>{
    webViewRef.current.goBack();
  };
  const goforward = () =>{
    webViewRef.current.goForward();
  };
  useEffect(()=>{
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  },[]);
  return(
    <>
      <Statusbar backgroundColor='#144184' barStyle='light-content'/>
      <View style={AppStyle.AppTopView}>
        <Text onPress={goback} style={AppStyle.AppTopText}>Back</Text>
        <Text onPress={goforward} style={AppStyle.AppTopText}>Forward</Text>
      </View>
      <WebView ref={webViewRef} source={{uri:'https://hdtoday.cc/home'}}/>
    </>
  );
};
const AppStyle = StyleSheet.create({
  AppTopView: {
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#144184',
    paddingHorizontal: 25,
  }, 
  AppTopText: {
    fontSize: 14,
    color: '#fff',
  },
});
export default React.memo(AppMajor);