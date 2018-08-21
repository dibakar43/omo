import React from 'react';
import { StyleSheet, Text, View,  SafeAreaView, ScrollView,Dimensions,Image } from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';
import MainScreen from './src/screens/MainScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SideMenu from './src/common/SideMenu';
import HomeScreen from './src/screens/HomeScreen';

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
  home:HomeScreen,
  bca101:{screen:(props) => <MainScreen {...props} subject='bca-101' title='BCA-101'/>},
  bca102:{screen:(props) => <MainScreen {...props} subject='bca-102' title='BCA-102'/>},
  bca103:{screen:(props) => <MainScreen {...props} subject='bca-103' title='BCA-103'/>},
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
