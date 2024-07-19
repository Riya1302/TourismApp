import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './screens/Header';
// import Home from './screens/Home';
import AppNavigator from './AppNavigator';
// import Surfing from './screens/Surfing';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* <Home /> */}
      {/* <Surfing /> */}
      <AppNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
