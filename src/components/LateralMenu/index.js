import React from 'react';
import {StyleSheet, Image, TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../styles/Colors';

const LateralMenu = ({navigation}) => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            source={require('../../../assets/img/logo.png')}
            style={styles.logo}
          />
          <View style={styles.gameText}>
            <Text style={styles.gameName}>CURTINDO UMA</Text>
            <Text style={styles.gameName}>VIAGEM EM FAMILIA!</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonSection}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PassaRepassa')}>
          <Icon
            name="home"
            size={30}
            color="#f5f6fa"
            style={styles.iconButton}
          />
          <Text style={styles.textButton}>Tela inicial</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon
            name="music"
            size={30}
            color="#f5f6fa"
            style={styles.iconButton}
          />
          <Text style={styles.textButton}>Gincana</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon
            name="exclamation-triangle"
            size={30}
            color="#f5f6fa"
            style={styles.iconButton}
          />
          <Text style={styles.textButton}>Plantão</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newGame}>
        <TouchableOpacity style={[styles.button, styles.newGameButton]}>
          <Icon
            name="times-circle"
            size={30}
            color="#f5f6fa"
            style={styles.iconButton}
          />
          <Text style={styles.textButton}>Novo Jogo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LateralMenu;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.headerMenu,
    borderBottomWidth: 1,
  },
  headerContent: {
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  gameText: {
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  gameName: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 7,
  },
  buttonSection: {
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
    height: 60,
    backgroundColor: 'rgba(184, 184, 184, 0.5)',
  },
  textButton: {
    color: Colors.white,
    fontSize: 25,
    fontWeight: 'bold',
  },
  iconButton: {
    marginRight: 20,
  },
  newGame: {
    marginTop: 300,
    justifyContent: 'center',
  },
  newGameButton: {
    backgroundColor: 'rgba(232, 65, 24, 0.5)',
  },
});
