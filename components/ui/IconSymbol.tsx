// This file is a fallback for using MaterialIcons on Android and web.

//import MaterialIcons from '@expo/vector-icons/MaterialIcons';
//import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle, ImageStyle, Image } from 'react-native';

// Add your custom icon mappings here.
const ICON_MAPPING = {
  "Trade.fill": require("@/assets/images/TradeIcon.png"),
  "Anaylsis.fill": require("@/assets/images/AnalysisIcon.png"),
} as const;

export type IconSymbolName = keyof typeof ICON_MAPPING;

interface IconSymbolProps {
  name: IconSymbolName;
  size?: number;
  color?: string | OpaqueColorValue;
  style?: StyleProp<ImageStyle>;
}

const IconSymbol: React.FC<IconSymbolProps> = ({
  name,
  size = 24,
  color,
  style,
}) => {
  const iconSource = ICON_MAPPING[name];

  if (!iconSource) {
    return null; // Return null if the icon name is not found in the mapping
  }

  return (
    <Image
      source={iconSource}
      style={[{ width: size, height: size, tintColor: color }, style]}
    />
  );
};

export default IconSymbol;