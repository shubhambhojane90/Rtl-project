import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  FlatList,
  Image,
  I18nManager,
} from 'react-native';
import React, {useEffect} from 'react';
import './src/i18n';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart';
import * as RNLocalize from 'react-native-localize';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './component/HomeScreen';
import SettingsScreen from './component/SettingsScreen';

const Tab = createBottomTabNavigator();

const App = () => {

  const {t, i18n} = useTranslation();

  const MyTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name={t("Home")} component={HomeScreen} />
        <Tab.Screen name={t("Settings")} component={SettingsScreen} />
      </Tab.Navigator>
    );
  };



  return (
    <>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </>
  );
};

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  inputWrapper: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    width: '50%',
    borderWidth: 2,
    borderRadius: 3,
    // textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  icon: {
    width: 30,
    height: 40,
    resizeMode: 'contain',
  },
});

export default App;
