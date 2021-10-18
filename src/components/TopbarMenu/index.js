import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import Colors from '../../../styles/Colors';

const TopbarMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.times}>
        <View style={styles.timeAzul}>
          <Text style={styles.score}>Pontos: </Text>
        </View>
        <View style={styles.timeVermelho}>
          <Text style={styles.score}>Pontos: </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
    alignItems: 'center',
  },
  times: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginRight: 10,
  },
  timeAzul: {
    backgroundColor: Colors.teamBlue,
    width: 120,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: Colors.white,
    borderWidth: 1,
    marginHorizontal: 10,
  },
  timeVermelho: {
    backgroundColor: Colors.teamRed,
    width: 120,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: Colors.white,
    borderWidth: 1,
    marginHorizontal: 10,
  },
  score: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TopbarMenu;
