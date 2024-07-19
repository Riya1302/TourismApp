import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/Aloha.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  logo: {
    width: 150, // Adjust the width and height based on your image size
    height: 50, // Adjust the width and height based on your image size
    resizeMode: 'contain',
  },
});

export default Header;
