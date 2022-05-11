import {View, Text, TextProps} from 'react-native';
import React from 'react';

type Props = TextProps;

const Typography: React.FC<Props> = ({children}) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default Typography;
