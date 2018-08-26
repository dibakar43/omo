import React, { Component } from 'react';
import {Icon} from 'native-base';
import { ScrollView, Text, View, StyleSheet,TouchableOpacity,Platform,Dimensions,Image,Share } from 'react-native';
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
  
  populateMenuHierarchay = () =>{
    return(
      <Bar
        key={index}
        title={item.title}
        titleStyle={{ color: '#fff',fontSize: 15,fontWeight: 'bold' }}
        style={{ backgroundColor: constants.app.color}}
        collapsible={true}
        showOnStart={false}
        iconCollapsed='chevron-right'
        iconOpened='chevron-down'
        iconSize={15}
        children={<BCAMenus rt={this.navigateToScreen} menuGroup={item.groupId} />} />
    );
  }
  
  
  homeOnPressHandler = () => {
    this.props.navigation.navigate('home');
  }

  shareOnPressHandler = () => {
      Share.share({
        message: 'http://codingmiles.com',
        title: 'Best title ever!',
        url: 'http://codingmiles.com'
      }, {
        dialogTitle: 'Share with',
        excludedActivityTypes: [
          'com.apple.UIKit.activity.PostToTwitter',
          'com.apple.uikit.activity.mail'
        ],
        tintColor: 'green'
      })
      .then(this._showResult)
      .catch(err => console.log(err))
    }

    collapsibleMenu =  constants.menus.map((item,index)=>{
      //console.log('inside collapsibleMenu');
     //console.log(item.groupId);
      return(
        <Bar
          key={index}
          title={item.title}
          titleStyle={{ color: '#fff',fontSize: 15,fontWeight: 'bold' }}
          style={{ backgroundColor: constants.app.color}}
          collapsible={true}
          showOnStart={false}
          iconCollapsed='chevron-right'
          iconOpened='chevron-down'
          iconSize={15}
          children={<BCAMenus rt={this.navigateToScreen} menuGroup={item.groupId} />} />
      );
    });
  

  render() {
    
    //console.log(collapsibleMenu);
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
            <TouchableOpacity onPress={this.shareOnPressHandler}>
                  <View style={{flex:1,flexDirection:'row',padding:5}}>
                      <Icon name = "share"/><Text style={styles.menuText}>Share</Text>
                  </View>
            </TouchableOpacity>
           {this.collapsibleMenu}
            
            
              
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
    paddingLeft: 10,
    fontSize: 14,
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
