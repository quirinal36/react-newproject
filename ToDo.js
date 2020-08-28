import React, {Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

export default class ToDo extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <View>
                <Text>Hello I'm a To Do</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});