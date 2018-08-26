import React, { Component } from 'react';
import {Icon} from 'native-base';
import { ScrollView, Text, View, StyleSheet,TouchableOpacity,Platform,Dimensions,Image } from 'react-native';
import Bar from 'react-native-bar-collapsible';
import { NavigationActions } from 'react-navigation';

import PropTypes from 'prop-types';
import BCAMenus from './BCAMenus'
import * as constants from './Constants'

const drawerCover = require("../assets/drawer-cover.png");
const drawerImage = require("../assets/logo-kitchen-sink.png");

class SideMenu extends Component {
  navigateToScreen = (route) => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    console.log({ route });
    this.props.navigation.dispatch(navigateAction);
  }

  homeOnPressHandler = () => {
    this.props.navigation.navigate('home');
  }
  

  render() {
    const miniCardStyle = {
      shadowColor: '#000000',
      shadowOffsetWidth : 2,
      shadowOffsetHeight: 2,
      shadowOpacity: 0.1,
      hadowRadius: 5,
      bgColor: '#ffffff',
      padding: 5,
      margin: 5,
      borderRadius      : 3,
      elevation         : 3,
      width             : "97%"
    };
    return (
      <View >
        <ScrollView>

          <View>
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <TouchableOpacity onPress={this.homeOnPressHandler}>
                <View style={{flex:1,flexDirection:'row',padding:5}}>
                    <Icon name = "home"/><Text style={styles.menuText}>Home</Text>
                </View>
          </TouchableOpacity>
          <Bar
              title='BCA'
              titleStyle={{ color: '#7C0586',fontSize: 15,fontWeight: 'bold' }}
              style={{ backgroundColor: '#FF5733'}}
              collapsible={true}
              showOnStart={false}
              iconCollapsed='chevron-right'
              iconOpened='chevron-down'
              iconSize={15}
              children={<BCAMenus rt={this.navigateToScreen} />} />
             
          </View>
        </ScrollView>

      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,

  },
  menuText: {
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold'

  },
  drawerCover: {
    alignSelf: "stretch",
    height: deviceHeight / 3.5,
    width: null,
    position: "relative",
    marginBottom: 10
  },
  drawerImage: {
    position: "absolute",
    left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
    top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
    width: 210,
    height: 75,
    resizeMode: "cover"
  },

});

export default SideMenu;
