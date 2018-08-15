import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header,Content,Footer,Left,Right,Icon} from 'native-base';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';

export default class SettingsScreen extends React.Component {
  componentDidMount() {
    console.log('GrandChild did mount.');
    // Display an interstitial
AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
//AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
  }

   static navigationOptions = {
    drawerIcon : ({tintColor}) =>(
        <Icon name = "home" style={{fontSize:24,color:tintColor}}/>
    )
  } 

  render() {
    return (
      <View style={styles.container}>
        <Header>
            <Left>
                <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()} 
                />
            </Left>
            <Right/>
        </Header>
        <Content><Text>Setting</Text></Content>
        <Footer><Footer><AdMobBanner
                    bannerSize="smartBannerPortrait"
                    adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                    testDeviceID="EMULATOR"
                    didFailToReceiveAdWithError={this.bannerError}/></Footer></Footer>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
