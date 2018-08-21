import React, { Component } from 'react';
import {Icon} from 'native-base';
import { ScrollView, Text, View, StyleSheet,TouchableOpacity,Platform,Dimensions } from 'react-native';
import Bar from 'react-native-bar-collapsible';
import { NavigationActions } from 'react-navigation';
import { CardViewWithIcon } from "react-native-simple-card-view";
import PropTypes from 'prop-types';
import BCAMenus from './BCAMenus'

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
          <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'logo-github' }
            iosIcon={ 'logo-github' }
            iconHeight={ 30 }
            iconColor={ '#333' }
            title={ 'GITHUB' }
            contentFontSize={ 20 }
            titleFontSize={ 12 }
            style={ miniCardStyle }
            content='Nothing'
            
          />
          <TouchableOpacity onPress={this.homeOnPressHandler}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <Icon name = "home"/><Text style={styles.menuText}>Home</Text>
                </View>
          </TouchableOpacity>
          <Bar
              title='BCA'
              titleStyle={{ color: '#3396FF',fontSize: 15,fontWeight: 'bold' }}
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

});

export default SideMenu;
