import {
    KeyboardTypeOptions,
    StyleProp,
    StyleSheet,
    TextStyle,
    ViewStyle,
    ReturnKeyTypeOptions,
    NativeSyntheticEvent,
    TextInputFocusEventData,
    I18nManager,
  } from 'react-native';
import React, { FC } from 'react'
import { moderateScale } from 'react-native-size-matters';
import { TextInput } from 'react-native-paper';
import COLORS from '../../constant/color';


// react native paper
// left icon and right icon
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
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    onFocus?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
    isTopText?: boolean;
  }

const CustomTextInput : FC<Props> = ({
    placeholder,
    placeholderTextColor = COLORS.gray,
    value,
    setName,
    textTransform,
    underlineColorAndroid,
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
    secureTextEntry,
    autoCapitalize,
    maxLength,
    onEndEditing,
    color,
    rightIcon,
    leftIcon,
    onFocus,
    ...inputProps
}) => {

// handle rtl layout
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
        underlineColorAndroid={underlineColorAndroid}
        textAlign={textAlign}
        textAlignVertical={textAlignVertical}
        autoCorrect={autoCorrect}
        returnKeyType={returnKeyType}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        right={<TextInput.Icon name={rightIcon} />}
        left={<TextInput.Icon name={leftIcon} />}
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
        color: COLORS.black, 
        width: moderateScale(200,0.4),
        height: moderateScale(60, 0.3),
        fontSize: moderateScale(16, 0.3),
        backgroundColor: COLORS.white,
        paddingHorizontal: moderateScale(10, 0.3),
        paddingVertical: moderateScale(7, 0.3),
        borderRadius: moderateScale(10, 0.3),
        shadowColor: COLORS.black,
        shadowOffset: {
          width: moderateScale(0,0),
          height: moderateScale(10, 0.3),
        },
        shadowOpacity: 0.25,
        shadowRadius: 8.84,
        elevation: 2,
        textAlign :  I18nManager.isRTL ? 'right' : 'left',
      },
})

export default CustomTextInput