import React, {useState, useEffect} from 'react';
import Footer from './src/components/Footer';
import Form from './src/components/Form';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

export default function App() {
  const [formulario, setFormulario] = useState({
    numberA: null,
    numberB: null,
    numberC: null,
  });
  const [soluciones, setSoluciones] = useState({

    total1: 0,
    total2: 0,
  });
  const [error, setError] = useState('');

  const solve = () => {
    const {numberA, numberB, numberC} = formulario;
    const {total1, total2} = soluciones;

    if (!numberA) {
      setError('Digite su número A');
      setTimeout(() => {
        setError(null);
      }, 3000);
    } else if (!numberB) {
      setError('Digite su número B');
      setTimeout(() => {
        setError(null);
      }, 3000);
    } else if (!numberC) {
      setError('Digite su número C');
      setTimeout(() => {
        setError(null);
      }, 3000);
    } else {
      const squareroot = Math.pow(numberB, 2) - 4 * numberA * numberC;
      const denomin = 2*numberA;
      if (squareroot < 0) {
        setError('La Respuesta es Imaginaria');
        setTimeout(() => {
          setError(null);
        }, 3000);
        return;
      }

      const trigonX1 = (-numberB + Math.sqrt(squareroot)) /denomin;
      const trigonX2 = (-numberB - Math.sqrt(squareroot)) /denomin;
      
      setSoluciones({...soluciones, total2: trigonX2, total1:trigonX1});
      
      
    }
  };

  return (
    <View style={styles.backColor}>
      <SafeAreaView>
        <View style={styles.Header}>
          <Text style={styles.HeaderText}>
            Solucionador de Ecuaciones Cuadráticas
          </Text>
          <Image
            source={require('./src/imgs/turtle.png')}
            style={styles.HeaderImg}
          />
        </View>
      </SafeAreaView>
      {error ? (
        <View style={{flexDirection: 'row-reverse', justifyContent:'space-around'}}>
          <Image
            source={require('./src/imgs/turtle-angry.png')}
            style={styles.HeaderErrorImg}
          />
          <Text style={styles.Errores}>{error}</Text>
        </View>
      ) : null}
      <View>
        <Form formulario={formulario} setFormulario={setFormulario} />
        <View style={styles.Respuestas}>
          <Text style={styles.RespuestasText}> X1 = {soluciones.total1.toFixed(3)}</Text>
          <Image
            source={require('./src/imgs/turtle-yes.png')}
            style={styles.HeaderImg}
          />
        </View>
        <View style={styles.Respuestas}>
          <Text style={styles.RespuestasText}> X2 = {soluciones.total2.toFixed(3)}</Text>
          <Image
            source={require('./src/imgs/turtle-yes.png')}
            style={styles.HeaderImg}
          />
        </View>
      </View>
      <Footer solve={solve} />
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#04C22F',
    height: 65,
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 3,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    flexDirection: 'row',
  },
  HeaderText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  HeaderImg: {
    width: 50,
    height: 50,
    margin: 8,
  },
  backColor: {
    flex: 1,
    backgroundColor: '#C4FBC0',
  },
  Errores: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#870505',
    backgroundColor: '#BD1F1F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    alignItems:'center',
    height:48,
  },
  HeaderErrorImg:{
    width:75,
    height: 52,
    margin:2,
  },
  Respuestas:{
    flexDirection:'row',
    marginHorizontal: 10,
    alignItems:'center',
    justifyContent:'space-around',
    marginTop: 20,
  },
  RespuestasText:{
    textAlign:'center',
    fontSize: 20,
    paddingVertical: 2,
    paddingHorizontal: 20,
  },
});
