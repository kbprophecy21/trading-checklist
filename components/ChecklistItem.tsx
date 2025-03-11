import React from "react";
import { StyleSheet, View, Text } from "react-native";

// checklist interface for type checking.
interface ChecklistItemProps {
  text: string;
}

function ChecklistItem({ text }: ChecklistItemProps) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    backgroundColor: "#f9f9f9",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
});

export default ChecklistItem;
