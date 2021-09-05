import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export default function Form({formulario, setFormulario}){
    
    return(
        <>
        <View style={styles.FormBorder}>
            <View style={styles.OrdenarInputs}>
                <Text style={styles.InputText}>Digite su Número A: </Text>
                <TextInput style={styles.Inputs}
                    keyboardType="numeric"
                    style={styles.Inputs}
                    onChangeText =  {(e) => setFormulario({...formulario,numberA:e})}
                />
            </View>
            <View style={styles.OrdenarInputs}>
                <Text style={styles.InputText}>Digite su Número B: </Text>
                <TextInput 
                    keyboardType="numeric"
                    style={styles.Inputs}
                    onChangeText = {(e) => setFormulario({...formulario,numberB:e})}
                />
            </View>
            <View style={styles.OrdenarInputs}>
                <Text style={styles.InputText}>Digite su Número C: </Text>
                <TextInput 
                    keyboardType="numeric"
                    style={styles.Inputs}
                    onChangeText = {(e) => setFormulario({...formulario,numberC:e})}
                />
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    FormBorder:{
        borderColor: '#04C22F',
        borderWidth: 3,
        borderRadius: 20,
        marginHorizontal:5,
        marginVertical:5,
        paddingVertical:5,
        paddingHorizontal:10,
        paddingBottom:15,
    },
    OrdenarInputs:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-around',
        marginTop:10,
    },
    InputText:{
        fontSize:18,
    },
    Inputs:{
        textAlign:'center',
        fontSize:18,
        borderRadius:10,
        backgroundColor:'#fff',
        paddingVertical:2,
        marginLeft:5,
        width:'40%',
    },
});