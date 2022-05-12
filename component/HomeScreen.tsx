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
import React, {useEffect, useState} from 'react';
import '../src/i18n';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart';
import * as RNLocalize from 'react-native-localize';
import CustomButton from './common/CustomButton';
import Typography from './common/Typography';
import CustomTextInput from './common/CustomTextInput';

const HomeScreen: React.FC = () => {
  console.log(RNLocalize.getLocales());

  const [input, setInput] = useState('');

  useEffect(() => {
    // RNRestart.Restart()
    console.log(I18nManager.isRTL);
  }, []);

  const data = [
    {
      id: 1,
      title: 'Notification Preference',
      icon: require('../assest/bell.png'),
    },
    {
      id: 2,
      title: 'Account Settings',
      icon: require('../assest/settings.png'),
    },
    {
      id: 3,
      title: 'Logout',
      icon: require('../assest/logout.png'),
    },
    {
      id: 4,
      title: 'Notification Preference',
      icon: require('../assest/bell.png'),
    },
    {
      id: 5,
      title: 'Account Settings',
      icon: require('../assest/settings.png'),
    },
    {
      id: 6,
      title: 'Logout',
      icon: require('../assest/logout.png'),
    },
    {
      id: 7,
      title: 'Notification Preference',
      icon: require('../assest/bell.png'),
    },
    {
      id: 8,
      title: 'Account Settings',
      icon: require('../assest/settings.png'),
    },
    {
      id: 9,
      title: 'Logout',
      icon: require('../assest/logout.png'),
    },
  ];

  const {t, i18n} = useTranslation();

  const renderItem = ({item}: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 3,
        }}>
        <Image style={myStyles.icon} source={item.icon} />
        {/* <Text style={{padding: 5, fontWeight: 'bold'}}>{t(item.title)}</Text> */}
        <Typography children={t(item.title)} />
      </View>
    );
  };

  return (
    <View style={myStyles.container}>
      <Typography
        style={{textAlign: 'left'}}
        children={t('Welcome to React')}
      />
      <View>
        <Typography children={t('Laptop')} />
        <View style={myStyles.row}>
          <Typography children={t('Dell')} />
          <Typography children={t('Dell')} />
          <Typography children={t('Dell')} />
        </View>
      </View>
      <View style={myStyles.inputWrapper}>
        <Typography children={t('TextInput test')} />
        <CustomTextInput
          value={input}
          placeholder={t("Input")}
          onChangeText={value => {
            setInput(value);
          }}
          onSubmitEditing={() => setInput('')}
          keyboardType="default"
          rightIcon="eye"
          leftIcon="apps"
        />
        {/* <Text>{input}</Text> */}
      </View>
      <View style={{marginTop: 10}}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  height: 1,
                  width: '100%',
                  backgroundColor: '#607D8B',
                }}
              />
            );
          }}
          renderItem={renderItem}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        {/* <Button
          title={t('Change language')}
          onPress={() => {
            i18n
              .changeLanguage(i18n.language === 'ur' ? 'en' : 'ur')
              .then(() => {
                I18nManager.forceRTL(i18n.language === 'ur');
              });
            RNRestart.Restart();
          }}
        /> */}
        <CustomButton
          title={t('Change language')}
          onPress={() => {
            i18n
              .changeLanguage(i18n.language === 'ur' ? 'en' : 'ur')
              .then(() => {
                I18nManager.forceRTL(i18n.language === 'ur');
              });
            RNRestart.Restart();
          }}
        />
      </View>
    </View>
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
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'space-around',
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

export default HomeScreen;
