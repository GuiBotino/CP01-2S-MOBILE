import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, StatusBar, FlatList, TouchableOpacity} from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import list from './list.json'


const {Screen, Navigator} = createNativeStackNavigator();

export const Rotas = () => {
  return(
    <NavigationContainer>
      <Navigator>
        <Screen
        name='FiapPass'
        component={FiapPass}
        />
        <Screen
        name='Formulario'
        component={Formulario}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export const FiapPass = ({navigation}) => {
  
  const pegarItem = (valor) => {
    const item = list.filter(item => item.id === valor)
    navigation.navigate('Formulario', {item:item[0]})
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => pegarItem(item.id)}
    >
      <Text style={styles.texto}>{item.service}</Text>
    </TouchableOpacity>
  );

  return(
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
      />
    </View>
  )
}


export const Formulario = ({navigation, route}) => {

  const {item} = route.params

  return(
    <View style={styles.container2}>
      <View style={styles.viewFormulario}>
        <Text style={styles.texto}>{item.service}</Text>
        <Text style={styles.texto}>{item.email}</Text>
        <Text style={styles.texto}>{item.password}</Text>
      </View>
      <View style={styles.viewFormulario2}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.texto}>voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default function App() {
  
  return(
    <SafeAreaView style={{flex:1}}>
      <Rotas/>
      <StatusBar/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  container2: {
    flex:1,
    justifyContent: 'center'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ff1493",
    padding: 10,
    borderRadius: 4,
    margin: 5
  },
  texto: {
    fontSize: 20
  },
  viewFormulario: {
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 80,
    backgroundColor: '#ff1493'
  }, 
  viewFormulario2: {
    marginHorizontal: 80
  }
})
