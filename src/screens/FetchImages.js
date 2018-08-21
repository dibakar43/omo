import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, StyleSheet } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

export default class FetchImages extends React.Component {

  _mounted = false;
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    this._mounted = true;
    //console.log(`http://digiteeshirt.com/android/omo/${this.props.subject}/main.php`);
    return fetch(`http://digiteeshirt.com/android/omo/${this.props.subject}/main.php`)
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        if (this._mounted) {
          this.setState({
            isLoading: false,
            dataSource: responseJson.images,
          }, function () {

          });
        }

      })
      .catch((error) => {
        console.error(error);
      });

  }

  componentWillUnmount() {
    this._mounted = false;
  }



  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <ResponsiveImage source={{ uri: item }} initWidth="500" initHeight="500" />}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{ width: "100%", height: 5, backgroundColor: 'black' }} />}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },

  loginForm: {
  },
});