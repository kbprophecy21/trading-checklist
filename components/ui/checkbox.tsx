import { transform } from "@babel/core";
import React, { useEffect } from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";
import { AnimatedImage } from "react-native-reanimated/lib/typescript/component/Image";

// interface values for type checking.
interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
  checkmarkImage: any; // pass image here
}

//*
// CheckBox Component
//
const CheckBox: React.FC<CheckboxProps> = ({
  checked,
  onPress,
  checkmarkImage,
}) => {
  const scale = useSharedValue(checked ? 1 : 0);

  useEffect(() => {
    scale.value = withTiming(checked ? 1 : 0, { duration: 200 });
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: scale.value,
  }));

  return (
    <TouchableOpacity
      style={style.constainer}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[style.checkbox, checked && style.checked]}>
        <AnimatedImage
          source={checkmarkImage}
          style={[style.checkmark, animatedStyle]}
        />
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  constainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "", // need to add color
    alignItems: "center",
    justifyContent: "center",
  },

  checked: {
    backgroundColor: "", // need to add color
  },

  checkmark: {
    width: 20,
    height: 20,
    position: "absolute",
  },
});

export default CheckBox;
