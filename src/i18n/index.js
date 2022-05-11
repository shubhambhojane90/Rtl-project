import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from "react-native";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next"
    }
  },
  ur: {
    translation: {
      "Welcome to React": "مرحبًا بك في React and response-i18next",
      "Notification Preference" : "تفضيل الإخطار ",
      "Account Settings" : "إعدادت الحساب",
      "Logout" : "تسجيل خروج",
      "Dell" :  "ديل" ,
      "Laptop": "حاسوب محمول ",
      "TextInput test": "حاسوب محمول",
      "Input":"حاسوب محمول",
    "Change language": "حاسوب محمول",
    "Home" : "ديل",
    "Settings" : "حاسوب"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    compatibilityJSON: 'v3',
    fallbackLng: I18nManager.isRTL ? 'ur' : 'en' ,
    // lng: I18nManager.isRTL ? 'ar' : 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;