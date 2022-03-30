import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Config from 'react-native-config';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>{Config.API_URL}</Text>
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
