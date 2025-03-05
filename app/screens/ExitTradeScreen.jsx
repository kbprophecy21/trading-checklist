import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExitTradeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Exit a Trade Checklist</Text>
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

export default ExitTradeScreen;
