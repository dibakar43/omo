//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Icon} from 'native-base';
import * as constants from './Constants';

class MenuList extends Component {
    constructor(props) {
        super(props);
      }
      menuList= this.props.items.map((item,index) => {
        return(
        <TouchableOpacity key={index} style={styles.button} onPress={this.props.rt.bind(this,item.id)}>
            <View style={{flex:1,flexDirection:'row'}}>
                <Icon name = "star"/>
                <View style={{flex:1,flexDirection:'column'}}>
                    <Text style={styles.menuText2}>{item.subName}</Text>
                    <Text style={styles.menuText1}>{item.subCode}</Text>
                </View>
            </View>
        </TouchableOpacity>
        );
    });
      render(){
        return (
            <View>
                {this.menuList}
            </View>
        );
      }
}

class BCAMenus extends Component {
    constructor(props) {
        super(props);
      }
      
     
    render() {
        menuGroup = this.props.menuGroup;

        group=constants.menus.filter(function(item){
            return item.groupId === menuGroup;
        });
        
        return (
            <View style={{flex:1}}>
                <MenuList items={group[0].items} rt={this.props.rt} />
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
    menuText1: {
        paddingLeft: 10,
        fontSize: 14,  
    },
    menuText2: {
        paddingLeft : 10,
        fontSize: 11,  
    },

});

export default BCAMenus;
