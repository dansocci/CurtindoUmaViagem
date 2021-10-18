import React, {useRef, useState} from 'react';
import {
  DrawerLayoutAndroid,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../styles/Colors';

import ScorePannel from '../../components/ScorePanel';
import TopbarMenu from '../../components/TopbarMenu';
import LateralMenu from '../../components/LateralMenu';

const Main = ({navigation}) => {
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
        <ScorePannel />
        <View style={styles.challenges}>
          <TouchableOpacity
            style={styles.challengeButton}
            onPress={() => navigation.navigate('PassaRepassa')}>
            <Text style={styles.label}>PASSA OU REPASSA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.challengeButton}
            onPress={() => navigation.navigate('TortaNaCara')}>
            <Text style={styles.label}>TORTA NA CARA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.challengeButton}
            onPress={() => navigation.navigate('ImagemAcao')}>
            <Text style={styles.label}>IMAGEM E AÇÃO</Text>
          </TouchableOpacity>
        </View>
      </DrawerLayoutAndroid>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdde1',
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
  challenges: {
    flex: 4,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  challengeButton: {
    margin: 2,
    justifyContent: 'center',
    backgroundColor: Colors.buttonBg,
    alignContent: 'center',
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
  },
  label: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
  },
});

export default Main;
