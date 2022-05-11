import {
    KeyboardTypeOptions,
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TextInput,
    View,
    ViewStyle,
    ReturnKeyTypeOptions,
    NativeSyntheticEvent,
    TextInputFocusEventData,
  } from 'react-native';
import React, { FC, useState } from 'react'
import { moderateScale } from 'react-native-size-matters';


interface Props {
    placeholder?: string;
    placeholderTextColor?: string;
    underlineColorAndroid?: string;
    value: string | any | undefined;
    setName?: (Name: string) => void;
    textTransform?: boolean;
    autoFocus?: boolean;
    keyboardType?: KeyboardTypeOptions;
    textContentType?: string | any;
    textStyle?: StyleProp<TextStyle> | undefined;
    topTextStyle?: StyleProp<TextStyle> | undefined;
    viewStyle?: StyleProp<ViewStyle> | undefined;
    errorStyles?: StyleProp<ViewStyle> | undefined;
    onChangeText?: (Name: string) => void;
    autoCorrect?: boolean;
    returnKeyType?: ReturnKeyTypeOptions | undefined;
    numberOfLines?: number;
    textAlign?: 'left' | 'right' | 'center';
    textAlignVertical?: 'center' | 'top' | 'auto' | 'bottom';
    onSubmitEditing?: (event: any) => void;
    error?: boolean;
    errorText?: string;
    multiline?: boolean;
    noExteriorView?: boolean;
    secureTextEntry?: boolean;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    maxLength?: number | undefined;
    onEndEditing?: any;
    color?: any;
    icon?: React.ReactNode;
    onFocus?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
    isTopText?: boolean;
  }

const CustomTextInput : FC<Props> = ({
    placeholder,
    placeholderTextColor = 'grey',
    value,
    setName,
    textTransform,
    autoFocus,
    keyboardType,
    textContentType,
    textStyle,
    topTextStyle,
    viewStyle,
    errorStyles,
    onChangeText,
    autoCorrect,
    returnKeyType,
    numberOfLines,
    textAlign,
    textAlignVertical,
    onSubmitEditing,
    multiline,
    errorText,
    secureTextEntry = false,
    autoCapitalize = 'none',
    maxLength,
    onEndEditing,
    color,
    icon,
    onFocus,
    ...inputProps
}) => {


  return (
    <>
      <TextInput
        style={[textStyle ? textStyle : myStyles.textInputStyle,color]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        textContentType={textContentType}
        textAlign={textAlign}
        textAlignVertical={textAlignVertical}
        autoCorrect={autoCorrect}
        returnKeyType={returnKeyType}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        maxLength={maxLength}
        onChangeText={Name => {
            if (onChangeText) {
              onChangeText(Name);
            }
          }}
        onSubmitEditing={event => {
            if (onSubmitEditing) {
              onSubmitEditing(event);
            }
          }}
        onEndEditing={onEndEditing}
        onFocus={onFocus}
        multiline={multiline}
        {...inputProps}
      />
    </>
  )
}

const myStyles = StyleSheet.create({

    textInputStyle: {
        marginVertical: moderateScale(10, 0.3),
        color: "black",
        width: '56%',
        height: moderateScale(60, 0.3),
        fontSize: moderateScale(16, 0.3),
        backgroundColor: "white",
        paddingHorizontal: moderateScale(10, 0.3),
        paddingVertical: moderateScale(7, 0.3),
        borderRadius: moderateScale(10, 0.3),
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: moderateScale(10, 0.3),
        },
        shadowOpacity: 0.25,
        shadowRadius: 8.84,
        elevation: 2,
      },
})

export default CustomTextInput