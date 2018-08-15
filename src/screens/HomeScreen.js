import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header,Left,Right,Icon, Content,Footer} from 'native-base';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';

export default class HomeScreen extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.subject === undefined) {
        //this.props.subject = 'default';
    }
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
        <Content><Text>Home {this.props.subject}</Text></Content>
      
        
        <Footer><AdMobBanner
                    bannerSize="smartBannerPortrait"
                    adUnitID="ca-app-pub-3940256099942544/6300978111" 
                    testDeviceID="EMULATOR"
                    didFailToReceiveAdWithError={this.bannerError}/></Footer>
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
