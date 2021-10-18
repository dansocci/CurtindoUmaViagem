import React, {useRef, useState} from 'react';
import {
  DrawerLayoutAndroid,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import TopbarMenu from '../../components/TopbarMenu';
import Questions from '../../components/Questions';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../styles/Colors';
import LateralMenu from '../../components/LateralMenu';

const PassaRepassa = ({navigation}) => {
  const drawer = useRef(null);
  const [drawerPosition] = useState('left');

  const lateralMenu = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <LateralMenu />
    </View>
  );
  return (
    <View style={styles.container}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={lateralMenu}>
        <TopbarMenu />
        <TouchableOpacity
          style={styles.menu}
          onPress={() => drawer.current.openDrawer()}>
          <Icon name="bars" size={30} color="#f5f6fa" />
        </TouchableOpacity>
        <Questions />
        <View style={styles.questionsActions}>
          <View style={styles.roundActions}>
            <TouchableOpacity
              style={[styles.roundBt, styles.startButton]}
              onPress={() => navigation.navigate('PassaRepassa')}>
              <Text style={styles.label}>VALENDO!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.roundBt, styles.timer]}>
              <Text style={styles.label}>30S</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.roundBt, styles.passButton]}
              onPress={() => navigation.navigate('PassaRepassa')}>
              <Text style={styles.actionLabel}>Passa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.roundBt, styles.repassButton]}
              onPress={() => navigation.navigate('PassaRepassa')}>
              <Text style={styles.actionLabel}>Repassa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.roundBt, styles.payButton]}
              onPress={() => navigation.navigate('Main')}>
              <Text style={styles.actionLabel}>Paga</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.answerAction}>
            <TouchableOpacity
              style={styles.answerButton}
              onPress={() => navigation.navigate('Main')}>
              <Text style={styles.label}>RESPOSTA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </DrawerLayoutAndroid>
    </View>
  );
};

export default PassaRepassa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigationContainer: {
    backgroundColor: Colors.gray,
  },
  menu: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: Colors.buttonBg,
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: Colors.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -60,
    marginLeft: 10,
    marginBottom: 10,
  },
  questionsActions: {
    flex: 3,
    justifyContent: 'center',
  },
  roundActions: {
    flex: 1,
    flexDirection: 'row',
  },
  roundBt: {
    backgroundColor: Colors.passBg,
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 2,
    flex: 1,
  },
  startButton: {
    display: 'none',
  },
  timer: {
    backgroundColor: Colors.timerBg,
    display: 'flex',
  },
  passButton: {
    display: 'none',
  },
  repassButton: {
    display: 'none',
  },
  payButton: {
    display: 'flex',
  },
  answerButton: {
    backgroundColor: Colors.answerBtBg,
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 2,
    flex: 2,
  },
  actionLabel: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 45,
    textAlign: 'center',
  },
  label: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  },
  answerAction: {
    flex: 2,
  },
});
