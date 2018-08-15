import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View >
        <ScrollView>
          <View>
            <Text>
              BCA 3rd Sem
            </Text>
            <View>
              <Text onPress={this.navigateToScreen('Home')}>
              Page1
              </Text>
            </View>
          </View>
          <View>
            <Text >
              Section 2
            </Text>
            <View >
              <Text  onPress={this.navigateToScreen('Settings')}>
                Page2
              </Text>
              <Text onPress={this.navigateToScreen('Page3')}>
                Page3
              </Text>
            </View>
          </View>
        </ScrollView>
        
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
