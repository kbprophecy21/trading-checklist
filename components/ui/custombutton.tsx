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
    width: 150,
    height: 150,
    margin: 20,
    marginLeft: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#6200ee", // oringal "#6200ee",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
