//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Icon} from 'native-base';


// create a component
class BCAMenus extends Component {
    

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.button} onPress={this.props.rt.bind(this,'bca101')}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <Icon name = "home"/><Text style={styles.menuText}>BCA-101</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.props.rt.bind(this,'bca102')}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <Icon name = "home"/><Text style={styles.menuText}>BCA-102</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.props.rt.bind(this,'bca103')}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <Icon name = "home"/><Text style={styles.menuText}>BCA-103</Text>
                </View>
                </TouchableOpacity>
               
            </View>
        );
    }
}

// define your styles
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
        
    },

});

export default BCAMenus;
