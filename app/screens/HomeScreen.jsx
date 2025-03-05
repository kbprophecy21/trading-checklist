import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from '../../components/ui/custombutton';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomButton
        title="Take a Trade"
        onPress={() => navigation.navigate('TakeTrade')}
        style={styles.button}
      />
      <CustomButton
        title="Manage a Trade"
        onPress={() => navigation.navigate('ManageTrade')}
        style={styles.button}
      />
      <CustomButton
        title="Exit a Trade"
        onPress={() => navigation.navigate('ExitTrade')}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    width: 150,
    height: 150,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor:'#088948',//'#6200ee'
  },
});

export default HomeScreen;
