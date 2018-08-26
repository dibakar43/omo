import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Dimensions,WebView,ActivityIndicator,BackAndroid,BackHandler} from 'react-native';
import { CardViewWithIcon } from "react-native-simple-card-view";
import { Header, Left, Right, Icon, Content, Footer } from 'native-base';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';
import * as constants from '../common/Constants';
import Webbrowser from 'react-native-custom-webview';
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  ActivityIndicatorLoadingView() {
    
    return (

      <ActivityIndicator
        color='#009688'
        size='large'
        style={styles.ActivityIndicatorStyle}
      />
    );
  }

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
    )
  }
  webView = {
    canGoBack: false,
    ref: null,
  }

  onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack();
      return true;
    }
    return false;
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress');
    }
  }
  render() {
    
    return (
      <View style={styles.container}>
        <Header style={{ backgroundColor: constants.app.color }}>
          <View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
            <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} style={{ padding: 10, color: 'white' }} />
            <Text style={styles.titleText}>{this.props.title}</Text>
          </View>
        </Header>
        <Content  contentContainerStyle={{ flex: 1 }}>
         
        <WebView 
         source={{uri: 'http://makautexam.net/'}} 
         javaScriptEnabled={true}
         domStorageEnabled={true}
         renderLoading={this.ActivityIndicatorLoadingView} 
         startInLoadingState={true}  
         ref={(webView) => { this.webView.ref = webView; }}
        onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
         />
         
      </Content>
        <Footer style={{ backgroundColor: constants.app.color }}><AdMobBanner
          bannerSize="smartBannerPortrait"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          testDeviceID="EMULATOR"
          didFailToReceiveAdWithError={this.bannerError} /></Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    innerContainer: {
        flex: 2, 
        alignItems:'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 25,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    ActivityIndicatorStyle:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
