import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  name?: string;
}

export const DetailsScreen = ({name}: Props) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};
