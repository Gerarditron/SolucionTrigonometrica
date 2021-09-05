import { RefreshControlBase } from "react-native";
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function Footer({solve}){
    return(
    <View style={styles.viewFooter}>
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={solve}>
            <Text style={styles.text}>CALCULAR</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    viewFooter:{
        position:'absolute',
        bottom:0,
        width:'100%',
        backgroundColor:'#79E72E',
        height:100,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems:'center',
        justifyContent:'center',
    },
    button:{
        backgroundColor: '#04C22F',
        padding:16,
        borderRadius:20,
        width:'75%',
    },
    text:{
        fontWeight:'bold',
        fontSize:18,
        color:'#fff',
        textAlign:'center',
    },
});