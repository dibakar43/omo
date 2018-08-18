import React from 'react';
import { StyleSheet, Text, View,  SafeAreaView, ScrollView,Dimensions,Image } from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SideMenu from './src/common/SideMenu';

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator/>
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex : 1}}>
    <View style={{height:150,backgroundColor : 'white', alignItems: 'center', justifyContent:'center'}}>
      <Image source={require('./src/assets/download.png')} style={{height:120,width:120, borderRadius:60}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
    
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator({
  Home:{screen:(props) => <HomeScreen {...props} subject='bca-101'/>},
  Settings:{screen:SettingsScreen},
},{
  contentComponent : SideMenu,
  contentOptions : {
    activeTintColor : 'blue'
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
