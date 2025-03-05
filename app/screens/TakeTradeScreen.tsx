import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TakeTradeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Take a Trade Checklist</Text>
      <Text>Hey Kyle we have connected another page</Text>
      {/* Add checklist items here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default TakeTradeScreen;
