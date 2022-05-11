import {
  View,
  Text,
  Touchable,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

interface Props {
  title: string;
  onPress: any;
}

const CustomButton = (props: Props) => {
  return (
    <TouchableOpacity style={myStyles.buttonStyle} onPress={props.onPress}>
      <Text style={myStyles.textColor}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const myStyles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#3a86ff',
    padding: 10,
    borderRadius: 5,
  },
  textColor: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomButton;
