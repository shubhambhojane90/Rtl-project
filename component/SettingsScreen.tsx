import { View, Text } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next';
import Typography from './common/Typography';

const SettingsScreen : React.FC = () => {

  const {t, i18n} = useTranslation();

  return (
    <View>
      <Typography children={t("Settings")}  />
    </View>
  )
}

export default SettingsScreen