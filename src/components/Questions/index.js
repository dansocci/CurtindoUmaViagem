import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Questions = () => {
  return (
    <View style={styles.container}>
      <Text>Perguntas</Text>
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
    borderWidth: 3,
    borderRadius: 9,
  },
});
