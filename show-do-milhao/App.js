import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

        <Image source={require('./src/assets/imagens/Saida.png')}
        style={{width: 50, height: 130}}
        resizeMode='contain'
        />
        <Image source={require('./src/assets/imagens/dineirinhocifrao.png')}
        style={{width: 50, height: 130}}
        resizeMode='contain'
        />

      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#3F69FF',
  },
});
