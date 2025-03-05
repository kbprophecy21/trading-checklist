import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { ViewStyle } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: '#088948',//"#6200ee",
    padding: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
