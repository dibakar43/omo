import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header,Left,Right,Icon, Content,Footer} from 'native-base';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';
import FetchImages from './FetchImages';

export default class HomeScreen extends React.Component {
  componentDidMount(){
    url = `http://digiteeshirt.com/android/omo/${this.props.subject}/main.php`;
  }
  
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
        <Content><FetchImages subject={this.props.subject} /></Content>
      
        
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
