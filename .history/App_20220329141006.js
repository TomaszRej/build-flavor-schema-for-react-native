import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Config from 'react-native-config';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>NAD</Text>
      <Text>{Config.API_URL}</Text>
      <Text>POD</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
