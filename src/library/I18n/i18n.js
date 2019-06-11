import i18n from 'i18n-js';
import RNLanguages from 'react-native-languages';

import en from './translations/en.json';
import ru from './translations/ru.json';

i18n.locale = RNLanguages.language;
i18n.fallbacks = true;
i18n.translations = {en, ru};

export default i18n;
