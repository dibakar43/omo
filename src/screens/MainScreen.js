import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Left, Right, Icon, Content, Footer } from 'native-base';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';
import FetchImages from './FetchImages';
import * as constants from '../common/Constants';

export default class MainScreen extends React.Component {
  componentDidMount() {
    url = `http://digiteeshirt.com/android/omo/${this.props.subject}/main.php`;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.subject === undefined) {
      //this.props.subject = 'default';
    }
  }

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
    )
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
        <Content><FetchImages subject={this.props.subject} /></Content>


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
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 20,
    padding:10,
    width: "100%"
  }
});
