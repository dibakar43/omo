import React, { Component } from 'react';
import {Icon} from 'native-base';
import { ScrollView, Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import Bar from 'react-native-bar-collapsible';
import { NavigationActions } from 'react-navigation';
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

  render() {
    return (
      <View >
        <ScrollView>

          <View>
          <TouchableOpacity onPress={this.props.navigation.navigate('home')}>
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
